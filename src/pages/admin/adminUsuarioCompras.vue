<template>
    <section class="p-2 flex items-center flex-col min-h-[90vh] py-10">
        <template v-if="loading || loadingCompras">
            <Loader />
        </template>
        <template v-else>
            <h1 class="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mx-auto text-center leading-tight drop-shadow-2xl">Compras de {{ user.name }} {{ user.lastName }}</h1>
            <template v-if="compras.length === 0">
                <p class="my-5 text-5xl">Este usuario no ha realizado ninguna compra</p>
            </template>
            <template v-else>
                <table class="w-full lg:w-[80vw] text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-violet-500">
                        <tr>
                            <th class="px-6 py-4">Servicio</th>
                            <th class="py-4">Precio</th>
                            <th class="py-4">Fecha</th>
                            <th class="py-4 text-center">Estado</th>
                            <th class="py-4 text-center">Acciones</th>
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

                        <template v-if="compra.estado === 'pending'">
                            <td>
                                <button @click="modificarEstadoCompra(compra.id, compra.estado)" class="py-4 font-medium text-white bg-blue-900 text-center w-full hover:scale-95 transition duration-300">Marcar como finalizada</button>
                            </td>
                        </template>
                        <template v-if="compra.estado === 'completed'">
                            <td>
                                <button @click="modificarEstadoCompra(compra.id, compra.estado)" class="py-4 font-medium text-white bg-red-500 text-center w-full hover:scale-95 transition duration-300">Marcar como activa</button>
                            </td>
                        </template>

                        </tr>
                    </tbody>
                </table>
                <template v-if="loadingFinalizar">
                    <td>
                        <Loader />
                    </td>
                </template>
            </template>
        </template>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import useUser from '../../composition/useUser';
import Loader from '../../components/Loader.vue';
import { getComprasById, cambiarEstadoCompra } from '../../services/compras';
import { ref, onMounted } from 'vue';

const route = useRoute()
const {user, loading} = useUser(route.params.userId)
const loadingCompras = ref(false)
const loadingFinalizar = ref(false)
const compras = ref([])

async function getAllUserCompras() {
    loadingCompras.value = true
    const comprasResponse = await getComprasById(route.params.userId)
    compras.value = comprasResponse
    loadingCompras.value = false
}

async function modificarEstadoCompra(compraId, estado) {
    loadingFinalizar.value = true
    if(estado === 'pending') {
        await cambiarEstadoCompra(compraId, 'completed')
    } else {
        await cambiarEstadoCompra(compraId, 'pending')
    }
    loadingFinalizar.value = false
    getAllUserCompras()
}

onMounted(() => {
    getAllUserCompras()
})

</script>