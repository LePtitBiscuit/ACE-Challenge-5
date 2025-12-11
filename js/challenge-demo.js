// Challenge 5 - CTF Popup Challenge (Mode Démo)
// Version sans serveur pour tests locaux

class PopupChallengeDemo extends PopupChallenge {
  constructor() {
    super();
    this.demoMode = true;
  }

  // Override de la méthode de validation pour simuler l'API
  async onAllPopupsClosed() {
    console.log("✓ Tous les popups ont été fermés ! (Mode Démo)");
    this.isActive = false;

    // Simuler un délai de réponse réseau
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Simuler une réponse réussie
    const data = {
      status: "success",
      message: "Challenge validé avec succès !",
      flag: this.generateDemoFlag(),
      details: {
        challenge: 5,
        popups_closed: this.closedCount,
        validated_at: new Date().toISOString(),
        timestamp: Date.now(),
        demo_mode: true,
      },
    };

    // Afficher le résultat
    this.showResultPopup(data);
  }

  // Générer un flag de démonstration
  generateDemoFlag() {
    const timestamp = Date.now().toString(16);
    const random = Math.random().toString(36).substring(2, 10).toUpperCase();
    return `FLAG{DEMO_POPUP_MASTER_${random}_${timestamp}}`;
  }
}

// Instance globale pour le mode démo
let popupChallengeDemo = null;

// Fonction pour démarrer le challenge en mode démo
function startPopupChallengeDemo() {
  if (popupChallengeDemo) {
    popupChallengeDemo.reset();
  }
  popupChallengeDemo = new PopupChallengeDemo();
  popupChallengeDemo.init();
  console.log("🎯 Challenge démarré en mode DÉMO (pas de connexion serveur)");
}
