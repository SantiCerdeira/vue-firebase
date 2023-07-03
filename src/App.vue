<template>
    <nav class="flex bg-slate-950 p-4 justify-center items-center text-white w-full">
        <ul class="flex justify-end gap-5 container">
            <li class="hover:scale-110 focus:scale-110 transition duration-200">
                <router-link class="block p-2"  to="/">Home</router-link>
            </li>
            <li class="hover:scale-110 focus:scale-110 transition duration-200">
                <router-link class="block p-2"  to="/precios">Precios</router-link>
            </li>
            
            <template v-if="user.id === undefined || user.id === null">
                <li class="hover:scale-110 focus:scale-110 transition duration-200">
                    <router-link class="block p-2"  to="/iniciar-sesion">Iniciar sesión</router-link>
                </li>
                <li class="hover:scale-110 focus:scale-110 transition duration-200">
                    <router-link class="block p-2"  to="/registrarse">Registro</router-link>
                </li>
            </template>

            <template v-else>
                <li class="hover:scale-110 focus:scale-110 transition duration-200">
                    <router-link class="block p-2"  to="/perfil">Mi Perfil</router-link>
                </li>
                <template v-if="user.role === 1">
                    <li class="hover:scale-110 focus:scale-110 transition duration-200">
                        <router-link class="block p-2"  to="/admin">Admin</router-link>
                    </li>
                </template>
                <li class="hover:scale-110 focus:scale-110 transition duration-200">
                    <form action="#" method="post" @submit.prevent="handleLogout">
                        <button type="submit" class="block p-2">{{ user.email }} (Cerrar sesión)</button>
                    </form>
                </li>
            </template>
        </ul>
    </nav>
    <main>
        <router-view  />
    </main>
    <footer>
        <div class="flex justify-center items-center bg-slate-950 text-white p-4 h-32">
            <p>&copy; Da Vinci 2023, Santiago Cerdeira</p>
        </div>
    </footer>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { logout } from './services/auth.js';
import useAuth from './composition/useAuth.js';

const { user } = useAuth()
const { handleLogout } = useLogout()    

function useLogout() {
    const router = useRouter()

    return {
        handleLogout() {
            logout()
                .then(() => {
                    router.push('/iniciar-sesion');
                })
        }
    }
}
</script>
