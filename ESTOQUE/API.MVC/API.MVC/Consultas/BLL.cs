using Oracle.ManagedDataAccess.Client;
using API.MVC;
using API.MVC.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http.HttpResults;

namespace API.MVC.Consultas
{
    public class BLL
    {
        //------------------------------USUARIO---------------------------------------
        public void InserirUsuario(Usuario usuario)
        {
            using (OracleConnection con = Connection.GetConnection())
            {
                DAL dal = new();
                dal.InserirUsuario(con, usuario);
            }
        }

        public void DeletarUsuario(int id)
        {
            using (OracleConnection con = Connection.GetConnection())
            {
                DAL dal = new();
                dal.DeletarUsuario(con, id);
            }
        }

        //------------------------------PRODUTO---------------------------------------
        public void inserirProduto(Produto produto)
        {
            using (OracleConnection con = Connection.GetConnection())
            {
                DAL dal = new();
                try
                {
                    dal.InserirProduto(con, produto);
                }
                catch
                {
                    throw;
                }
                finally
                {
                    con.Close();
                }
                }
        }

        public List<Produto> buscarProdutos()
        {
            List<Produto> lista_produtos = new();
            DAL dal = new();
            using (OracleConnection con = Connection.GetConnection())
            {
                OracleDataReader reader = dal.buscarProdutos(con);
                while (reader.Read())
                {
                    Produto produto = new Produto();
                    produto.MERCADORIA = reader["MERCADORIA"].ToString();
                    produto.QUANTIDADE = Convert.ToInt32(reader["QUANTIDADE"].ToString());
                    produto.PRECO = reader["PRECO_FORMATADO"].ToString();
                    produto.CATEGORIA = reader["CATEGORIA"].ToString();
                    produto.CODIGO = Convert.ToInt32(reader["CODIGO"].ToString());

                    lista_produtos.Add(produto);
                }
                try
                {
                    return lista_produtos;
                }
                catch
                {
                    throw;
                }
                finally
                {
                    con.Close();
                }
            }
        }

        public void RetirarProduto(int id, int qtde)
        {
            using (OracleConnection con = Connection.GetConnection())
            {
                DAL dal = new();
                dal.RetirarProduto(con, id, qtde);
            }
        }

        public void IncrementarProduto(int id, int qtde)
        {
            using (OracleConnection con = Connection.GetConnection())
            {
                DAL dal = new();
                dal.IncrementarProduto(con, id, qtde);
            }
        }

        public Categoria buscarQuantidadeProdutos()
        {
            string? categoria;
            int quantidade;

            DAL dal = new();
            using (OracleConnection con = Connection.GetConnection())
            {
                Categoria cat = new();
                OracleDataReader reader = dal.buscarQuantidadeProdutos(con);

                while (reader.Read())
                {
                    categoria = reader["CATEGORIA"].ToString();
                    quantidade = Convert.ToInt32(reader["QUANTIDADE"].ToString());

                    if (categoria == "Bebidas")
                    {
                        cat.bebidas += quantidade;
                    }

                    if (categoria == "Alimentos")
                    {
                        cat.alimentos += quantidade;
                    }

                    if (categoria == "Limpeza")
                    {
                        cat.limpeza += quantidade;
                    }

                    if (categoria == "Higiene")
                    {
                        cat.higiene += quantidade;
                    }

                    if (categoria == "Descartáveis")
                    {
                        cat.descartaveis += quantidade;
                    }

                    if (categoria == "Embalagens")
                    {
                        cat.embalagens += quantidade;
                    }

                    if (categoria == "Eletrônicos")
                    {
                        cat.eletronicos += quantidade;
                    }

                    if (categoria == "Outros")
                    {
                        cat.outros += quantidade;
                    }
                }
                return cat;
            }
        }
    }
}
