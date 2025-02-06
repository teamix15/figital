<template>
    <div class="flex flex-col justify-center items-center">
        <div class="flex flex-col justify-between gap-10 md:flex-row">
            <div class="flex flex-col justify-between">
                <p class="font-[700] text-2xl md:text-[86px] leading-[40px] md:leading-[100px] uppercase w-full">
                    english for design
                </p>
                <div
                    class="w-full border-5 border-primary rounded-[40px] h-auto min-h-[200px] md:min-h-[517px] p-6 mt-[16px] md:mt-[32px] whitespace-normal">
                    <p class="font-[700]">
                        The key to modern and effective learning. Here you get access to unique educational materials
                        adapted
                        to your level and goals. The interactive format helps to delve deeper into the topic, and the
                        thoughtful
                        design makes learning interesting and accessible.
                    </p>
                </div>
            </div>
            <div
                class="hidden lg:flex font-[700] border-5 border-primary rounded-[40px] p-6 min-w-[300px] flex-1 max-h-[775px] max-w-[470px]">
                <img src="/src/assets/logo.svg" class="h-full w-full">
            </div>
        </div>

        <div class="flex flex-col mt-[20px] md:mt-[40px]">
            <div class="flex flex-col justify-center">
                <p class="uppercase font-[700] text-[36px] md:text-[56px]">why we?</p>
                <p class="font-[700] text-[16px] md:text-[20px] break-words whitespace-normal">
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
                <div class="flex gap-8 justify-center mt-[20px] p-4 flex-wrap">
                    <div v-for="n in 4" :key="n"
                        class="border-5 border-primary font-[700] text-[16px] max-w-[270px] md:text-[20px] rounded-[40px] h-[270px] md:h-[185px] gap-8 p-4 overflow-hidden">
                        <p class="line-clamp-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                    </div>
                </div>

            </div>

        </div>

        <div class="mt-[20px]">
            <p class="font-[700] text-[36px] md:text-[56px] uppercase">what we teach?</p>
            <div class="flex flex-wrap bg-primary rounded-[40px] h-auto p-[10px]">
                <div v-for="n in 12" :key="n"
                    class="flex items-center justify-center bg-[#FFFFFF] rounded-[40px] text-[16px] md:text-[19px] uppercase font-[500] p-4 m-[5px]">
                    special vocabulary
                </div>
            </div>

        </div>

        <div class="border-[5px] border-primary rounded-[40px] p-[20px] mt-[40px]">
            <p class="font-[700] text-[36px] md:text-[56px] uppercase">cources</p>
            <p class="font-[700] text-[20px] md:text-[32px]">
                the key to modern and effective learning. Here you get access to unique educational materials adapted to
                your
                level and goals. The interactive format helps to delve deeper into the topic, and the thoughtful design
                makes learning interesting and accessible.
            </p>
            <div class="flex justify-end">
                <CommonButton label="More..." class="bg-primary" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CommonButton from '@/components/CommonButton.vue';
</script>