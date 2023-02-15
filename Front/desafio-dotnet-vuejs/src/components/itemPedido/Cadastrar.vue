<template>
    <h3>Novo Item Pedido</h3>
    <hr/>
    <div class="form" style="padding: 1%;">
        <div class="col-8">
            <div>
                <label class="form-label">Id do Serviço</label>
                <input type="text" required class="form-control" placeholder="Id do Serviço" v-model="itemPedido.servicoId">
            </div>

            <div>
                <label class="form-label">Id do Pedido</label>
                <input type="text" required class="form-control" placeholder="Id do Pedido" v-model="itemPedido.pedidoId">
            </div>

            <div>
                <label class="form-label">Quantidade</label>
                <input type="text" required class="form-control" placeholder="Quantidade" v-model="itemPedido.quantidade">
            </div>

            <div>
                <label class="form-label">Valor</label>
                <input type="text" required class="form-control" placeholder="Valor" v-model="itemPedido.valor">
            </div>

            <button class="btn btn-success" style="margin-top: 5px; padding 2px" @click="cadastrarItemPedido">Cadastrar</button>
        </div>
    </div>
</template>

<script>
import ItemPedidoDataService from '../../services/ItemPedidoDataService';
export default {
    data() {
        return {
            itemPedido: {
                servicoId: '',
                pedidoId: '',
                quantidade:'',
                valor:''
            }
        }
    },
    methods: {
        cadastrarItemPedido() {
            if(this.itemPedido.servicoId == '' || this.itemPedido.pedidoId == ''
                || this.itemPedido.quantidade == '' || this.itemPedido.valor == ''){
                alert("Preencha todos os campos!")
            }
            else{
            var data = {
                servicoId: this.itemPedido.servicoId,
                pedidoId: this.itemPedido.pedidoId,
                quantidade: this.itemPedido.quantidade,
                valor: this.itemPedido.valor
            };
            }
            ItemPedidoDataService.cadastrar(data)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    }
}
</script>