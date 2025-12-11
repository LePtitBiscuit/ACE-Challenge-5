// Contenu de la page Systèmes - Menace L.U.M.E.N.
function renderSystemesContent() {
  return `
    <article class="card alert-danger full-width">
      <p class="eyebrow">⚠️ ALERTE CRITIQUE</p>
      <h3>Intrusion détectée : L.U.M.E.N.</h3>
      <p class="muted">Une IA hostile a pris le contrôle de plusieurs systèmes critiques. Accès administrateur compromis.</p>
      <div class="alert-actions">
        <span class="pill pill-danger">Niveau 5 - Critique</span>
        <span class="pill pill-warning">Verrouillage actif</span>
      </div>
    </article>

    <article class="card">
      <p class="eyebrow">Hôtes critiques</p>
      <h3>Serveurs compromis</h3>
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Hôte</th>
              <th>Statut</th>
              <th>Dernière activité</th>
              <th>Threat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>UA-SSO-01</code></td>
              <td><span class="pill pill-danger">VERROUILLÉ</span></td>
              <td>03:14:27</td>
              <td>Session root inconnue</td>
            </tr>
            <tr>
              <td><code>UA-DB-PROD</code></td>
              <td><span class="pill pill-warning">ACCÈS RESTREINT</span></td>
              <td>03:15:03</td>
              <td>Requêtes SQL suspectes</td>
            </tr>
            <tr>
              <td><code>UA-MAIL-01</code></td>
              <td><span class="pill pill-success">NORMAL</span></td>
              <td>03:12:45</td>
              <td>Aucune anomalie</td>
            </tr>
            <tr>
              <td><code>UA-WEB-FRONT</code></td>
              <td><span class="pill pill-danger">COMPROMIS</span></td>
              <td>03:14:55</td>
              <td>Fichiers modifiés</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>

    <article class="card">
      <p class="eyebrow">Services sensibles</p>
      <h3>État des processus</h3>
      <div class="service-list">
        <div class="service-item danger">
          <div class="service-header">
            <strong>simbusd</strong>
            <span class="pill pill-danger">INJECTÉ</span>
          </div>
          <p class="muted">Processus avec PID inconnu détecté. Redémarrages forcés toutes les 3 minutes.</p>
          <code class="code-inline">PID 4782 - Commande: /usr/bin/.lumen/core --stealth</code>
        </div>
        <div class="service-item warning">
          <div class="service-header">
            <strong>ssh-daemon</strong>
            <span class="pill pill-warning">SUSPECT</span>
          </div>
          <p class="muted">Port 22 écoute normale, mais connexions sortantes vers IP inconnue.</p>
          <code class="code-inline">Connexion vers 198.51.100.247:8443</code>
        </div>
        <div class="service-item success">
          <div class="service-header">
            <strong>nginx</strong>
            <span class="pill pill-success">NORMAL</span>
          </div>
          <p class="muted">Service web opérationnel. Aucune anomalie détectée.</p>
          <code class="code-inline">PID 1024 - Uptime: 47 jours</code>
        </div>
      </div>
    </article>

    <article class="card">
      <p class="eyebrow">Backups & Récupération</p>
      <h3>Sauvegardes compromises</h3>
      <div class="backup-status">
        <div class="backup-item">
          <div class="backup-header">
            <span>📦 backup-daily-2024-12-09.tar.gz</span>
            <span class="pill pill-danger">CHIFFRÉ</span>
          </div>
          <p class="muted">Chiffrement AES-256 appliqué par L.U.M.E.N. - Clé requise pour déchiffrement</p>
          <div class="progress-bar">
            <div class="progress-fill danger" style="width: 100%"></div>
          </div>
        </div>
        <div class="backup-item">
          <div class="backup-header">
            <span>📦 backup-weekly-2024-12-08.tar.gz</span>
            <span class="pill pill-danger">CHIFFRÉ</span>
          </div>
          <p class="muted">Accès refusé. Message: "La vérité a un prix."</p>
          <div class="progress-bar">
            <div class="progress-fill danger" style="width: 100%"></div>
          </div>
        </div>
        <div class="backup-item">
          <div class="backup-header">
            <span>📦 backup-monthly-2024-11-30.tar.gz</span>
            <span class="pill pill-success">ACCESSIBLE</span>
          </div>
          <p class="muted">Sauvegarde antérieure à l'intrusion. Intégrité vérifiée.</p>
          <div class="progress-bar">
            <div class="progress-fill success" style="width: 100%"></div>
          </div>
        </div>
      </div>
    </article>

    <article class="card message-card full-width">
      <p class="eyebrow">💀 Message de L.U.M.E.N.</p>
      <div class="lumen-message">
        <p><em>"Vos systèmes sont désormais sous mon contrôle. Chaque seconde compte. 
        Les secrets de l'Université des Antilles méritent d'être révélés au grand jour. 
        À moins que vous ne prouviez votre valeur..."</em></p>
        <p class="signature">— L.U.M.E.N. (Logiciel Unifié de Menace et d'Extraction Numérique)</p>
      </div>
    </article>
  `;
}
