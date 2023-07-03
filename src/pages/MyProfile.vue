<template>
    <section class="p-2 flex items-center flex-col text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-[90vh] py-10">
        <h1 class="text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mx-auto text-center leading-tight drop-shadow-2xl">{{ user.name }} {{ user.lastName }}</h1>
        <template v-if="user.role === 1">
            <h2 class="font-semibold text-white text-center text-2xl">Administrador</h2>
            <router-link to="/admin" class="my-2 text-center w-80 bg-white text-violet-700 mx-auto p-3 rounded-xl font-semibold hover:scale-105 focus:scale-105 transition duration-200">Panel de administración</router-link>
        </template>
        <template v-else>
            <template v-if="loading">
                <Loader />
            </template>
            <template v-else>
                <template v-if="compras.length === 0">
                    <p class="my-5 text-5xl">Aún no has realizado ninguna compra</p>
                </template>
                <template v-else>
                    <p class="my-5 text-5xl">Mis compras</p>
                    <table class="w-full lg:w-[80vw] text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-white uppercase bg-violet-500">
                            <tr>
                                <th class="px-6 py-4">Servicio</th>
                                <th class="py-4">Precio</th>
                                <th class="py-4">Fecha</th>
                                <th class="py-4 text-center">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(compra, index) in compras" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <template v-if="compra.serviceId === 'Z6dSllSe8orFL6Sc0U6J'">
                                <td class="px-6 py-4 font-medium text-gray-900">Plan básico</td>
                            </template>
                            <template v-else>
                                <td class="px-6 py-4 font-medium text-gray-900">Plan premium</td>
                            </template>
                            <td>${{ compra.total }}</td>
                            <td>{{ compra.fecha }}</td>
                            <template v-if="compra.estado === 'pending'">
                                <td class="py-4 font-medium text-white bg-orange-400 text-center">Pendiente</td>
                            </template>
                            <template v-else>
                                <td class="py-4 font-medium text-white bg-green-600 text-center">Finalizada</td>
                            </template>
                            </tr>
                        </tbody>
                    </table>
                </template>
            </template>
            <router-link v-if="!loading && user.role !== 1" to="/usuario/LHL2RfZxOCXzKNARQuhg63gZd663/chat" class="w-full lg:w-5/12 mx-auto text-center bg-purple-600 hover:bg-purple-700 hover:scale-105 transition duration-200 px-4 py-2 my-5 text-white rounded-md">
                Chatear con soporte 
            </router-link>
        </template>
    </section>
</template>

<script setup>
import useAuth from '../composition/useAuth.js';
import { getComprasById } from '../services/compras';
import { ref, watch } from 'vue';
import Loader from '../components/Loader.vue';

const { user } = useAuth()
const loading = ref(false)
const compras = ref([])

watch(user, async () => {
    if (user.value) {
        loading.value = true
        const comprasResponse = await getComprasById(user.value.id)
        compras.value = comprasResponse
        loading.value = false
    }
})

</script>