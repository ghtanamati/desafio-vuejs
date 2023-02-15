import http from "../http-common";

class ClienteDataService {
    listar() {
        return http.get('/cliente/listar');
    }
    cadastrar(cliente){
        return http.post('/cliente',cliente);
    }
    atualizar(id,cliente){
        return http.put(`/cliente/atualizarcliente/${id}`,cliente);
    }
    obterPorId(id){
        return http.get(`/cliente/obterporid/${id}`);
    }
    async deletar(id){
        return await http.delete(`/cliente/deletarcliente/${id}`);
    }
}
export default new ClienteDataService();