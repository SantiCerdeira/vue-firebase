<template>
    <router-link to="/admin" class="block p-3 rounded underline font-semibold text-start text-xl m-5">Volver al inicio</router-link>
    <section class="p-2 flex items-center flex-col min-h-[90vh] py-10">
        <h1 class="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mx-auto text-center leading-tight drop-shadow-2xl">Usuarios</h1>
        <template v-if="loading">
            <Loader />
        </template>
        <template v-else>
            <template v-if="users.length === 0">
                <p class="my-5 text-5xl">Aún no hay usuarios</p>
            </template>
            <template v-else>
                <table class="w-full lg:w-[80vw] text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-violet-500">
                        <tr>
                            <th class="px-6 py-4">Id</th>
                            <th class="py-4">Nombre y apellido</th>
                            <th class="py-4">Email</th>
                            <th class="py-4 text-center">Compras</th>
                            <th class="py-4 text-center">Chat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in users" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <template v-if="user.role === 2">
                            <td class="px-6 py-4 font-medium text-gray-900">{{ user.id }}</td>
                            <td class="px-6 py-4 font-medium text-gray-900">{{ user.name }} {{ user.lastName }}</td>   
                            <td class="px-6 py-4 font-medium text-gray-900">{{ user.email }}</td>
                            <td class="py-4 text-center">
                                <router-link :to="`/admin/usuarios/${user.id}/compras`" class="w-1/4 p-3 rounded bg-violet-700 font-semibold text-center my-7 mx-auto hover:bg-violet-600 hover:scale-105 focus:scale-105 focus:bg-violet-600 transition duration-300 text-white">Ver compras</router-link>
                            </td>
                            <td class="py-4 text-center">
                                <router-link :to="`/usuario/${user.id}/chat`" class="w-1/4 p-3 rounded bg-violet-700 font-semibold text-center my-7 mx-auto hover:bg-violet-600 hover:scale-105 focus:scale-105 focus:bg-violet-600 transition duration-300 text-white">Chat</router-link>
                            </td>
                        </template>
                        </tr>
                    </tbody>
                </table>
            </template>
        </template>
    </section>
</template>

<script setup>
import { getUsers } from '../../services/users.js';
import { onMounted, ref } from 'vue';
import Loader from '../../components/Loader.vue';

const users = ref([])
const loading = ref(false)

async function getAllUsers() {
    loading.value = true
    const usersResponse = await getUsers()
    users.value = usersResponse
    loading.value = false
}

onMounted(() => {
    getAllUsers()
})

</script>