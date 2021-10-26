create database WishList
go

use WishList
go

create table Usuarios(
IdUsuario int primary key identity(1,1),
Email varchar(256) not null unique,
Senha varchar(25) not null,
Nome varchar(100) not null
);
go

create table Desejos(
IdUsuario int foreign key references Usuarios(IdUsuario),
IdDesejo bigint primary key identity(1,1),
Descricao varchar(300) not null,
DataCriacao datetime
);
go