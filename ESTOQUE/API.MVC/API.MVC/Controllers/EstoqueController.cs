using API.MVC.Consultas;
using API.MVC.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;

namespace API.MVC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstoqueController : ControllerBase
    {

        //------------------------------USUARIO---------------------------------------
        [HttpPost("insuser")]
        public IActionResult InserirUsuario([FromBody] Usuario usuario)
        {
            BLL bll = new();
            bll.InserirUsuario(usuario);
            return Ok(usuario);
        }

        [HttpDelete("usuario/{id}")]
        public IActionResult DeletarUsuario(int id)
        {
            BLL bll = new();
            bll.DeletarUsuario(id);
            return Ok("Usuario deletado com sucesso");
        }

        //------------------------------PRODUTO---------------------------------------
        [HttpPost("inprt")]
        public IActionResult InserirProduto([FromBody] Produto produto)
        {
            BLL bll = new();
            bll.inserirProduto(produto);
            return Ok(produto);
        }



        [HttpGet]
        public List<Produto> buscarProdutos()
        {
            BLL bLL = new();
            return bLL.buscarProdutos();
        }



        [HttpPut("dcrmt/produto/{id}")]
        public IActionResult RetirarProduto(int id, int qtde)
        {
            BLL bll = new();
            bll.RetirarProduto(id, qtde);
            return Ok("Produto atualizado com sucesso");
        }

        [HttpPut("incmt/produto/{id}")]
        public IActionResult IncrementarProduto(int id, int qtde)
        {
            BLL bll = new();
            bll.IncrementarProduto(id, qtde);
            return Ok("Produto atualizado com sucesso");
        }

        [HttpGet("qtdecat")]
        public Categoria buscarQuantidadeProdutos()
        {
            BLL bll = new();
            return bll.buscarQuantidadeProdutos();
        }
    }
}
