<template>
  <div class="flex flex-col md:flex-row">
    <img class="hidden md:block md:w-[60%]" src="@/shared/assets/login.png" alt="login" />
    <div class="w-full md:w-[40%] p-[16px]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@media (max-width: 767px) {
  .flex {
    flex-direction: column;
  }
}
</style>
