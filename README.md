## Sobre o projeto

Este projeto foi desenvolvido com foco em aprendizado prático, visando a aplicação de conceitos e tecnologias amplamente utilizadas no mercado de desenvolvimento de software.
        
Funcionalidades do sistema

        - Cadastro de produtos com informações como nome, categoria, preço e quantidade;
        
        - Edição da quantidade de produtos já cadastrados, permitindo inclusão ou retirada de itens do estoque;
        
        - Visualização gráfica das quantidades de produtos por categoria;
        
        - Atualização dinâmica dos dados após operações de cadastro ou edição;
        
        - Utilização de pop-ups para realizar ações sem recarregar a aplicação;
        
        - Interface simples e intuitiva para facilitar o gerenciamento do estoque;

Criação da tabela de produtos

        CREATE TABLE ITENS (
            CODIGO NUMBER(7,0) PRIMARY KEY,
            MERCADORIA VARCHAR2(100),
            QUANTIDADE NUMBER,
            PRECO NUMBER(10,2),
            CATEGORIA VARCHAR2(32)
        );
Observações:

        Projeto paralizado, com outras funcionalidades ainda em desenvolvimento.
