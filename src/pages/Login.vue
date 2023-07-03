<template>
    <section class="p-2 flex justify-center items-center flex-col bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-[90vh]">
        <h1 class="text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mx-auto text-center leading-tight drop-shadow-2xl">Iniciar sesión</h1>
        <div class="p-7 bg-white border-solid border-4 border-violet-800 rounded-lg w-full lg:w-[50vw]">
            <form action="#" id="login-form" @submit.prevent="handleSubmit">
                <div>
                    <label for="email" class="text-[1.2rem] font-semibold my-2 block">Correo electrónico:</label>
                    <Input
                    type="email"
                    name="email"
                    id="email"
                    v-model="fields.email"
                    :class="{ 'border-red-500': emailError }"
                    aria-invalid="emailError"
                    />
                    <div v-if="emailError" class="text-red-500 mt-1">{{ emailErrorMessage }}</div>
                </div>
                <div>
                    <label for="password" class="text-[1.2rem] font-semibold my-2 block">Contraseña:</label>
                    <Input
                    type="password"
                    name="password"
                    id="password"
                    v-model="fields.password"
                    :class="{ 'border-red-500': passwordError }"
                    aria-invalid="passwordError"
                    />
                    <div v-if="passwordError" class="text-red-500 mt-1">{{ passwordErrorMessage }}</div>
                </div>
                <Boton class="w-full">Ingresar</Boton>

                <p class="text-center my-2 text-gray-500">¿No tenés una cuenta? <router-link to="/registrarse" class="underline">Registrate</router-link></p>

                <div v-if="feedback.message !== ''" :class="feedback.type === 'success' ? 'bg-green-500' : 'bg-red-500'" class="text-white text-center p-2 rounded-lg">
                    <p>{{ feedback.message }}</p>
                </div>

                <template v-if="loading">
                    <div className="flex justify-center">
                    <Loader/>
                    </div>
                </template>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import Boton from '../components/Boton.vue'
import Input from '../components/Input.vue'
import { login } from '../services/auth.js'
import { useRouter } from 'vue-router';
import Loader from '../components/Loader.vue';

const { fields, loading, feedback, handleSubmit, emailError, emailErrorMessage, passwordError, passwordErrorMessage } = useLoginForm()

function useLoginForm() {
    const fields = ref({
        email: '',
        password: '',
    })

    const loading = ref(false)
    const feedback = ref({
        message: '',
        type: 'error'
    })

    const emailError = ref(false);
    const emailErrorMessage = ref('');
    const passwordError = ref(false);
    const passwordErrorMessage = ref('');

    const router = useRouter()

    function handleSubmit() {
        feedback.value = {
            message: '',
            type: 'error'
        }
        loading.value = true;
        emailError.value = false;
        emailErrorMessage.value = '';
        passwordError.value = false;
        passwordErrorMessage.value = '';

        if (!fields.value.email) {
            emailError.value = true;
            emailErrorMessage.value = 'Por favor, ingresá un email con el formato correcto.';
            loading.value = false;
        }

        if (!fields.value.password) {
            passwordError.value = true;
            passwordErrorMessage.value = 'Por favor, ingresá tu contraseña.';
            loading.value = false;
        }

        if (emailError.value || passwordError.value) {
            return;
        }

        login({
            ...fields.value
        })
            .then(user => {
                feedback.value = {
                    message: 'Sesión iniciada con éxito.',
                    type: 'success'
                }
                loading.value = false;
                if(user.role === 1) {
                    router.push('/admin');
                } else {
                    router.push('/perfil');
                }
            })
            .catch(error => {
                loading.value = false;
                feedback.value = {
                    message: 'Error al iniciar sesión.',
                    type: 'error'
                };
            })
    }
    
    return {
        fields,
        loading,
        feedback,
        handleSubmit,
        emailError,
        emailErrorMessage,
        passwordError,
        passwordErrorMessage
    }
}

</script>