import http from "../http-common";

class ItemPedidoDataService {
    listar() {
        return http.get('/itempedido/listar');
    }
    cadastrar(itemPedido){
        return http.post('/itempedido',itemPedido);
    }
    atualizar(id,itemPedido){
        return http.put(`/itempedido/atualizaritempedido/${id}`,itemPedido);
    }
    obterPorId(id){
        return http.get(`/itempedido/obterporid/${id}`);
    }
    async deletar(id){
        return await http.delete(`/itempedido/deletaritempedido/${id}`);
    }
}
export default new ItemPedidoDataService();