import { ref, onMounted } from 'vue'
import { subscribeToAuth } from '../services/auth.js'

export default function useAuth() {
    const user = ref({
        id: null,
        email: null,
        name: null,
        lastName: null,
        role: null,
    })


    onMounted(() => {
        subscribeToAuth(newUser => {
            user.value = newUser;
        })
    })

    return { user }
}