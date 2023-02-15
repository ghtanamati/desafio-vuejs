<template>
    <h3>Novo Cliente</h3>
    <hr/>
    <div class="form" style="padding: 1%;">
        <div class="col-8">
            <div>
                <label class="form-label">Nome</label>
                <input type="text" required class="form-control" placeholder="Nome" v-model="cliente.nome">
            </div>
            <div>
                <label class="form-label">Login</label>
                <input type="text" required class="form-control" placeholder="Login" v-model="cliente.login">
            </div>
            <div>
                <label class="form-label">Senha</label>
                <input type="password" required class="form-control" placeholder="Senha" v-model="cliente.senha">
            </div>
            <button class="btn btn-success" style="margin-top: 5px; padding 2px" @click="cadastrarCliente">Cadastrar</button>
        </div>
    </div>
</template>

<script>
import ClienteDataService from '../../services/ClienteDataService';
export default {
    data() {
        return {
            cliente: {
                nome: '',
                login: '',
                senha:''
            }
        }
    },
    methods: {
        cadastrarCliente() {
            if(this.cliente.nome == '' || this.cliente.login == '' || this.cliente.senha == ''){
                alert("Preencha todos os campos!")
            }
            else{
                var data = {
                    nome: this.cliente.nome,
                    login: this.cliente.login,
                    senha: this.cliente.senha,
                };
            }
            ClienteDataService.cadastrar(data)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    }
}
</script>