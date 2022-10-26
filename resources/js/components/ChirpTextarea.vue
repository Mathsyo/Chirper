<template>
    <span :class="{'text-red-500': tooMany}">
        {{ count }} / {{ max }}
    </span>
    <textarea
        v-model="text"
        name="message"
        placeholder="What's on your mind?"
        class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
    ></textarea>
</template>

<script setup>
    import { ref, computed, watch } from 'vue';

    const text = ref('');
    const tooMany = ref(false);
    const max = 255;

    const count = computed(() => text.value.length);

    watch(count, (newValue, oldValue) => {
        tooMany.value = newValue > 255;
    });
</script>
