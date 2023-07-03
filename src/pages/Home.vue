<template>
    <div class="p-2 text-white flex justify-center items-center flex-col bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <section class="flex flex-col w-3/4 mx-auto min-h-[90vh] items-center justify-center"> 
            <h1 class="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold my-5 mx-auto text-center drop-shadow-2xl">Consigue más clientes gracias a la <span class="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600 ">optimización SEO</span></h1>
            <p class="my-2 text-center text-md md:text-lg 2xl:text-xl">¿Buscas mejorar el posicionamiento de tu empresa en los motores de búsqueda? Nuestro servicio de optimización SEO puede ayudarte a lograrlo. Con nuestra experiencia y herramientas especializadas, nos aseguramos de que tu empresa aparezca en los primeros resultados de búsqueda de tus clientes potenciales.</p>
            <template v-if="user.id === undefined || user.id === null">
                <router-link to="/iniciar-sesion" class="w-1/4 p-3 rounded bg-violet-700 font-semibold text-center my-7 mx-auto hover:bg-violet-600 hover:scale-105 focus:scale-105 focus:bg-violet-600 transition duration-300">Ingresar</router-link>
            </template>
            <template v-else>
                <router-link to="/precios" class="w-1/4 p-3 rounded bg-violet-700 font-semibold text-center my-7 mx-auto hover:bg-violet-600 hover:scale-105 focus:scale-105 focus:bg-violet-600 transition duration-300">Contratar</router-link>
            </template>
        </section>
        <section class="min-h-[50vh] mt-5 bg-slate-950 p-[2rem]">
                <div class="flex flex-wrap w-10/12 justify-around mx-auto my-10"> 
                    <div class="w-10/12 lg:w-5/12 flex flex-col justify-center">
                        <h2 class="text-2xl xl:text-3xl font-bold mb-4 drop-shadow-2xl">Servicio de Optimización SEO Personalizado</h2>
                        <p class="mb-4 text-md xl:text-lg">En nuestro servicio de optimización SEO, trabajamos con nuestros clientes para desarrollar una estrategia personalizada que se adapte a las necesidades de su empresa y su público objetivo. Desde la investigación de palabras clave hasta la creación de contenido y la optimización técnica, nuestro equipo de expertos en SEO está comprometido en ayudarte a alcanzar tus objetivos de visibilidad en línea.</p>
                    </div>
                    <div class="w-5/12 flex justify-end items-center">
                        <img src="/assets/dashboard.png" alt="Dashboard" class="rounded border-solid border-2 border-violet-400 xl:ml-10 shadow-lg hover:shadow-2xl transition duration-300 my-7">
                    </div>
                </div>
        </section>
        <section class="min-h-[80vh] mt-5 p-[5rem]">
            <h2 class="text-4xl xl:text-5xl font-bold my-5 mx-auto text-center leading-tight drop-shadow-2xl">¿Qué ofrecemos?</h2>
            <div class="flex flex-wrap gap-10 mx-auto mt-10">
                <Feature>
                    <template v-slot:icon>
                        <i class="fa-solid fa-magnifying-glass fa-2xl"></i>
                    </template>
                    <template v-slot:h4>Análisis de palabras clave</template>
                </Feature>
                <Feature>
                    <template v-slot:icon>
                        <i class="fa-solid fa-folder-open fa-2xl"></i>
                    </template>
                    <template v-slot:h4>Optimización de contenido</template>
                </Feature>
                <Feature>
                    <template v-slot:icon>
                        <i class="fa-sharp fa-solid fa-paperclip fa-2xl"></i>
                    </template>
                    <template v-slot:h4>Construcción de enlaces</template>
                </Feature>
                <Feature>
                    <template v-slot:icon>
                        <i class="fa-solid fa-tag fa-2xl"></i>
                    </template>
                    <template v-slot:h4>Optimización de meta etiquetas</template>
                </Feature>
                <Feature>
                    <template v-slot:icon>
                        <i class="fa-solid fa-money-bill fa-2xl"></i>
                    </template>
                    <template v-slot:h4>Precios accesibles</template>
                </Feature>
                <Feature>
                    <template v-slot:icon>
                        <i class="fa-solid fa-phone fa-2xl"></i>
                    </template>
                    <template v-slot:h4>Atención al cliente</template>
                </Feature>
            </div>
        </section>
        <section class="min-h-[80vh] mt-5 p-[5rem]">
            <h3 class="text-5xl font-bold my-5 mx-auto text-center leading-tight drop-shadow-2xl">Testimonios de nuestros clientes</h3>
            <div class="flex flex-wrap gap-10 mx-auto mt-10">
                <Testimonio>
                    <template v-slot:h4>José Martínez</template>
                    <template v-slot:img>
                        <img src="/assets/testimonio-1.jpeg" alt="José Martínez" class="w-1/4 mx-auto mb-4 rounded-full border-solid border-2 border-violet-400 shadow-lg hover:shadow-2xl transition duration-300">
                    </template>
                    <template v-slot:stars>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                    </template>
                    <template v-slot:p>Gracias a los servicios de SEO de esta empresa, hemos visto un aumento significativo en el tráfico orgánico a nuestro sitio web, lo que ha llevado a un aumento en las conversiones y ventas. Estamos muy contentos con los resultados y continuaremos trabajando con ellos en el futuro</template>
                </Testimonio>
                <Testimonio>
                    <template v-slot:h4>Pedro González</template>
                    <template v-slot:img>
                        <img src="/assets/testimonio-2.jpeg" alt="José Martínez" class="w-1/4 mx-auto mb-4 rounded-full border-solid border-2 border-violet-400 shadow-lg hover:shadow-2xl transition duration-300">
                    </template>
                    <template v-slot:stars>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                    </template>
                    <template v-slot:p>Desde que contraté el servicio SEO de esta empresa, he notado una gran diferencia en mi negocio en línea. Antes, apenas recibía tráfico orgánico, pero ahora mi sitio web está en la primera página de resultados de búsqueda para varias palabras clave importantes. ¡Estoy muy contento con los resultados y definitivamente recomendaría este servicio a otros dueños de negocios en línea!</template>
                </Testimonio>
                <Testimonio>
                    <template v-slot:h4>Marcela Gutierrez</template>
                    <template v-slot:img>
                        <img src="/assets/testimonio-3.jpeg" alt="José Martínez" class="w-1/4 mx-auto mb-4 rounded-full border-solid border-2 border-violet-400 shadow-lg hover:shadow-2xl transition duration-300">
                    </template>
                    <template v-slot:stars>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                    </template>
                    <template v-slot:p>Nunca pensé que la optimización SEO podría tener un impacto tan grande en mi sitio web, pero después de trabajar con este equipo, estoy convencido de que es una necesidad para cualquier negocio en línea. Gracias a su ayuda, mi sitio web ahora está mejor posicionado en los motores de búsqueda y estoy recibiendo más tráfico orgánico que nunca antes. ¡Estoy muy agradecido por su excelente trabajo y profesionalismo!</template>
                </Testimonio>
            </div>
        </section>
    </div>
</template>

<script setup>
import Feature from '../components/Feature.vue'
import Testimonio from '../components/Testimonio.vue'
import useAuth from '../composition/useAuth';

const {user} = useAuth()
</script>