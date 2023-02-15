<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import MeuComponente from './components/MeuComponente.vue'
  import TheWelcome from './components/TheWelcome.vue'
  import WelcomeItem from './components/WelcomeItem.vue'
</script>

<link rel='stylesheet' href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<template>
<div class="navbar">
  <div class="btn-group">

    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <router-link class="dropdown-item" to="/">Home</router-link>
        </li>
      </ul>
    </div>

    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Vendedores
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <router-link class="dropdown-item" to="/vendedor/listar">Listar</router-link>
        </li>
        <li>
          <router-link class="dropdown-item" to="/vendedor/cadastrar">Cadastrar</router-link>
        </li>
      </ul>
    </div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    Clientes
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
      <li>
          <router-link class="dropdown-item" to="/cliente/listar">Listar</router-link>
      </li>
      <li>
          <router-link class="dropdown-item" to="/cliente/cadastrar">Cadastrar</router-link>
      </li>
  </ul>
</div>

  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Serviços
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
      <li>
            <router-link class="dropdown-item" to="/servico/listar">Listar</router-link>
        </li>
        <li>
            <router-link class="dropdown-item" to="/servico/cadastrar">Cadastrar</router-link>
        </li>
    </ul>
  </div>

  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
      Itens Pedidos
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
        <li>
            <router-link class="dropdown-item" to="/itempedido/listar">Listar</router-link>
        </li>
        <li>
            <router-link class="dropdown-item" to="/itempedido/cadastrar">Novo Item Pedido</router-link>
        </li>
    </ul>
  </div>

  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
      Pedidos
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
        <li>
            <router-link class="dropdown-item" to="/pedido/listar">Listar</router-link>
        </li>
        <li>
            <router-link class="dropdown-item" to="/pedido/cadastrar">Novo Pedido</router-link>
        </li>
    </ul>
  </div>

  </div>
</div>
<main>
  <router-view/>
</main>
</template>

<style scoped>

body {
  font-family: Arial, Helvetica, sans-serif;
}
.navbar{
  padding: 5px;
  background-color: #333;
  font-size: 16px;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
</style>