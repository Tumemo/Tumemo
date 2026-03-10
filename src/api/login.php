<?php

require_once './config/database.php';
require_once './config/header.php';

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$senha = $data->senha;

if(!empty($email) && !empty($senha)){
    $sql = "SELECT * from usuarios where email = '$email' and senha = '$senha'";
    $res = $mysqli->query($sql);
    $quantidade = $res->num_rows;
    if($quantidade == 1){
        $usuario = $res->fetch_assoc();
        echo json_encode(["mensagem" => "Login feito com sucesso!", "id_usuario" => $usuario['id']]);
    }
}