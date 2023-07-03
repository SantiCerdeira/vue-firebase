<template>
    <article class="bg-slate-200 w-10/12 md:w-5/12 xl:w-1/4 h-auto mx-auto text-black py-10 text-center flex flex-col justify-center rounded-lg hover:bg-slate-200 transition duration-500 px-4 hover:text-violet-700">
        <div class="mb-5 text-3xl">
            <slot name="icon"></slot>
        </div>
        <h4 class="text-xl font-bold"><slot name="h4"></slot></h4>
    </article>
</template>

<script setup>

</script>
