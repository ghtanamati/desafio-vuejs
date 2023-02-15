using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SistemaVendas.Models;
using SistemaVendas.Controllers;

namespace SistemaVendas.Dto
{
    public class ObterPedidoDTO
    {
        public int Id {get; set;}
        public DateTime Data {get;set;}
        public int VendedorId { get; set; }
        public int ClienteId { get; set; }
        public ObterClienteDTO Cliente {get;set;}
        public ObterVendedorDTO Vendedor {get;set;}
        public ObterPedidoDTO()
        {
        }
        public ObterPedidoDTO(Pedido pedido)
        {
            Id = pedido.Id;
            Data = pedido.Data;
            VendedorId = pedido.VendedorId;
            ClienteId = pedido.ClienteId;
            Cliente = new ObterClienteDTO(pedido.Cliente);
            Vendedor = new ObterVendedorDTO(pedido.Vendedor);
        }
    }
}