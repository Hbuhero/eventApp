import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import CategoryView from "@/views/CategoryView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/category",
            name: "category",
            component: CategoryView
        }
    ]
})

export default router