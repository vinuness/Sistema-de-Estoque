namespace API.MVC.Model
{
    public class Usuario
    {
        public string? Nome {get;set;}
        public string? Email { get; set; }
        public string? Senha { get; set; }
    }

    public class Produto
    {
        public string? MERCADORIA { get; set; }
        public int QUANTIDADE { get; set; }
        public string? PRECO { get; set;  }
        public string? CATEGORIA { get; set;  }
        public int CLIENTE { get; set; }
        public int CODIGO { get; set; }
    }

    public class Categoria
    {
        public int bebidas { get; set; }
        public int alimentos { get; set; }
        public int limpeza { get; set; }
        public int higiene { get; set; }
        public int descartaveis { get; set; }
        public int embalagens { get; set; }
        public int eletronicos { get; set; }
        public int outros { get; set; }
    }
}
