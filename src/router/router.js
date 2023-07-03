import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Registro from '../pages/Registro.vue'
import MyProfile from '../pages/MyProfile.vue'
import UserProfile from '../pages/UserProfile.vue'
import PrivateChat from '../pages/PrivateChat.vue'
import adminHome from '../pages/admin/adminHome.vue'
import adminUsuarios from '../pages/admin/adminUsuarios.vue'
import adminUsuarioCompras from '../pages/admin/adminUsuarioCompras.vue'
import Pricing from '../pages/Pricing.vue'
import { subscribeToAuth } from '../services/auth'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/iniciar-sesion',
        component: Login
    },
    {
        path: '/registrarse',
        component: Registro
    },
    {
        path: '/precios',
        component: Pricing,
    },
    {
        path: '/perfil',
        component: MyProfile,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/usuario/:id',
        component: UserProfile,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/usuario/:id/chat',
        component: PrivateChat,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/admin',
        component: adminHome,
        meta: {
            requiresAuth: true,
            requiresAdmin: true
        }
    },
    {
        path: '/admin/usuarios',
        component: adminUsuarios,
        meta: {
            requiresAuth: true,
            requiresAdmin: true
        }
    },
    {
        path: '/admin/usuarios/:userId/compras',
        component: adminUsuarioCompras,
        meta: {
            requiresAuth: true,
            requiresAdmin: true
        }
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

let user = {
    id: null,
    email: null,
    name: null, 
    lastName: null,
}

subscribeToAuth(newUser => user = newUser)

router.beforeEach((to, from) => {
    if(to.meta.requiresAuth && user.id === null){
        return '/iniciar-sesion'
    }
    if(to.meta.requiresAdmin && user.role !== 1){
        return '/perfil'
    }
})

export default router