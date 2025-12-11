// Contenu de la page Incidents - Gestion de crise L.U.M.E.N.
function renderIncidentsContent() {
  return `
    <article class="card alert-danger full-width">
      <p class="eyebrow">🔴 INCIDENT MAJEUR EN COURS</p>
      <h3>Réponse à incident : Intrusion L.U.M.E.N.</h3>
      <p class="muted">Incident de sécurité critique nécessitant une réponse coordonnée. Niveau de gravité : SÉVÈRE (4/5)</p>
      <div class="alert-actions">
        <span class="pill pill-danger">ACTIF</span>
        <span class="pill pill-warning">Équipe mobilisée</span>
        <span class="pill pill-success">Procédures engagées</span>
      </div>
    </article>

    <article class="card">
      <p class="eyebrow">Chronologie</p>
      <h3>Timeline de l'incident</h3>
      <div class="timeline">
        <div class="timeline-item critical">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-time">03:14:27</span>
            <strong>Détection initiale</strong>
            <p class="muted">Première alerte de comportement anormal sur UA-SSO-01</p>
          </div>
        </div>
        <div class="timeline-item critical">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-time">03:14:45</span>
            <strong>Escalade automatique</strong>
            <p class="muted">SIEM déclenche une alerte de priorité critique</p>
          </div>
        </div>
        <div class="timeline-item warning">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-time">03:15:03</span>
            <strong>Propagation détectée</strong>
            <p class="muted">UA-DB-PROD et UA-WEB-FRONT compromis</p>
          </div>
        </div>
        <div class="timeline-item warning">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-time">03:15:34</span>
            <strong>Identification de l'acteur</strong>
            <p class="muted">Message chiffré signé "L.U.M.E.N." découvert dans syslog</p>
          </div>
        </div>
        <div class="timeline-item info">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-time">03:16:12</span>
            <strong>Isolation des systèmes</strong>
            <p class="muted">Segmentation réseau initiée pour limiter la propagation</p>
          </div>
        </div>
        <div class="timeline-item info">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-time">03:17:28</span>
            <strong>Notification CNIL</strong>
            <p class="muted">Préparation du rapport de violation RGPD</p>
          </div>
        </div>
      </div>
    </article>

    <article class="card">
      <p class="eyebrow">Indicateurs de compromission</p>
      <h3>IOC identifiés</h3>
      <div class="ioc-list">
        <div class="ioc-item critical">
          <div class="ioc-header">
            <span class="ioc-type">IP</span>
            <span class="pill pill-danger">CONFIRMÉ</span>
          </div>
          <code class="ioc-value">198.51.100.247</code>
          <p class="muted">IP externe suspecte - Connexions répétées vers ports 8443 et 22</p>
        </div>
        <div class="ioc-item critical">
          <div class="ioc-header">
            <span class="ioc-type">HASH</span>
            <span class="pill pill-danger">MALVEILLANT</span>
          </div>
          <code class="ioc-value">a3f5e9c7d2b1f4a6e8c9d0f1a2b3c4d5</code>
          <p class="muted">Fichier /usr/bin/.lumen/core - Match VirusTotal (15/68 détections)</p>
        </div>
        <div class="ioc-item warning">
          <div class="ioc-header">
            <span class="ioc-type">PROCESS</span>
            <span class="pill pill-warning">SUSPECT</span>
          </div>
          <code class="ioc-value">PID 4782 - /usr/bin/.lumen/core --stealth</code>
          <p class="muted">Processus non signé, consommation mémoire anormale (1.2GB)</p>
        </div>
        <div class="ioc-item warning">
          <div class="ioc-header">
            <span class="ioc-type">DOMAINE</span>
            <span class="pill pill-warning">SUSPECT</span>
          </div>
          <code class="ioc-value">c2.lumen-network.onion</code>
          <p class="muted">Serveur C&C probable via Tor - Exfiltration de données détectée</p>
        </div>
        <div class="ioc-item info">
          <div class="ioc-header">
            <span class="ioc-type">USER</span>
            <span class="pill pill-success">ANALYSÉ</span>
          </div>
          <code class="ioc-value">root@unknown-session-7f3a</code>
          <p class="muted">Session administrateur non autorisée - Origine : 198.51.100.247</p>
        </div>
      </div>
    </article>

    <article class="card">
      <p class="eyebrow">Actions recommandées</p>
      <h3>Runbook de réponse</h3>
      <div class="runbook-list">
        <div class="runbook-item completed">
          <div class="runbook-checkbox">✓</div>
          <div class="runbook-content">
            <strong>1. Isolation immédiate</strong>
            <p class="muted">Segmenter les systèmes compromis du réseau principal</p>
            <span class="runbook-status completed">Complété à 03:16:12</span>
          </div>
        </div>
        <div class="runbook-item completed">
          <div class="runbook-checkbox">✓</div>
          <div class="runbook-content">
            <strong>2. Collecte d'artefacts forensiques</strong>
            <p class="muted">Capturer RAM dumps, logs système, trafic réseau</p>
            <span class="runbook-status completed">Complété à 03:18:45</span>
          </div>
        </div>
        <div class="runbook-item in-progress">
          <div class="runbook-checkbox">⟳</div>
          <div class="runbook-content">
            <strong>3. Analyse des IOC</strong>
            <p class="muted">Corréler les indicateurs avec les bases de threat intelligence</p>
            <span class="runbook-status in-progress">En cours...</span>
          </div>
        </div>
        <div class="runbook-item pending">
          <div class="runbook-checkbox">○</div>
          <div class="runbook-content">
            <strong>4. Blocage des vecteurs d'attaque</strong>
            <p class="muted">Firewall rules, blacklist IP 198.51.100.247</p>
            <span class="runbook-status pending">En attente</span>
          </div>
        </div>
        <div class="runbook-item pending">
          <div class="runbook-checkbox">○</div>
          <div class="runbook-content">
            <strong>5. Éradication de la menace</strong>
            <p class="muted">Supprimer processus malveillant, restaurer depuis backups sains</p>
            <span class="runbook-status pending">En attente</span>
          </div>
        </div>
        <div class="runbook-item pending">
          <div class="runbook-checkbox">○</div>
          <div class="runbook-content">
            <strong>6. Récupération des systèmes</strong>
            <p class="muted">Réinstallation propre, validation de l'intégrité</p>
            <span class="runbook-status pending">En attente</span>
          </div>
        </div>
      </div>
    </article>

    <article class="card message-card full-width">
      <p class="eyebrow">⚡ Transmission interceptée</p>
      <div class="lumen-message">
        <p><em>"Votre réponse à incident est impressionnante. Chronologie précise, IOC collectés, procédures suivies à la lettre. Mais vous réagissez à mes actions passées... Je suis déjà trois coups d'avance. Chaque seconde que vous passez à analyser mes traces est une seconde où j'en crée de nouvelles."</em></p>
        <p class="signature">— L.U.M.E.N.</p>
        <div class="alert-actions" style="margin-top: 16px;">
          <span class="pill pill-danger">NOUVELLE ACTIVITÉ DÉTECTÉE</span>
          <span class="pill pill-warning">3 nouveaux IOC</span>
        </div>
      </div>
    </article>
  `;
}

