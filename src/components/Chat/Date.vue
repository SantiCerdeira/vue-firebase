<template>
    <template v-if="date">
        <time class="block text-sm text-gray-500" :datetime="date.toISOString()">{{ formatDate(date)}}</time>
    </template>
    <template v-else>
        <span class="block text-sm text-gray-500">Enviando...</span>
    </template>
</template>
 
<script setup>
import {formatDate} from '../../helpers/dates.js'

defineProps({
    date: {
        type: [Date, null],
        required: true,
    }
})

</script>
