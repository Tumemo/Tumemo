<?php

require_once './config/database.php';
require_once './config/header.php';

$data = json_decode(file_get_contents("php://input"));

if(!empty($data->nome) && !empty($data->email) && !empty($data->senha)){
    $sql = "INSERT into usuarios (nome,email,senha) values ('$data->nome','$data->email','$data->senha')";
    $res = $mysqli->query($sql);
    echo json_encode(["mensagem" => "Conta Criada!"]);
}