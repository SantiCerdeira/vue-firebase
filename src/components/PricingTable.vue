<template>
    <article class="bg-slate-200 w-10/12 lg:w-5/12 2xl:w-4/12 h-auto mx-auto text-black py-10 text-center flex flex-col justify-start  rounded-lg px-10 border-4 border-solid border-violet-700 shadow-lg my-5">
        <h3 class="text-4xl font-bold mb-4"><slot name="title"></slot></h3>
        <p class="text-5xl font-bold mb-4"><slot name="price"></slot></p>
        <p class="text-lg mb-4"><slot name="description"></slot></p>
        <hr class="w-full mx-auto border-1 border-solid border-gray-700">
        <ul class="text-start px-5 my-7 list-disc">
            <slot name="features"></slot>
        </ul>
        <slot name="button"></slot>
    </article>
</template>

<script setup>

</script>

