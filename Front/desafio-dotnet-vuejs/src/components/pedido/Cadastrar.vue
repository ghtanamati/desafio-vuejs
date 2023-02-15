<template>
    <h3>Novo Pedido</h3>
    <hr/>
    <div class="form" style="padding: 1%;">
        <div class="col-8">
            <div>
                <label class="form-label">Data</label>
                <input type="text" class="form-control" v-model="pedido.data"  placeholder="Data">
            </div>

            <div>
                <label class="form-label">Id do Vendedor</label>
                <input type="text" required class="form-control" placeholder="Id do Vendedor" v-model="pedido.vendedorId">
            </div>

            <div>
                <label class="form-label">Id do Cliente</label>
                <input type="password" required class="form-control" placeholder="Id do Cliente" v-model="pedido.clienteId">
            </div>
            <button class="btn btn-success" style="margin-top: 5px; padding 2px" @click="cadastrarPedido">Cadastrar</button>
        </div>
    </div>
</template>

<script>
import PedidoDataService from '../../services/PedidoDataService';
export default {
    data() {
        return {
            pedido: {
                id: '',
                vendedorId: '',
                clienteId:''
            }
        }
    },
    methods: {
        cadastrarPedido() {
            if(this.pedido.id == '' || this.pedido.clienteId == '' || this.pedido.vendedorId == ''){
                alert("Preencha todos os campos!")
            }
            else{
            var data = {
                nome: this.pedido.id,
                login: this.pedido.clienteId,
                senha: this.pedido.vendedorId,
            };
            }
            PedidoDataService.cadastrar(data)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    }
}
</script>