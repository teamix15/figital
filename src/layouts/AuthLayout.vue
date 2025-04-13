<template>
  <div class="flex flex-col  md:flex-row">
    <img class="hidden xl:flex md:w-[750px] h-full" src="@/shared/assets/login.png" alt="login" />
    <div class="w-full p-[16px]">
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
