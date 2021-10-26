using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WishList_WebApi.Contexts;
using WishList_WebApi.Domains;
using WishList_WebApi.Interfaces;

namespace WishList_WebApi.Repositores
{
    public class WishRepository : IWishRepository
    {
        wishlistContext ctx = new wishlistContext();
        public void Cadastrar(Desejo NovoDesejo)
        {
            ctx.Desejos.Add(NovoDesejo);
            ctx.SaveChanges();
        }

        public List<Desejo> ListarTodos()
        {
            return ctx.Desejos.ToList();
        }
    }
}
