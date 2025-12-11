# Architecture Modulaire du Dashboard DSIN

## 🏗️ Vue d'ensemble

Le dashboard est organisé en modules JavaScript indépendants, chacun ayant une responsabilité spécifique. Cette architecture facilite la maintenance, la réutilisation du code et l'ajout de nouvelles épreuves.

```
┌─────────────────────────────────────────────────────────┐
│                     index.html                          │
│              (Structure HTML statique)                  │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
        ┌──────────────────────────────────────┐
        │         Chargement des modules       │
        └──────────────────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
   ┌─────────┐      ┌─────────────┐   ┌──────────────┐
   │config.js│      │components.js│   │systemes.js   │
   │         │      │             │   │audit.js      │
   │sections │      │renderDefault│   │render*Content│
   └─────────┘      └─────────────┘   └──────────────┘
        │                  │                  │
        └──────────────────┼──────────────────┘
                           ▼
                    ┌──────────────┐
                    │   app.js     │
                    │              │
                    │ • Navigation │
                    │ • Rendu      │
                    │ • Events     │
                    └──────────────┘
```

## 📦 Détail des modules

### 1. `config.js` - Configuration centrale

**Responsabilité** : Définir la structure et les métadonnées de toutes les sections.

```javascript
const sections = {
  nom_section: {
    title: "Titre affiché",
    focus: "Description courte",
    slots: ["Slot 1", "Slot 2"],
    customContent: true / false, // Si true, utilise un renderer dédié
    captions: ["Caption 1", "Caption 2"], // Optionnel
  },
};
```

**Variables exportées** :

- `sections` : Objet contenant toutes les configurations

---

### 2. `components.js` - Composants réutilisables

**Responsabilité** : Fournir des fonctions de rendu pour les sections standard.

**Fonctions exportées** :

- `renderDefaultContent(section)` : Génère le HTML par défaut avec cartes Focus, Statut et Grid

**Utilisation** :

```javascript
const html = renderDefaultContent(sections.logs);
cardsContainer.innerHTML = html;
```

---

### 3. `systemes.js` - Contenu page Systèmes

**Responsabilité** : Générer le contenu immersif de la page Systèmes avec la menace L.U.M.E.N.

**Fonctions exportées** :

- `renderSystemesContent()` : Retourne le HTML complet de la page

**Éléments inclus** :

- Alerte critique d'intrusion
- Tableau des hôtes compromis (4 serveurs)
- Liste des services (simbusd, ssh-daemon, nginx)
- Statut des backups (3 sauvegardes)
- Message de menace L.U.M.E.N.

---

### 4. `audit.js` - Contenu page Audit & Conformité

**Responsabilité** : Générer le contenu immersif de la page Audit avec menaces RGPD.

**Fonctions exportées** :

- `renderAuditContent()` : Retourne le HTML complet de la page

**Éléments inclus** :

- Alerte d'altération des journaux
- Log viewer avec 6 entrées
- Tableau RGPD (4 bases de données)
- Liste de rapports bloqués (4 documents)
- Ultimatum avec compte à rebours

---

### 5. `app.js` - Logique principale

**Responsabilité** : Orchestrer la navigation et le rendu dynamique.

**Fonctions principales** :

```javascript
renderSection(key); // Affiche une section selon sa clé
```

**Flux d'exécution** :

1. Récupération des éléments DOM
2. Écoute des clics sur les items de navigation
3. Appel de `renderSection()` avec la clé de section
4. Détermination du renderer (custom ou default)
5. Mise à jour du DOM

---

## 🎯 Ajouter une nouvelle épreuve

### Scénario 1 : Ajouter du contenu à une section existante (ex: Logs)

1. **Créer le fichier de contenu** : `js/logs.js`

```javascript
function renderLogsContent() {
  return `
    <article class="card">
      <p class="eyebrow">Logs en temps réel</p>
      <h3>Console système</h3>
      <!-- Votre contenu ici -->
    </article>
  `;
}
```

2. **Modifier la configuration** : `js/config.js`

```javascript
logs: {
  title: "Logs",
  customContent: true,  // Activer le contenu personnalisé
}
```

3. **Mettre à jour la logique** : `js/app.js`

```javascript
if (section.customContent) {
  if (key === "systemes") {
    cardsContainer.innerHTML = renderSystemesContent();
  } else if (key === "audit") {
    cardsContainer.innerHTML = renderAuditContent();
  } else if (key === "logs") {
    cardsContainer.innerHTML = renderLogsContent(); // Ajout
  }
}
```

4. **Charger le script** : `index.html`

```html
<script src="js/logs.js"></script>
<!-- Avant app.js -->
<script src="js/app.js"></script>
```

---

### Scénario 2 : Créer une nouvelle section complète

1. **Ajouter l'onglet dans la sidebar** : `index.html`

```html
<li class="nav-item" data-target="ma_section">
  <span class="dot dot-pink"></span>
  Ma Section
</li>
```

2. **Configurer la section** : `js/config.js`

```javascript
ma_section: {
  title: "Ma Section",
  customContent: true,
}
```

3. **Créer le contenu** : `js/ma_section.js`

```javascript
function renderMaSectionContent() {
  return `<article class="card">...</article>`;
}
```

4. **Mettre à jour la logique** : `js/app.js`

```javascript
else if (key === "ma_section") {
  cardsContainer.innerHTML = renderMaSectionContent();
}
```

5. **Charger le script** : `index.html`

```html
<script src="js/ma_section.js"></script>
```

---

## 🔄 Flux de navigation

```
Utilisateur clique sur un onglet
         │
         ▼
Event listener (app.js)
         │
         ▼
Récupère data-target="section_name"
         │
         ▼
Retire .active de tous les items
         │
         ▼
Ajoute .active sur l'item cliqué
         │
         ▼
Appelle renderSection("section_name")
         │
         ▼
Récupère sections["section_name"]
         │
         ▼
Met à jour pageTitle.textContent
         │
         ▼
section.customContent === true ?
         │
    ┌────┴────┐
    │         │
   OUI       NON
    │         │
    ▼         ▼
render*     renderDefault
Content()   Content()
    │         │
    └────┬────┘
         ▼
cardsContainer.innerHTML = html
         │
         ▼
   Page mise à jour
```

---

## 🎨 Composants CSS disponibles

### Cards

- `.card` : Carte standard
- `.card.alert-danger` : Alerte critique (rouge)
- `.card.highlight` : Mise en avant (gradient)
- `.card.message-card` : Message L.U.M.E.N. (effets spéciaux)

### Tables

- `.data-table` : Tableau de données
- `.table-wrapper` : Wrapper avec scroll horizontal

### Pills (badges)

- `.pill.pill-success` : Vert (#00ff9d)
- `.pill.pill-danger` : Rouge (#ff0055)
- `.pill.pill-warning` : Orange (#ffbe0b)

### Listes

- `.service-list` / `.service-item` : Liste de services
- `.file-list` / `.file-item` : Liste de fichiers
- `.backup-status` / `.backup-item` : Statut backups

### Utilitaires

- `.log-viewer` : Console de logs
- `.countdown-timer` : Compte à rebours animé
- `.progress-bar` : Barre de progression
- `.code-inline` : Bloc de code

---

## 💡 Bonnes pratiques

### 1. Séparation des responsabilités

- Un fichier = une section complexe
- Pas de logique métier dans `app.js`, seulement l'orchestration
- Configuration centralisée dans `config.js`

### 2. Nommage

- Fichiers : `nom_section.js` (snake_case)
- Fonctions : `renderNomSectionContent()` (camelCase)
- Variables : descriptives et explicites

### 3. Ordre de chargement

```html
<!-- Toujours dans cet ordre : -->
<script src="js/config.js"></script>
<!-- 1. Config -->
<script src="js/components.js"></script>
<!-- 2. Composants -->
<script src="js/section1.js"></script>
<!-- 3. Sections -->
<script src="js/section2.js"></script>
<script src="js/app.js"></script>
<!-- 4. Logique -->
```

### 4. Retourner du HTML, pas manipuler le DOM

```javascript
// ✅ BON
function renderContent() {
  return `<article>...</article>`;
}

// ❌ MAUVAIS
function renderContent() {
  const article = document.createElement("article");
  // ...
}
```

### 5. Utiliser les classes CSS existantes

Réutiliser au maximum les composants définis dans `styles.css` pour maintenir la cohérence visuelle.

---

## 🔧 Dépendances entre modules

```
app.js
  ├── dépend de → config.js (sections)
  ├── dépend de → components.js (renderDefaultContent)
  ├── dépend de → systemes.js (renderSystemesContent)
  └── dépend de → audit.js (renderAuditContent)

components.js
  └── dépend de → config.js (structure section)

systemes.js
  └── aucune dépendance

audit.js
  └── aucune dépendance
```

**Règle d'or** : Les modules de contenu (systemes.js, audit.js) ne doivent jamais dépendre d'autres modules JavaScript. Ils sont autonomes et ne font que retourner du HTML.
