<template>
    <h3>Atualizar Vendedor</h3>
    <hr/>
    <div class="form" style="padding: 1;">
        <div class="col-8">
            <div>
                <label class="form-label">Id</label>
                <input type="text" disabled class="form-control" v-model="vendedor.id" placeholder="Id">
            </div>
            <div>
                <label class="form-label">Nome</label>
                <input type="text" class="form-control" v-model="vendedor.nome"  placeholder="Nome">
            </div>
            <div>
                <label class="form-label">Login</label>
                <input type="text" disabled class="form-control" v-model="vendedor.login"  placeholder="Login">
            </div>
            <div>
                <label class="form-label">Senha</label>
                <input type="password" class="form-control" v-model="vendedor.senha"  placeholder="Senha">
            </div>
            <button type="submit" class="btn btn-success" style="margin-top: 5px; padding 2px" @click="atualizarVendedor">Atualizar</button>
        </div>
    </div>
</template>

<script>
import VendedorDataService from '../../services/VendedorDataService';

export default {
    data() {
        return {
            vendedor: { }
        }
    },
    methods: {
        atualizarVendedor() {
            VendedorDataService.atualizar(this.vendedor.id,this.vendedor)
                .then(() => {
                    this.$router.push('listar');
                });
            },
        obterVendedor(id) {
            VendedorDataService.obterPorId(id)
                .then((response) => {
                    this.vendedor = response.data;
                });
            }
        },
    mounted() {
        this.obterVendedor(this.$route.params.id);
    }
}
</script>