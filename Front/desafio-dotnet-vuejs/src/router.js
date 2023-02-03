import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/vendedor/listar",
        component: () => import("./components/vendedor/Listar.vue")
    },
    {
        path: "/",
        component: () => import("./components/TheWelcome.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;