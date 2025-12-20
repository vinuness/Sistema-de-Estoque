using API.MVC.Model;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;

namespace API.MVC.Consultas
{
    public class DAL
    {
        public int NumeroAleatorio()
        {
            Random rand = new();
            return rand.Next(1000000, 9999999);
        }

        //------------------------------USUARIO---------------------------------------
        public void InserirUsuario(OracleConnection con, Usuario usuario)
        {
            var matricula = NumeroAleatorio();
            OracleCommand cmd = new();
            cmd.CommandText = @"INSERT INTO Usuario(
                                    MATRICULA,
                                    NOME, 
                                    EMAIL, 
                                    SENHA) 
                                VALUES(
                                    :id,
                                    :nome,
                                    :email,
                                    :senha)";

            cmd.Parameters.Add(new OracleParameter("id", matricula));
            cmd.Parameters.Add(new OracleParameter("nome", usuario.Nome));
            cmd.Parameters.Add(new OracleParameter("email", usuario.Email));
            cmd.Parameters.Add(new OracleParameter("senha", usuario.Senha));

            try
            {
                cmd.Connection = con;
                con.Open();
                cmd.ExecuteNonQuery();
            }
            catch
            {
                throw;
            }finally
            {
                cmd.Dispose();
                con.Close();
            }
        }

        public void DeletarUsuario(OracleConnection con, int id)
        {
            OracleCommand cmd = new();
            cmd.CommandText = @"DELETE
                                FROM Usuario
                                WHERE
                                    MATRICULA = :id";

            cmd.Parameters.Add(new OracleParameter("id", id));

            try
            {
                cmd.Connection = con;
                con.Open();
                cmd.ExecuteNonQuery();
            }
            catch
            {
                throw;
            }
            finally
            {
                cmd.Dispose();
                con.Close();
            }
        }
        //------------------------------PRODUTO---------------------------------------
        public void InserirProduto(OracleConnection con, Produto produto)
        {
            var codigo = NumeroAleatorio();
            OracleCommand cmd = new();
            cmd.CommandText = @"INSERT INTO ITENS(
                                    MERCADORIA,
                                    QUANTIDADE,
                                    PRECO,
                                    CATEGORIA,
                                    CODIGO,
                                    MATRICULA) 
                                VALUES(
                                    :mercadoria,
                                    :quantidade,
                                    :preco,
                                    :categoria,
                                    :codigo,
                                    :matricula)";

            cmd.Parameters.Add("mercadoria", produto.MERCADORIA);
            cmd.Parameters.Add("quantidade", produto.QUANTIDADE);
            cmd.Parameters.Add("preco", produto.PRECO);
            cmd.Parameters.Add("categoria", produto.CATEGORIA);
            cmd.Parameters.Add("codigo", codigo);
            cmd.Parameters.Add("matricula", produto.CLIENTE);
            try
            {
                cmd.Connection = con;
                con.Open();
                cmd.ExecuteNonQuery();
            }
            catch
            {
                throw;
            }
            finally
            {
                cmd.Dispose();
            }
        }

        public OracleDataReader buscarProdutos(OracleConnection con)
        {
            OracleCommand cmd = new();
            cmd.CommandText = @"SELECT
                                    MERCADORIA,
                                    QUANTIDADE,
                                    TO_CHAR(
                                    PRECO,
                                    'FML999G999D00',
                                    'NLS_NUMERIC_CHARACTERS='',.'' NLS_CURRENCY=''R$ '''
                                    ) AS PRECO_FORMATADO,
                                    CATEGORIA,
                                    CODIGO
                                FROM ITENS";
            try
            {
                cmd.Connection = con;
                con.Open();
                return cmd.ExecuteReader();
            }
            catch
            {
                throw;
            }
            finally
            {
                cmd.Dispose();
            }
        }

        public void RetirarProduto(OracleConnection con, int id, int qtde)
        {
            OracleCommand cmd = new();
            cmd.CommandText = @"UPDATE ITENS
                                    SET QUANTIDADE = QUANTIDADE - :qtde
                                WHERE
                                    CODIGO = :id";

            cmd.Parameters.Add(new OracleParameter("qtde", qtde));
            cmd.Parameters.Add(new OracleParameter("id", id));

            try
            {
                cmd.Connection = con;
                con.Open();
                cmd.ExecuteNonQuery();
            }
            catch
            {
                throw;
            }
            finally
            {
                cmd.Dispose();
                con.Close();
            }
        }

        public void IncrementarProduto(OracleConnection con, int id, int qtde)
        {
            OracleCommand cmd = new();
            cmd.CommandText = @"UPDATE ITENS
                                    SET QUANTIDADE = QUANTIDADE + :qtde
                                WHERE
                                    CODIGO = :id";

            cmd.Parameters.Add(new OracleParameter("qtde", qtde));
            cmd.Parameters.Add(new OracleParameter("id", id));

            try
            {
                cmd.Connection = con;
                con.Open();
                cmd.ExecuteNonQuery();
            }
            catch
            {
                throw;
            }
            finally
            {
                cmd.Dispose();
                con.Close();
            }
        }

        public OracleDataReader buscarQuantidadeProdutos(OracleConnection con)
        {
            OracleCommand cmd = new();
            cmd.CommandText = @"SELECT
                                    QUANTIDADE,
                                    CATEGORIA
                                FROM
                                    ITENS";
            cmd.Connection = con;
            try
            {
                con.Open();
                return cmd.ExecuteReader();
            }
            catch
            {
                throw;
            }
            finally
            {
                cmd.Dispose();
            }
        }
    }
}
