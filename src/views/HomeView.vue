<template>
    <div class="flex flex-col justify-between gap-10 md:flex-row">
        <div class="flex flex-col justify-between">
            <p
                class="font-[700] text-[36px] md:text-[86px] leading-[40px] md:leading-[100px] uppercase w-full md:w-[650px]">
                english for design
            </p>
            <div
                class="font-[700] border-5 border-[#E6007E] rounded-[40px] min-h-[200px] md:min-h-[517px] p-6 mt-[16px] md:mt-[32px]">
                The key to modern and effective learning. Here you get access to unique educational materials adapted
                to your level and goals. The interactive format helps to delve deeper into the topic, and the thoughtful
                design makes learning interesting and accessible.
            </div>
        </div>
        <div
            class="block font-[700] border-5 border-[#E6007E] rounded-[40px] p-6 min-w-[300px] md:min-w-[400px] flex-1 max-h-[775px] max-w-[470px]">
            <img src="/src/assets/logo.svg" class="h-full w-fill">
        </div>
    </div>

    <div class="flex flex-col mt-[20px] md:mt-[40px]">
        <div class="flex flex-col justify-center">
            <p class="uppercase font-[700] text-[36px] md:text-[56px]">why we?</p>
            <span class="font-[700] text-[16px] md:text-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore
                et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </span>
            <div class="flex justify-between mt-[20px] overflow-x-auto p-4 gap-4">
                <div v-for="n in 4" :key="n"
                    class="border-5 border-[#E6007E] font-[700] text-[16px] md:text-[20px] rounded-[40px] h-[150px] md:h-[185px] gap-8 flex-grow-0 p-4">
                    <p class="line-clamp-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>

    </div>

    <div class="mt-[20px]">
        <p class="font-[700] text-[36px] md:text-[56px] uppercase">what we teach?</p>
        <div class="flex flex-wrap bg-[#E6007E] rounded-[40px] h-auto p-[10px]">
            <div v-for="n in 12" :key="n"
                class="flex items-center justify-center bg-[#FFFFFF] rounded-[40px] text-[16px] md:text-[19px] uppercase font-[500] p-4 m-[5px]">
                special vocabulary
            </div>
        </div>

    </div>

    <div class="border-[5px] border-[#E6007E] rounded-[40px] p-[20px] mt-[40px]">
        <p class="font-[700] text-[36px] md:text-[56px] uppercase">cources</p>
        <p class="font-[700] text-[20px] md:text-[32px]">
            the key to modern and effective learning. Here you get access to unique educational materials adapted to
            your
            level and goals. The interactive format helps to delve deeper into the topic, and the thoughtful design
            makes learning interesting and accessible.
        </p>
        <div class="flex justify-end">
            <CommonButton label="More..." class="bg-[#E6007E]" />
        </div>
    </div>
</template>

<script setup lang="ts">
import CommonButton from '@/components/CommonButton.vue';
</script>