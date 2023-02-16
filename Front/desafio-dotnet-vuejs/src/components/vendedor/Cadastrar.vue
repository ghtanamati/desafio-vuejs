<template>
    <h3>Novo Vendedor</h3>
    <hr/>
    <div class="form" style="padding: 1%;">
        <div class="col-8">
            <div>
                <label class="form-label">Nome</label>
                <input type="text" required class="form-control" placeholder="Nome" v-model="vendedor.nome">
            </div>
            <div>
                <label class="form-label">Login</label>
                <input type="text" required class="form-control" placeholder="Login" v-model="vendedor.login">
            </div>
            <div>
                <label class="form-label">Senha</label>
                <input type="password" required class="form-control" placeholder="Senha" v-model="vendedor.senha">
            </div>
            <button class="btn btn-success" style="margin-top: 5px; padding 2px" @click="cadastrarVendedor">Cadastrar</button>
        </div>
    </div>
</template>

<script>
import VendedorDataService from '../../services/VendedorDataService';
export default {
    data() {
        return {
            vendedor: {
                nome: '',
                login: '',
                senha:''
            }
        }
    },
    methods: {
        cadastrarVendedor() {
            if(this.vendedor.nome == '' || this.vendedor.login == '' || this.vendedor.senha == ''){
                alert("Preencha todos os campos!")
            }
            else{
                var data = {
                    nome: this.vendedor.nome,
                    login: this.vendedor.login,
                    senha: this.vendedor.senha,
                };
            }
            VendedorDataService.cadastrar(data)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    }
}
</script>