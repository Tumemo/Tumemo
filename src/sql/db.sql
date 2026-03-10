create database Tumemo;
use Tumemo;

create table usuarios(
	id int primary key not null auto_increment,
    nome varchar(255) not null,
    email varchar(255) not null,
    senha varchar(255) not null);
    
create table tarefas(
	id int primary key not null auto_increment,
    id_usuario int not null,
    nome varchar(255) not null,
    estado enum("Feito","Em Progresso") default ("Em Progresso"),
    foreign key (id_usuario) references usuarios(id));