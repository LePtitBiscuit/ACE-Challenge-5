<?php
/**
 * API Endpoint - Challenge 5 Validation
 * Valide le challenge des popups CTF
 */

// Configuration des headers CORS
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Gérer les requêtes OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Vérifier que c'est une requête POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'status' => 'error',
        'message' => 'Méthode non autorisée. Utilisez POST.',
        'flag' => null
    ]);
    exit();
}

// Récupérer les données JSON
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Valider les données reçues
if (!$data || !isset($data['challenge']) || !isset($data['popupsClosed'])) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'Données invalides ou manquantes.',
        'flag' => null
    ]);
    exit();
}

// Vérifier que c'est bien le challenge 5
if ($data['challenge'] !== 5) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'Challenge invalide.',
        'flag' => null
    ]);
    exit();
}

// Vérifier que tous les popups ont été fermés (au moins 10 popups)
$minPopups = 10;
$closedPopups = intval($data['popupsClosed']);

if ($closedPopups < $minPopups) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => "Nombre de popups fermés insuffisant. Minimum: {$minPopups}, Reçu: {$closedPopups}",
        'flag' => null
    ]);
    exit();
}

// Générer le flag
$timestamp = isset($data['timestamp']) ? $data['timestamp'] : time() * 1000;
$flag = generateFlag($closedPopups, $timestamp);

// Logger la validation (optionnel)
logChallenge($data, $flag);

// Retourner le succès avec le flag
http_response_code(200);
echo json_encode([
    'status' => 'success',
    'message' => 'Challenge validé avec succès !',
    'flag' => $flag,
    'details' => [
        'challenge' => 5,
        'popups_closed' => $closedPopups,
        'validated_at' => date('Y-m-d H:i:s'),
        'timestamp' => $timestamp
    ]
]);

/**
 * Générer un flag unique pour le challenge
 */
function generateFlag($popupsClosed, $timestamp) {
    // Flag encodé avec des informations uniques
    $baseFlag = 'DSIN_CTF_2024';
    $secret = 'popup_master_secure_key';
    
    // Créer un hash basé sur les données
    $hash = substr(hash('sha256', $baseFlag . $popupsClosed . $secret), 0, 16);
    
    // Générer le flag final
    $flag = sprintf(
        'FLAG{POPUP_MASTER_%s_%s}',
        strtoupper($hash),
        substr(dechex($timestamp), -8)
    );
    
    return $flag;
}

/**
 * Logger la tentative de validation (optionnel)
 */
function logChallenge($data, $flag) {
    $logFile = __DIR__ . '/../logs/challenge-5.log';
    $logDir = dirname($logFile);
    
    // Créer le dossier logs s'il n'existe pas
    if (!is_dir($logDir)) {
        @mkdir($logDir, 0755, true);
    }
    
    // Préparer les données du log
    $logEntry = [
        'timestamp' => date('Y-m-d H:i:s'),
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown',
        'challenge' => $data['challenge'],
        'popups_closed' => $data['popupsClosed'],
        'flag' => $flag,
        'request_timestamp' => $data['timestamp'] ?? null
    ];
    
    // Écrire dans le fichier log
    $logLine = json_encode($logEntry) . PHP_EOL;
    @file_put_contents($logFile, $logLine, FILE_APPEND | LOCK_EX);
}

