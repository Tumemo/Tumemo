<?php

require_once './config/database.php';
require_once './config/header.php';

$metodo = $_SERVER["REQUEST_METHOD"];
$data = json_decode(file_get_contents("php://input"));

switch ($metodo){
    case 'GET':
        $usuario = $_GET['id_usuario'] ?? 0;
        $sql = "SELECT nome,estado,id from tarefas where id_usuario = $usuario";
        $res = $mysqli->query($sql);
        $tarefas = $res->fetch_all(MYSQLI_ASSOC);
        echo json_encode(["mensagem" => "Busca realizada com sucesso", "data" => $tarefas]);
        break;
    case 'POST':
        $sql = "INSERT into tarefas (nome,id_usuario) values ('$data->nome',$data->id_usuario)";
        $res = $mysqli->query($sql);
        echo json_encode(["mensagem" => "Tarefa Criada com sucesso!"]);
        break;
    case 'PUT':
        $sql = "UPDATE tarefas set estado = '$data->estado' where id = $data->id";
        $res = $mysqli->query($sql);
        echo json_encode(["mensagem" => "Tarefa Atualizada com sucesso!"]);
        break;
    case 'DELETE':
        $sql = "DELETE from tarefas where id = $data->id";
        $res = $mysqli->query($sql);
        echo json_encode(["mensagem" => "Tarefa Apagada com sucesso!"]);
        break;
}