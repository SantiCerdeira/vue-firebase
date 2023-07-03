import vue from '@vitejs/plugin-vue'
import '@fortawesome/fontawesome-free/css/all.css' 
import tailwindcss from 'tailwindcss'

export default {
    plugins: [vue(), tailwindcss()],
}