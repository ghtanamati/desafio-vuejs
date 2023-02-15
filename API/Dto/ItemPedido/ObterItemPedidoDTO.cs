using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SistemaVendas.Models;

namespace SistemaVendas.Controllers
{
    public class ObterItemPedidoDTO
    {
        public int Id { get; set; }
        public int PedidoId { get; set; }
        public int ServicoId { get; set; }
        public int Quantidade { get; set; }
        public decimal Valor { get; set; }
        public ObterItemPedidoDTO(ItemPedido itemPedido)
        {
            Id = itemPedido.Id;
            PedidoId = itemPedido.PedidoId;
            ServicoId = itemPedido.ServicoId;
            Quantidade = itemPedido.Quantidade;
            Valor = itemPedido.Valor;
        }
    }
}