import http from "../http-common";

class VendedorDataService {
    listar() {
        return http.get('/vendedor/listar');
    }
    cadastrar(vendedor){
        return http.post('/vendedor',vendedor);
    }
    atualizar(id,vendedor){
        return http.put(`/vendedor/atualizarvendedor/${id}`,vendedor);
    }
    obterPorId(id){
        return http.get(`/vendedor/obterporid/${id}`);
    }
    async deletar(id){
        return await http.delete(`/vendedor/deletarvendedor/${id}`);
    }
}
export default new VendedorDataService();