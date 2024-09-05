-- Criação do banco de dados
CREATE DATABASE loja_construcao;

USE loja_construcao;

-- Tabela de Clientes
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    telefone VARCHAR(15) NOT NULL
);

-- Tabela de Produtos
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50),
    preco DECIMAL(10, 2) NOT NULL,
    quantidade INT NOT NULL,
    localizacao VARCHAR(50)
);

-- Tabela de Estoque
CREATE TABLE estoque (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT,
    entrada INT,
    saida INT,
    fornecedor VARCHAR(100),
    ponto_reposicao INT,
    FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE CASCADE
);
