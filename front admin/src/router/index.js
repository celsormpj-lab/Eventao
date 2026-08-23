import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
//import Dashboard from '../views/Dashboard.vue'
//import Usuarios from '../views/Usuarios.vue'
//import Eventos from '../views/Eventos.vue'
//import Inscricoes from '../views/Inscricoes.vue'
import Tapume from '../../../componentes-compartilhados/components/Tapume.vue'
const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    name: 'login',
    component: Login
  },
    {
    path: '/dashboard',
    name: 'dashboard',
    component: Tapume,
    meta: {
      requiresAuth: true
  }
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: Tapume,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: Tapume,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/inscricoes',
    name: 'inscricoes',
    component: Tapume,
    meta: {
      requiresAuth: true
    }
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach ((to, from, next) => {
  const logado = localStorage.getItem ("logado");
  if (to.meta.requiresAuth && !logado) {
    return next ('/login');
  }
  if (to.path ==="/login" && logado) {
    return next ("/dashboard");
  }
  next ();
});
export default router
