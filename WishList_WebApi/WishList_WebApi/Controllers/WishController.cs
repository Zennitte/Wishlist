using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WishList_WebApi.Domains;
using WishList_WebApi.Interfaces;
using WishList_WebApi.Repositores;

namespace WishList_WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class WishController : ControllerBase
    {
        private IWishRepository _WishRepository { get; set; }

        public WishController()
        {
            _WishRepository = new WishRepository();
        }

        [HttpPost]
        public IActionResult Cadastro(Desejo NovoDesejo)
        {
            try
            {
                _WishRepository.Cadastrar(NovoDesejo);
                return StatusCode(201);
            }
            catch(Exception error)
            {
                return BadRequest(error);
            }
        }

        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                List<Desejo> ListaDesejo = _WishRepository.ListarTodos();
                return Ok(ListaDesejo);
            }
            catch(Exception error)
            {
                return BadRequest(error);
            }
        }
    }
}
