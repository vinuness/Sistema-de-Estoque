# Sobre o projeto

Este projeto foi desenvolvido com foco em aprendizado prático, visando a aplicação de conceitos e tecnologias amplamente utilizadas no mercado de desenvolvimento de software.
        
Funcionalidades do sistema

        - Cadastro de produtos com informações como nome, categoria, preço e quantidade;
        
        - Edição da quantidade de produtos já cadastrados, permitindo inclusão ou retirada de itens do estoque;
        
        - Visualização gráfica das quantidades de produtos por categoria;
        
        - Atualização dinâmica dos dados após operações de cadastro ou edição;
        
        - Utilização de pop-ups para realizar ações sem recarregar a aplicação;
        
        - Interface simples e intuitiva para facilitar o gerenciamento do estoque;

## Criação das tabelas
### Usuario
        CREATE TABLE USUARIO (
            MATRICULA  NUMBER(7,0)      PRIMARY KEY,
            NOME       VARCHAR2(100),
            EMAIL      VARCHAR2(100)    NOT NULL UNIQUE,
            SENHA      VARCHAR2(100)    NOT NULL
        );
        
### Produto
        CREATE TABLE ITENS (
            CODIGO      NUMBER(7,0)      PRIMARY KEY,
            MERCADORIA  VARCHAR2(100),
            QUANTIDADE  NUMBER,
            PRECO       NUMBER(10,2),
            CATEGORIA   VARCHAR2(32),
            MATRICULA   NUMBER(7,0)      NOT NULL
            FOREIGN KEY (MATRICULA) REFERENCES USUARIO(MATRICULA)
        );
Instalação de dependencias com React

        npm install

Observações:

        Este projeto encontra-se em desenvolvimento contínuo. Algumas funcionalidades, como o gerenciamento de usuários, já estão implementadas na API e serão integradas à interface em etapas futuras.

## 🎬 Demonstração do Sistema de Estoque

Clique na imagem abaixo para assistir à demo do sistema funcionando 👇

[![Assista ao vídeo](https://img.youtube.com/vi/sj2NBaHwakA/0.jpg)](https://youtu.be/sj2NBaHwakA)

