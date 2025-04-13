<template>
  <footer class="flex justify-between bg-primary h-[190px]">
    <RouterLink
      class="flex items-center content-center uppercase h-[54px] border-3 border-primary text-[20px] color-[#111111] rounded-[40px] p-4"
      to="/units"
    >
      Units
    </RouterLink>
    <CommonButton label="about us" />
  </footer>
</template>
  
<script setup lang="ts">
import CommonButton from '@/components/CommonButton.vue'
</script>
