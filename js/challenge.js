// Challenge 5 - CTF Popup Challenge
// Système de popups aléatoires

class PopupChallenge {
  constructor() {
    this.maxPopups = 10;
    this.initialMaxPopups = 10; // Garder la limite initiale
    this.popupInterval = 1000; // 0.5 secondes
    this.activePopups = [];
    this.popupCount = 0;
    this.closedCount = 0;
    this.isActive = false;
    this.intervalId = null;
    this.totalPopupsCreated = 0; // Nombre total de popups créés

    // Données variées pour les popups
    this.popupData = [
      {
        type: "warning",
        icon: "⚠️",
        title: "Alerte Sécurité",
        message: "Tentative de connexion suspecte détectée sur le serveur WEB-01",
      },
      {
        type: "error",
        icon: "🚨",
        title: "Incident Critique",
        message: "Activité malveillante détectée : Scan de ports sur 192.168.1.100",
      },
      {
        type: "info",
        icon: "ℹ️",
        title: "Mise à jour système",
        message: "Le serveur DB-02 nécessite une mise à jour de sécurité urgente",
      },
      {
        type: "success",
        icon: "✓",
        title: "Authentification",
        message: "Nouvelle connexion administrateur depuis 10.0.5.42",
      },
      {
        type: "warning",
        icon: "⚡",
        title: "Performance",
        message: "Utilisation CPU élevée détectée sur SRV-APP-03 (92%)",
      },
      {
        type: "error",
        icon: "🔒",
        title: "Accès refusé",
        message: "Échec d'authentification multiple sur compte admin (5 tentatives)",
      },
      {
        type: "info",
        icon: "📊",
        title: "Rapport",
        message: "Analyse hebdomadaire de sécurité disponible - 147 événements",
      },
      {
        type: "warning",
        icon: "🌐",
        title: "Réseau",
        message: "Trafic anormal détecté sur le VLAN 50 (2.4 GB sortant)",
      },
      {
        type: "error",
        icon: "💀",
        title: "Malware détecté",
        message: "Fichier suspect en quarantaine : trojan.ransomware.exe",
      },
      {
        type: "success",
        icon: "🛡️",
        title: "Firewall",
        message: "Règle de pare-feu activée : Blocage IP 45.123.67.89",
      },
      { type: "info", icon: "📁", title: "Backup", message: "Sauvegarde automatique terminée - 1.2 TB transférés" },
      {
        type: "warning",
        icon: "🔑",
        title: "Certificat SSL",
        message: "Le certificat SSL de api.dsin.ua expire dans 7 jours",
      },
      {
        type: "error",
        icon: "🔥",
        title: "Intrusion",
        message: "Détection IDS : Tentative d'exploitation CVE-2024-1234",
      },
      {
        type: "info",
        icon: "👤",
        title: "Utilisateur",
        message: "Nouveau compte créé : j.martin@dsin.ua (accès limité)",
      },
      {
        type: "warning",
        icon: "⏰",
        title: "Session",
        message: "Session administrateur expirée - Reconnexion requise",
      },
      {
        type: "success",
        icon: "🔐",
        title: "Chiffrement",
        message: "Données sensibles chiffrées avec succès (AES-256)",
      },
      { type: "error", icon: "🎯", title: "DDoS Alert", message: "Attaque DDoS potentielle détectée - 15k req/s" },
      { type: "info", icon: "🔍", title: "Audit", message: "Scan de vulnérabilité planifié pour 02:00 AM" },
      { type: "warning", icon: "💾", title: "Espace disque", message: "Partition /var/log à 87% sur SRV-LOG-01" },
      {
        type: "error",
        icon: "⛔",
        title: "Compliance",
        message: "Non-conformité RGPD détectée dans la base utilisateurs",
      },
    ];
  }

  // Initialiser le challenge
  init() {
    this.createContainer();
    this.start();
  }

  // Créer le conteneur pour les popups
  createContainer() {
    if (!document.getElementById("popup-container")) {
      const container = document.createElement("div");
      container.id = "popup-container";
      container.className = "popup-container";
      document.body.appendChild(container);
    }
  }

  // Démarrer le challenge
  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.popupCount = 0;
    this.closedCount = 0;
    this.activePopups = [];
    this.totalPopupsCreated = 0;

    // Créer les 10 popups initiaux rapidement (50ms entre chaque)
    for (let i = 0; i < this.initialMaxPopups; i++) {
      setTimeout(() => {
        if (this.isActive) {
          this.createPopup();
        }
      }, i * 50);
    }

    // Après l'initialisation, maintenir les popups avec l'intervalle normal
    this.intervalId = setInterval(() => {
      this.maintainPopups();
    }, this.popupInterval);
  }

  // Maintenir le nombre de popups actifs à 10
  maintainPopups() {
    // Nombre de popups actuellement visibles
    const activeCount = this.activePopups.length;

    // Ne créer un popup que si on est en dessous de 10
    // Cela évite de créer 2 popups en même temps (intervalle + closePopup)
    if (activeCount < this.initialMaxPopups) {
      this.createPopup();
    }

    // Vérifier si tous les popups sont fermés ET qu'on a atteint le minimum requis
    if (this.activePopups.length === 0 && this.closedCount >= this.initialMaxPopups) {
      clearInterval(this.intervalId);
      this.onAllPopupsClosed();
    }
  }

  // Créer un popup
  createPopup() {
    const popupId = `popup-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const data = this.popupData[Math.floor(Math.random() * this.popupData.length)];

    // Position aléatoire
    const maxX = window.innerWidth - 570;
    const maxY = window.innerHeight - 280;
    const x = Math.max(20, Math.random() * maxX);
    const y = Math.max(20, Math.random() * maxY);

    const popup = document.createElement("div");
    popup.id = popupId;
    popup.className = `ctf-popup ctf-popup-${data.type}`;
    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;

    popup.innerHTML = `
      <div class="ctf-popup-header">
        <div class="ctf-popup-icon">${data.icon}</div>
        <div class="ctf-popup-title">${data.title}</div>
        <button class="ctf-popup-close" data-popup-id="${popupId}">✕</button>
      </div>
      <div class="ctf-popup-body">
        <p class="ctf-popup-message">${data.message}</p>
        <div class="ctf-popup-meta">
          <span class="ctf-popup-time">${this.getCurrentTime()}</span>
          <span class="ctf-popup-number">#${this.totalPopupsCreated + 1}</span>
        </div>
      </div>
    `;

    // Ajouter l'événement de fermeture sur la croix
    const closeBtn = popup.querySelector(".ctf-popup-close");
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.closePopup(popupId);
    });

    // Ajouter l'événement de clic sur le popup (PUNITION)
    popup.addEventListener("click", (e) => {
      // Ne pas déclencher si on a cliqué sur la croix
      if (!e.target.classList.contains("ctf-popup-close")) {
        this.punishWrongClick(popupId);
      }
    });

    // Ajouter au DOM avec animation
    const container = document.getElementById("popup-container");
    container.appendChild(popup);

    // Animation d'entrée
    setTimeout(() => popup.classList.add("ctf-popup-visible"), 10);

    this.activePopups.push(popupId);
    this.popupCount++;
    this.totalPopupsCreated++;
  }

  // Fermer un popup (bonne action)
  closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (!popup) return;

    popup.classList.remove("ctf-popup-visible");
    popup.classList.add("ctf-popup-closing");

    setTimeout(() => {
      popup.remove();
      this.activePopups = this.activePopups.filter((id) => id !== popupId);
      this.closedCount++;

      console.log(`✓ Popup fermé ! (${this.closedCount} fermés, ${this.activePopups.length} actifs)`);

      // Ne pas créer de popup immédiatement, l'intervalle s'en chargera
      // Cela respecte le délai configuré (popupInterval)
    }, 300);
  }

  // Punition si on clique sur le popup au lieu de la croix
  punishWrongClick(popupId) {
    const popup = document.getElementById(popupId);
    if (!popup) return;

    // Animation de shake pour indiquer l'erreur
    popup.style.animation = "popupShake 0.3s ease";

    console.warn("❌ Mauvais clic ! +5 popups supplémentaires !");

    // Créer 5 popups supplémentaires d'un coup
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.createPopup();
      }, i * 100); // Petit délai entre chaque popup pour l'effet visuel
    }
  }

  // Quand tous les popups sont fermés
  async onAllPopupsClosed() {
    console.log("✓ Tous les popups ont été fermés !");
    this.isActive = false;

    // Envoyer la requête au serveur
    try {
      const response = await fetch("api/validate-challenge-5.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          challenge: 5,
          popupsClosed: this.closedCount,
          timestamp: Date.now(),
        }),
      });

      const data = await response.json();

      // Afficher le résultat
      this.showResultPopup(data);
    } catch (error) {
      console.error("Erreur lors de la validation du challenge:", error);
      this.showResultPopup({
        status: "error",
        message: "Erreur de connexion au serveur",
        flag: null,
      });
    }
  }

  // Afficher le popup de résultat avec le flag
  showResultPopup(data) {
    const resultPopup = document.createElement("div");
    resultPopup.className = "ctf-result-popup";

    if (data.status === "success") {
      resultPopup.innerHTML = `
        <div class="ctf-result-content ctf-result-success">
          <div class="ctf-result-icon">🎉</div>
          <h2 class="ctf-result-title">Challenge Validé !</h2>
          <p class="ctf-result-message">Félicitations ! Vous avez fermé tous les popups avec succès.</p>
          <div class="ctf-flag-container">
            <div class="ctf-flag-label">Votre Flag :</div>
            <div class="ctf-flag-value">${data.flag || "FLAG{POPUP_MASTER_2024}"}</div>
          </div>
          <button class="ctf-result-close" onclick="this.parentElement.parentElement.remove()">Fermer</button>
        </div>
      `;
    } else {
      resultPopup.innerHTML = `
        <div class="ctf-result-content ctf-result-error">
          <div class="ctf-result-icon">❌</div>
          <h2 class="ctf-result-title">Erreur</h2>
          <p class="ctf-result-message">${data.message || "Une erreur est survenue"}</p>
          <button class="ctf-result-close" onclick="this.parentElement.parentElement.remove()">Fermer</button>
        </div>
      `;
    }

    document.body.appendChild(resultPopup);
    setTimeout(() => resultPopup.classList.add("ctf-result-visible"), 10);
  }

  // Obtenir l'heure actuelle formatée
  getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  // Réinitialiser le challenge
  reset() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.activePopups.forEach((id) => {
      const popup = document.getElementById(id);
      if (popup) popup.remove();
    });
    this.activePopups = [];
    this.popupCount = 0;
    this.closedCount = 0;
    this.totalPopupsCreated = 0;
    this.isActive = false;
  }
}

// Instance globale
let popupChallenge = null;

// Fonction pour démarrer le challenge
function startPopupChallenge() {
  if (popupChallenge) {
    popupChallenge.reset();
  }
  popupChallenge = new PopupChallenge();
  popupChallenge.init();
}

// Auto-démarrage au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  // Attendre un petit délai pour que la page soit bien chargée
  setTimeout(() => {
    startPopupChallenge();
    console.log("🎯 Challenge CTF démarré automatiquement !");
  }, 1000);
});
