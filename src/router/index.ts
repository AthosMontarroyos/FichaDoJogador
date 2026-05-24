import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KurumiView from '../views/KurumiView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/kurumi', component: KurumiView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
