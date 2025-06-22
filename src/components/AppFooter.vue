<template>
  <footer class="footer flex justify-between items-center bg-primary p-[36px] text-white">
    <div class="flex">
      <RouterLink to="/">
        <img src="/logo.svg" class="h-[50px] w-[200px]" />
      </RouterLink>
      <RouterLink
        class="flex items-center content-center uppercase h-[54px] border-3 border-primary text-[20px] color-[#111111] rounded-[40px] p-4"
        to="/units"
      >
        <CommonButton label="Units" />
      </RouterLink>
    </div>

    <div class="flex items-center gap-6">
      <div class="flex flex-col gap-2">
        <a href="tel:+71234567890" class="text-sm flex items-center gap-2 hover:opacity-75 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            />
          </svg>
          +7 (123) 456-78-90
        </a>
        <a href="mailto:info@figital.com" class="text-sm flex items-center gap-2 hover:opacity-75 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          info@figital.com
        </a>
      </div>
      <div class="flex items-center gap-4">
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:opacity-75 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
            />
            <path d="m10 15 5-3-5-3z" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:opacity-75 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
      </div>
    </div>

    <CommonButton label="about us" />
  </footer>
</template>

<script setup lang="ts">
import CommonButton from '@/components/CommonButton.vue'
</script>
