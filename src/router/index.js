import {createRouter, createWebHistory} from 'vue-router'
import MainView from "../views/MainView.vue";
import graphView from "@/views/GraphView.vue";
import Abc from "@/views/Abc.vue";

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
    },
    {
      path: '/abc',
      component: Abc
    }
  ]
})

export default router
