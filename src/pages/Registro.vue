<template>
    <section class="p-2 flex justify-center items-center flex-col bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-[90vh]">
        <h1 class="text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mt-5 mx-auto text-center leading-tight drop-shadow-2xl">Registro</h1>
        <div class="p-7 bg-white border-solid border-4 border-violet-800 rounded-lg  w-full lg:w-[50vw]">
            <form action="#" id="login-form" @submit.prevent="handleSubmit">
                <div>
                    <label for="name" class="text-[1.2rem] font-semibold my-2 block">Nombre:</label>
                    <Input 
                    type="text" 
                    name="name" 
                    id="name"
                    :class="{ 'border-red-500': nameError }"
                    v-model="fields.name"
                    />
                    <div v-if="nameError" class="text-red-500 mt-1">{{ nameErrorMessage }}</div>
                </div>
                <div>
                    <label for="lastName" class="text-[1.2rem] font-semibold my-2 block">Apellido:</label>
                    <Input 
                    type="text" 
                    name="lastName" 
                    id="lastName"
                    :class="{ 'border-red-500': lastNameError }"
                    v-model="fields.lastName"
                    />
                    <div v-if="lastNameError" class="text-red-500 mt-1">{{ lastNameErrorMessage }}</div>
                </div>
                <div>
                    <label for="email" class="text-[1.2rem] font-semibold my-2 block">Correo electrónico:</label>
                    <Input 
                    type="email" 
                    name="email" 
                    id="email"
                    :class="{ 'border-red-500': emailError }"
                    v-model="fields.email"
                    />
                    <div v-if="emailError" class="text-red-500 mt-1">{{ emailErrorMessage }}</div>
                </div>
                <div>
                    <label for="password" class="text-[1.2rem] font-semibold my-2 block">Contraseña:</label>
                    <Input 
                    type="password" 
                    name="password" 
                    id="password"
                    :class="{ 'border-red-500': passwordError }"
                    v-model="fields.password"
                    />
                    <div v-if="passwordError" class="text-red-500 mt-1">{{ passwordErrorMessage }}</div>
                </div>
                <div>
                    <label for="confirmPassword" class="text-[1.2rem] font-semibold my-2 block">Confirmar contraseña:</label>
                    <Input 
                    type="password" 
                    name="confirmPassword" 
                    id="confirmPassword"
                    :class="{ 'border-red-500': confirmPasswordError }"
                    v-model="fields.confirmPassword"
                    />
                    <div v-if="confirmPasswordError" class="text-red-500 mt-1">{{ confirmPasswordErrorMessage }}</div>
                </div>
                <Boton class="w-full">Registrarme</Boton>

                <p class="text-center my-2 text-gray-500">¿Ya tenés una cuenta? <router-link to="/iniciar-sesion" class="underline">Iniciá sesión</router-link></p>

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
import Boton from '../components/Boton.vue'
import Input from '../components/Input.vue'
import { register } from '../services/auth';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import Loader from '../components/Loader.vue';

const { fields, loading, feedback, handleSubmit, emailError, emailErrorMessage, nameError, nameErrorMessage, lastNameError, lastNameErrorMessage, passwordError, passwordErrorMessage, confirmPasswordError, confirmPasswordErrorMessage } = useRegisterForm()

function useRegisterForm() {
    const fields = ref({
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const loading = ref(false)
    const feedback = ref({
        message: '',
        type: 'error'
    })

    const emailError = ref(false);
    const emailErrorMessage = ref('');
    const nameError = ref(false);
    const nameErrorMessage = ref('');
    const lastNameError = ref(false);
    const lastNameErrorMessage = ref('');
    const passwordError = ref(false);
    const passwordErrorMessage = ref('');
    const confirmPasswordError = ref(false);
    const confirmPasswordErrorMessage = ref('');


    const router = useRouter()

    function handleSubmit() {
        loading.value = true
        feedback.value.message = ''
        emailError.value = false
        emailErrorMessage.value = ''
        nameError.value = false
        nameErrorMessage.value = ''
        lastNameError.value = false
        lastNameErrorMessage.value = ''
        passwordError.value = false
        passwordErrorMessage.value = ''
        confirmPasswordError.value = false
        confirmPasswordErrorMessage.value = ''

        if (!fields.value.name) {
            nameError.value = true;
            nameErrorMessage.value = 'Por favor, ingresá tu nombre.';
            loading.value = false;
        }

        if (!fields.value.lastName) {
            lastNameError.value = true;
            lastNameErrorMessage.value = 'Por favor, ingresá tu apellido.';
            loading.value = false;
        }

        if (!fields.value.email) {
            emailError.value = true;
            emailErrorMessage.value = 'Por favor, ingresá tu email.';
            loading.value = false;
        }

        if (!fields.value.password) {
            passwordError.value = true;
            passwordErrorMessage.value = 'Por favor, ingresá una contraseña.';
            loading.value = false;
        }

        if (fields.value.password && fields.value.password.length < 6) {
            passwordError.value = true;
            passwordErrorMessage.value = 'La contraseña debe tener al menos 6 caracteres.';
            loading.value = false;
        }

        if (!fields.value.confirmPassword) {
            confirmPasswordError.value = true;
            confirmPasswordErrorMessage.value = 'Por favor, vuelve a ingresar tu contraseña para confirmarla.';
            loading.value = false;
        }

        if(fields.value.password  && fields.value.confirmPassword){
            if (fields.value.password !== fields.value.confirmPassword) {
                passwordError.value = true;
                passwordErrorMessage.value = 'Las contraseñas no coinciden.';
                confirmPasswordError.value = true;
                confirmPasswordErrorMessage.value = 'Las contraseñas no coinciden.';
                loading.value = false;
            }
        }

        if(nameError.value || lastNameError.value || emailError.value || passwordError.value || confirmPasswordError.value) {
            loading.value = false;
            return
        }

        register({...fields.value})
            .then(user => {
                feedback.value = {
                    message: 'Te registraste con éxito.',
                    type: 'success'
                }
                loading.value = false;
                router.push('/perfil');
            })
            .catch(error => {
                loading.value = false;
                feedback.value = {
                    message: 'Error al registrarte',
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
        nameError,
        nameErrorMessage,
        lastNameError,
        lastNameErrorMessage,
        passwordError,
        passwordErrorMessage,
        confirmPasswordError,
        confirmPasswordErrorMessage
    }

}
</script>