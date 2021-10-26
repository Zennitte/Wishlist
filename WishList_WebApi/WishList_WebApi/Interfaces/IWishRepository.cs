using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WishList_WebApi.Domains;

namespace WishList_WebApi.Interfaces
{
    interface IWishRepository
    {
        List<Desejo> ListarTodos();

        void Cadastrar(Desejo NovoDesejo);
    }
}
