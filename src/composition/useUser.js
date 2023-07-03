import { ref } from "vue";
import { getUserById } from "../services/users";


function useUser(id){       
    const user = ref({
        id: '',
        email: '',
        name: '',
        lastName: '',
    })
    const loading = ref(true)
    getUserById(id)
        .then(userData => {
            loading.value = false
            user.value = userData
        })
        .catch(error => {
            console.log(error)
        })
        
    return {
        user,
        loading,
    }
}

export default useUser