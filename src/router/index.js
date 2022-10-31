import {createRouter, createWebHistory} from 'vue-router'
import MainView from "../views/MainView.vue";
import graphView from "@/views/GraphView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/graph',
      component: graphView
    }
  ]
})

export default router
