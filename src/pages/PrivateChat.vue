<template>
    <template v-if="!loading">
        <section class="p-2 flex items-center flex-col text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-[90vh] py-10">
            <h1 class="text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mx-auto text-center leading-tight drop-shadow-2xl">Chat con {{ user.name }} {{ user.lastName }}</h1>
            <section class="w-full lg:w-6/12 mx-auto p-2 flex flex-col">
                <div id="mini-chat">
                    <div v-if="loadingMessages" class="flex justify-center">
                        <Loader/>
                    </div>
                    <ul>
                        <li v-for="(message, index) in messages" :key="index" class="w-full mb-2" :class="{'text-right': message.userId === authUser.id}"> 
                            {{ message.message }}
                            <Date :date="message.created_at"/>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col w-10/12 mx-auto">
                    <form action="#" id="form-message" @submit.prevent="handleForm">
                        <div class="flex flex-col">
                            <label for="message" class="text-[1.2rem] font-semibold my-2">Mensaje</label>
                            <Input 
                                type="text" 
                                name="message" 
                                id="message"
                                class="text-black"
                                v-model="newMessage.message"
                            />
                        </div>
                        <Boton class="w-full"/>
                    </form>
                    <div v-if="newMessageLoading">Enviando mensaje...</div>
                </div>
            </section>
        </section>
    </template>
</template>

<script setup>
import Loader from '../components/Loader.vue';
import useUser from '../composition/useUser';
import { useRoute } from 'vue-router';
import { onMounted, ref, watch } from 'vue';
import Input from '../components/Input.vue'
import Boton from '../components/Boton.vue'
import {sendPrivateChatMessage, subscribeToPrivateChatMessages} from '../services/privateChat.js';
import useAuth from '../composition/useAuth';
import Date from '../components/Chat/Date.vue'

const route = useRoute()
const {user: authUser} = useAuth()
const {user, loading} = useUser(route.params.id)
const {newMessage, handleForm, newMessageLoading} = usePrivateChatForm(authUser, user)
const {messages, loading: loadingMessages} = usePrivateChat(authUser, user)


function usePrivateChat(authUser, otherUser){
    const messages = ref([])
    const loading = ref(true)

    watch(otherUser, newOtherUser => {
        if(newOtherUser.id !== ''){
            subscribeToPrivateChatMessages({
                from: authUser.value.id,
                to: otherUser.value.id,
            }, newMessages => {
                messages.value = newMessages
                loading.value = false
            })
        }
    })

    return {
        messages,
        loading,
    }
}


function usePrivateChatForm(authUser, otherUser) {
    const newMessageLoading = ref(false)
    const newMessage = ref({
        message: '',
    })

    function handleForm() {
        newMessageLoading.value = true

        sendPrivateChatMessage({
            from: authUser.value.id,
            to: otherUser.value.id,
            message: newMessage.value.message,
        })
            .then(() => {
                newMessage.value.message = ''
                newMessageLoading.value = false
            })
    }

    return {
        newMessage,
        handleForm,
        newMessageLoading,
    }

}

</script>å