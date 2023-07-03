<template>
    <section class="p-2 flex justify-center items-center flex-col bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-[90vh] py-10">
        <h1 class="text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mx-auto text-center leading-tight drop-shadow-2xl">Planes</h1>
        <template v-if="loading">
            <div className="flex justify-center">
                <Loader/>
            </div>
        </template>
        <div v-else class="flex flex-col-reverse lg:flex-row-reverse justify-center gap-0 w-10/12 flex-wrap">
            <PricingTable v-for="plan in pricingData" :key="plan.id">
                <template v-slot:title>{{ plan.name }}</template>
                <template v-slot:price>${{ plan.price }}</template>
                <template v-slot:description>{{ plan.description }}</template>
                <template v-slot:features>
                    <li v-for="(feature, index) in plan.features" :key="index" class="mb-2">{{ feature }}</li>
                </template>
                <template v-slot:button v-if="user.id && user.role !== 1">
                    <button @click="confirmarCompra(plan.id, plan.price, user.id)" class="bg-purple-600 hover:bg-purple-700 px-4 py-2 text-white rounded-md">
                        Comprar
                    </button>
                    <template v-if="loadingCompra">
                        <div className="flex justify-center">
                            <Loader/>
                        </div>
                    </template>
                </template>
            </PricingTable>
        </div>
        <router-link v-if="!loading && user.role !== 1" to="/usuario/LHL2RfZxOCXzKNARQuhg63gZd663/chat" class="w-full lg:w-5/12 mx-auto text-center bg-purple-600 hover:bg-purple-700 hover:scale-105 transition duration-200 px-4 py-2 my-5 text-white rounded-md">
            Chatear con soporte 
        </router-link>
    </section>
</template>

<script setup>
import PricingTable from '../components/PricingTable.vue'
import { ref } from 'vue'
import { getPricingData } from '../services/services';
import { onMounted } from 'vue';
import Loader from '../components/Loader.vue';
import { purchaseService } from '../services/compras';
import useAuth from '../composition/useAuth.js';
import { useRouter } from 'vue-router';

const {user} = useAuth()
const pricingData = ref([])
const loading = ref(true)
const loadingCompra = ref(false)

const router = useRouter();

onMounted(async () => {
    pricingData.value = await getPricingData()
    loading.value = false
})

const crearCompra = async (serviceId, price, userId) => {
    loadingCompra.value = true;
    try {
        console.log(serviceId, price, userId)
        const response = await purchaseService(serviceId, price, userId);
        loadingCompra.value = false;
        router.push('/perfil');
    } catch (error) {
        console.error(error);
    }
};

const confirmarCompra = (serviceId, price, userId) => {
if (confirm(`¿Estás seguro de que deseas comprar este servicio por $${price}?`)) {
    crearCompra(serviceId, price, userId);
}};

</script>