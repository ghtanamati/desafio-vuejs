import http from "../http-common";

class VendedorDataService {
    listar() {
        return http.get('/vendedor/Listar')
    }
}
export default new VendedorDataService();