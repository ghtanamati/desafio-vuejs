<template>
    <h3>Novo Pedido</h3>
    <hr/>
    <div class="form" style="padding: 1%;">
        <div class="col-8">
            <div>
                <label class="form-label">Nome</label>
                <input type="text" required class="form-control" placeholder="Nome" v-model="pedido.nome">
            </div>
            <div>
                <label class="form-label">Login</label>
                <input type="text" required class="form-control" placeholder="Login" v-model="pedido.login">
            </div>
            <div>
                <label class="form-label">Senha</label>
                <input type="password" required class="form-control" placeholder="Senha" v-model="pedido.senha">
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
                nome: '',
                login: '',
                senha:''
            }
        }
    },
    methods: {
        cadastrarPedido() {
            if(this.pedido.nome == '' || this.pedido.login == '' || this.pedido.senha == ''){
                alert("Preencha todos os campos!")
            }
            else{
            var data = {
                nome: this.pedido.nome,
                login: this.pedido.login,
                senha: this.pedido.senha,
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