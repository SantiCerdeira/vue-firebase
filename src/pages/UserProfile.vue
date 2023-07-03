<template>
    <template v-if="!loading">
        <section class="p-2 flex items-center flex-col text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-[90vh] py-10">
            <h1 class="text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mx-auto text-center leading-tight drop-shadow-2xl">Perfil de {{ user.name }} {{ user.lastName }}</h1>
            <router-link :to="`/usuario/${user.id}/chat`" class="my-2 text-center w-full lg:w-8/12 bg-white text-purple-700 rounded-lg p-5 mx-auto text-xl font-semibold">Chatear con {{ user.name }} {{ user.lastName  }} </router-link>
        </section>
    </template>
    <template v-else>
        <Loader />
    </template>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Loader from '../components/Loader.vue';
import useUser from '../composition/useUser';

const route = useRoute()
const {user, loading} = useUser(route.params.id)

</script>