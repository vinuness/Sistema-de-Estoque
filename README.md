FUNCIONALIDADES DO SISTEMA

        - Cadastro de produtos com informações como nome, categoria, preço e quantidade;
        
        - Edição da quantidade de produtos já cadastrados, permitindo inclusão ou retirada de itens do estoque;

        - Organização dos produtos por categorias;
        
        - Controle automático das quantidades armazenadas no banco de dados;
        
        - Visualização gráfica das quantidades de produtos por categoria;
        
        - Atualização dinâmica dos dados após operações de cadastro ou edição;
        
        - Comunicação entre frontend e backend por meio de uma API REST;
        
        - Utilização de pop-ups para realizar ações sem recarregar a aplicação;
        
        - Interface simples e intuitiva para facilitar o gerenciamento do estoque;

QUERY PARA CRIAÇÃO DA TABELA DE PRODUTOS

        CREATE TABLE ITENS (
            CODIGO NUMBER(7,0) PRIMARY KEY,
            MERCADORIA VARCHAR2(100),
            QUANTIDADE NUMBER,
            PRECO NUMBER(10,2),
            CATEGORIA VARCHAR2(32),
            MATRICULA NUMBER(7,0) NOT NULL
        );
