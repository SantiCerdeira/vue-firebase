<template>
    <article class="bg-slate-200 w-10/12 lg:w-5/12 2xl:w-1/4 h-auto mx-auto text-black py-10 text-center flex flex-col justify-center rounded-lg">
        <h4 class="text-lg font-bold mb-4"><slot name="h4"></slot></h4>
        <slot name="img"></slot>
        <div class="mb-4">
            <slot name="stars"></slot>
        </div>
        <p class=" border-solid border-2 border-violet-400 rounded-lg w-10/12 p-3 mx-auto "><slot name="p"></slot></p>
    </article>
</template>

<script setup>

</script>
