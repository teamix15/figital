<template>
  <div class="dvh-content flex flex-col md:flex-row">
    <img
      class="hidden xl:flex md:w-[750px] object-cover object-center"
      src="@/shared/assets/login.svg"
      alt="login"
    />
    <div class="w-full p-[16px]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
