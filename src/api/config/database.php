<?php

function loadEnv($path)
{
    if (!file_exists($path)) {
        return;
    }
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        // ignora comentários
        if (str_starts_with(trim($line), '#')) {
            continue;
        }
        [$name, $value] = array_map('trim', explode('=', $line, 2));
        // remove aspas se tiver
        $value = trim($value, "\"'");
        $_ENV[$name] = $value;
    }
}
// carrega o arquivo src/api/.env
loadEnv(__DIR__ . '/../.env');
// agora usa as variáveis
$host = $_ENV['DB_HOST'];
$user = $_ENV['DB_USER'];
$pass = $_ENV['DB_PASS'];
$db   = $_ENV['DB_NAME'];

$mysqli = new mysqli($host,$user,$pass,$db);

if($mysqli->error){
    die("Erro ao conectar ao banco!".$mysqli->error);
}