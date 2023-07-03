<template>
    <input 
        class="border-2 border-gray-300 rounded-md p-2 w-full mb-3"
        :value="modelValue"
        @input="ev => $emit('update:modelValue', ev.target.value)"
    >
</template>

<script setup>
    defineProps(['modelValue'])
    defineEmits(['update:modelValue'])
</script>