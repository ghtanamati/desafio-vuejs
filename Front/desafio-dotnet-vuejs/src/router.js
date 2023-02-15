import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./components/TheWelcome.vue")
    },
    {
        path: "/Vendedor/Listar",
        component: () => import("./components/vendedor/Listar.vue")
    },
    {
        path: "/Vendedor/Cadastrar",
        component: () => import("./components/vendedor/Cadastrar.vue")
    },
    {
        path: "/Vendedor/:id",
        component: () => import("./components/vendedor/Atualizar.vue")
    },
    {
        path: "/Cliente/Listar",
        component: () => import("./components/cliente/Listar.vue")
    },
    {
        path: "/Cliente/Cadastrar",
        component: () => import("./components/cliente/Cadastrar.vue")
    },
    {
        path: "/Cliente/:id",
        component: () => import("./components/cliente/Atualizar.vue")
    },
    {
        path: "/Servico/Listar",
        component: () => import("./components/servico/Listar.vue")
    },
    {
        path: "/Servico/Cadastrar",
        component: () => import("./components/servico/Cadastrar.vue")
    },
    {
        path: "/Servico/:id",
        component: () => import("./components/servico/Atualizar.vue")
    },
    {
        path: "/ItemPedido/Listar",
        component: () => import("./components/itemPedido/Listar.vue")
    },
    {
        path: "/ItemPedido/Cadastrar",
        component: () => import("./components/itemPedido/Cadastrar.vue")
    },
    {
        path: "/ItemPedido/:id",
        component: () => import("./components/itemPedido/Atualizar.vue")
    },
    {
        path: "/Pedido/Listar",
        component: () => import("./components/pedido/Listar.vue")
    },
    {
        path: "/Pedido/Cadastrar",
        component: () => import("./components/pedido/Cadastrar.vue")
    },
    {
        path: "/Pedido/:id",
        component: () => import("./components/pedido/Atualizar.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;