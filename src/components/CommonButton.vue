<template>
    <button
        class="flex items-center content-center uppercase h-[54px] border-3 border-primary text-[20px] color-[#111111] rounded-[40px] p-4">
        {{ label }}
    </button>
</template>

<script setup lang="ts">
interface Props {
    label: string;
}

defineProps<Props>()
</script>