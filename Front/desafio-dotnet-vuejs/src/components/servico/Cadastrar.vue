<template>
    <h3>Novo Serviço</h3>
    <hr/>
    <div class="form" style="padding: 1%;">
        <div class="col-8">
            <div>
                <label class="form-label">Nome</label>
                <input type="text" required class="form-control" placeholder="Nome" v-model="servico.nome">
            </div>
            <div>
                <label class="form-label">Descrição</label>
                <input type="text" required class="form-control" placeholder="Descrição" v-model="servico.descricao">
            </div>
            <button class="btn btn-success" style="margin-top: 5px; padding 2px" @click="cadastrarServico">Cadastrar</button>
        </div>
    </div>
</template>

<script>
import ServicoDataService from '../../services/ServicoDataService';
export default {
    data() {
        return {
            servico: {
                nome: '',
                descricao: '',
                valor:''
            }
        }
    },
    methods: {
        cadastrarServico() {
            if(this.servico.nome == '' || this.servico.descricao == ''){
                alert("Preencha todos os campos!")
            }
            else{
            var data = {
                nome: this.servico.nome,
                descricao: this.servico.descricao,
            };
            }
            ServicoDataService.cadastrar(data)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    }
}
</script>