import { createRouter,createWebHistory } from "vue-router";

import RootHome from "./pages/RootHome.vue";

const routes = [
    {path : "/" , component : RootHome}
]

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;