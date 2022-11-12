import {createRouter, createWebHistory} from 'vue-router'
import MainView from "../views/MainView.vue";
import graphView from "@/views/GraphView.vue";
import Main2 from "@/views/Main2.vue";
import Tree from "@/views/Tree.vue";
import Pie from "@/views/Pie.vue";

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
      path: '/Main2',
      component: Main2
    },
    {
      path: '/tree',
      component: Tree
    },
    {
      path: "/pie",
      component: Pie
    }
  ]
})

export default router
