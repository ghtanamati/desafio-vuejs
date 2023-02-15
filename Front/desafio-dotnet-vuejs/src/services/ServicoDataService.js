import http from "../http-common";

class ServicoDataService {
    listar() {
        return http.get('/servico/listar');
    }
    cadastrar(servico){
        return http.post('/servico',servico);
    }
    atualizar(id,servico){
        return http.put(`/servico/atualizarservico/${id}`,servico);
    }
    obterPorId(id){
        return http.get(`/servico/obterporid/${id}`);
    }
    async deletar(id){
        return await http.delete(`/servico/deletarservico/${id}`);
    }
}
export default new ServicoDataService();