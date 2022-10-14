import { createRouter,createWebHistory } from "vue-router";

import RootHome from "./pages/RootHome.vue";
import RootTask from "./pages/RootTask.vue";

const routes = [
    {path : "/" , component : RootHome},
    {path : "/tasks" , component : RootTask},
]

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;