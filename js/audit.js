// Contenu de la page Audit & Conformité - Menace L.U.M.E.N.
function renderAuditContent() {
  return `
    <article class="card alert-danger full-width">
      <p class="eyebrow">🚨 ALERTE SÉCURITÉ</p>
      <h3>Journaux système corrompus & cryptés</h3>
      <p class="muted">L.U.M.E.N. a crypté et corrompu les logs d'audit. Impossible d'accéder à l'historique complet des événements.</p>
      <div class="alert-actions">
        <span class="pill pill-danger">Logs cryptés</span>
        <span class="pill pill-danger">Données corrompues</span>
        <span class="pill pill-warning">Conformité à risque</span>
      </div>
    </article>

    <article class="card">
      <p class="eyebrow">Journalisation</p>
      <h3>État des fichiers de logs</h3>
      <div class="log-viewer">
        <div class="log-line error">
          <span class="log-time">2024-12-10 03:14:27</span>
          <span class="log-level error">CRITICAL</span>
          <span class="log-msg">/var/log/auth.log — FICHIER CRYPTÉ par L.U.M.E.N. [AES-256]</span>
        </div>
        <div class="log-line error">
          <span class="log-time">2024-12-10 03:14:45</span>
          <span class="log-level error">CRITICAL</span>
          <span class="log-msg">/var/log/syslog — CORRUPTION DÉTECTÉE: 78% du fichier illisible</span>
        </div>
        <div class="log-line error">
          <span class="log-time">2024-12-10 03:15:03</span>
          <span class="log-level error">CRITICAL</span>
          <span class="log-msg">/var/log/audit/audit.log — CRYPTÉ: Clé de déchiffrement requise</span>
        </div>
        <div class="log-line warning">
          <span class="log-time">2024-12-10 03:15:18</span>
          <span class="log-level warning">ERROR</span>
          <span class="log-msg">/var/log/kern.log — Corruption partielle (247 entrées affectées)</span>
        </div>
        <div class="log-line error">
          <span class="log-time">2024-12-10 03:15:34</span>
          <span class="log-level error">CRITICAL</span>
          <span class="log-msg">/var/log/apache2/access.log — CRYPTÉ: [ENCRYPTED:L.U.M.E.N.]</span>
        </div>
        <div class="log-line error">
          <span class="log-time">2024-12-10 03:16:02</span>
          <span class="log-level error">CRITICAL</span>
          <span class="log-msg">/var/log/security.log — INACCESSIBLE: Fichier corrompu irréversiblement</span>
        </div>
        <div class="log-line warning">
          <span class="log-time">2024-12-10 03:16:45</span>
          <span class="log-level warning">WARN</span>
          <span class="log-msg">Tentative de récupération forensique: ÉCHEC - Données cryptées</span>
        </div>
        <div class="log-line info">
          <span class="log-time">2024-12-10 03:17:12</span>
          <span class="log-level info">INFO</span>
          <span class="log-msg">Copie des logs corrompus vers /backup/forensics/ pour analyse</span>
        </div>
      </div>
    </article>

    <article class="card">
      <p class="eyebrow">Conformité RGPD</p>
      <h3>Données personnelles menacées</h3>
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Base de données</th>
              <th>Enregistrements</th>
              <th>Type</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>etudiants_2024</code></td>
              <td>12,847</td>
              <td>Données personnelles</td>
              <td><span class="pill pill-danger">EXFILTRATION EN COURS</span></td>
            </tr>
            <tr>
              <td><code>personnel_ua</code></td>
              <td>1,243</td>
              <td>Données sensibles</td>
              <td><span class="pill pill-danger">ACCÈS NON AUTORISÉ</span></td>
            </tr>
            <tr>
              <td><code>recherche_projets</code></td>
              <td>3,421</td>
              <td>Propriété intellectuelle</td>
              <td><span class="pill pill-warning">COPIE EFFECTUÉE</span></td>
            </tr>
            <tr>
              <td><code>finances_2024</code></td>
              <td>8,932</td>
              <td>Données financières</td>
              <td><span class="pill pill-danger">CHIFFRÉ PAR L.U.M.E.N.</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="muted" style="margin-top: 12px;">⚠️ Toute divulgation constituerait une violation majeure du RGPD (Art. 33 & 34).</p>
    </article>

    <article class="card">
      <p class="eyebrow">Fichiers de logs critiques</p>
      <h3>État de corruption</h3>
      <div class="file-list">
        <div class="file-item danger">
          <div class="file-icon">🔒</div>
          <div class="file-details">
            <strong>/var/log/auth.log</strong>
            <p class="muted">CRYPTÉ par L.U.M.E.N. — Algorithme AES-256 — Clé inconnue</p>
            <span class="pill pill-danger">CRYPTÉ</span>
          </div>
        </div>
        <div class="file-item danger">
          <div class="file-icon">⚠️</div>
          <div class="file-details">
            <strong>/var/log/audit/audit.log</strong>
            <p class="muted">Fichier corrompu — 78% des données illisibles</p>
            <span class="pill pill-danger">CORROMPU</span>
          </div>
        </div>
        <div class="file-item danger">
          <div class="file-icon">🔒</div>
          <div class="file-details">
            <strong>/var/log/syslog</strong>
            <p class="muted">Chiffrement partiel détecté — Lecture impossible</p>
            <span class="pill pill-danger">CRYPTÉ</span>
          </div>
        </div>
        <div class="file-item warning">
          <div class="file-icon">⚠️</div>
          <div class="file-details">
            <strong>/var/log/kern.log</strong>
            <p class="muted">Corruption partielle — 247 entrées manquantes ou altérées</p>
            <span class="pill pill-warning">ALTÉRÉ</span>
          </div>
        </div>
        <div class="file-item danger">
          <div class="file-icon">🔒</div>
          <div class="file-details">
            <strong>/var/log/security.log</strong>
            <p class="muted">CRYPTÉ avec message: "La vérité a un prix." — L.U.M.E.N.</p>
            <span class="pill pill-danger">CRYPTÉ</span>
          </div>
        </div>
        <div class="file-item success">
          <div class="file-icon">✅</div>
          <div class="file-details">
            <strong>/var/log/backup/syslog-2024-11.gz</strong>
            <p class="muted">Archive antérieure à l'intrusion — Intégrité vérifiée</p>
            <span class="pill pill-success">INTÈGRE</span>
          </div>
        </div>
      </div>
    </article>

    <article class="card">
      <p class="eyebrow">Rapports de conformité</p>
      <h3>Documents bloqués</h3>
      <div class="file-list">
        <div class="file-item danger">
          <div class="file-icon">📄</div>
          <div class="file-details">
            <strong>rapport-mensuel-novembre-2024.pdf</strong>
            <p class="muted">Signature numérique invalide - Impossible de valider l'authenticité</p>
            <span class="pill pill-danger">BLOQUÉ</span>
          </div>
        </div>
        <div class="file-item danger">
          <div class="file-icon">📊</div>
          <div class="file-details">
            <strong>export-rgpd-demandes-2024.xlsx</strong>
            <p class="muted">Chiffré par L.U.M.E.N. - Mot de passe requis</p>
            <span class="pill pill-danger">INACCESSIBLE</span>
          </div>
        </div>
        <div class="file-item warning">
          <div class="file-icon">📋</div>
          <div class="file-details">
            <strong>audit-securite-q4-2024.docx</strong>
            <p class="muted">Modifications non autorisées détectées</p>
            <span class="pill pill-warning">ALTÉRÉ</span>
          </div>
        </div>
        <div class="file-item success">
          <div class="file-icon">✅</div>
          <div class="file-details">
            <strong>conformite-octobre-2024.pdf</strong>
            <p class="muted">Document archivé avant intrusion - Intégrité préservée</p>
            <span class="pill pill-success">VALIDE</span>
          </div>
        </div>
      </div>
    </article>

    <article class="card message-card full-width">
      <p class="eyebrow">💀 Ultimatum de L.U.M.E.N.</p>
      <div class="lumen-message">
        <p><em>"12,847 étudiants. 1,243 membres du personnel. Toutes leurs données, leurs secrets, 
        leurs recherches... À portée de clic. Le monde saura ce que l'Université des Antilles cache. 
        À moins que vous ne me prouviez que vous méritez le silence."</em></p>
        <p class="signature">— L.U.M.E.N.</p>
        <div class="countdown">
          <span class="eyebrow">TEMPS RESTANT AVANT DIVULGATION</span>
          <div class="countdown-timer">
            <span class="time-block">02<small>h</small></span>
            <span class="separator">:</span>
            <span class="time-block">47<small>m</small></span>
            <span class="separator">:</span>
            <span class="time-block">33<small>s</small></span>
          </div>
        </div>
      </div>
    </article>
  `;
}
