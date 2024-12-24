<template>
  <header
    class="fixed left-0 right-0 top-0 z-10 bg-primary-dark py-10 transition-all duration-300 ease-linear md:py-3 md:opacity-85 md:shadow-2xl"
  >
    <nav class="container relative flex items-center justify-center">
      <img src="@/assets/images/logo2.png" width="200" alt="" />
      <h1 class="sr-only text-primary-light">
        勞資爭議與勞資糾紛 - 勞資我來教你 | 金豐集團
      </h1>
      <div class="hidden md:block">
        <ul class="flex items-center justify-center">
          <li>
            <nuxt-link
              class="px-8 text-[18px] font-bold text-primary-light"
              to="/#activities"
              >現況二手車</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="px-8 text-[18px] font-bold text-primary-light" to="/#faq"
              >我要賣車</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="px-8 text-[18px] font-bold text-primary-light"
              to="/#register"
              >關於我們</nuxt-link
            >
          </li>
          <li>
            <button
              class="cursor-pointer px-8 text-[18px] font-bold text-gray-400"
              @click="openModel"
            >
              隱私政策
            </button>
          </li>
        </ul>
      </div>
      <!-- md -->
      <div class="shadow-xl">
        <button
          :aria-label="navToggle ? '關閉選單' : '開啟選單'"
          class="absolute left-[20px] top-1/2 block -translate-y-1/2 rounded-[10px] border-2 border-black px-2 shadow-xl md:hidden"
        ></button>
      </div>
      <transition name="slide">
        <div
          class="fixed bottom-0 left-0 top-0 w-2/3 transform bg-[#333] p-6 transition-all duration-500 ease-in-out"
          :class="navToggle ? 'translate-x-0' : '-translate-x-full'"
        >
          <p class="mb-[40px] text-center text-primary-light">MENU</p>
          <hr />
          <ul class="flex flex-col items-center justify-center text-primary-light">
            <li class="mb-5 mt-7">
              <a
                class="text-center text-[18px] font-bold text-primary-light md:text-[24px]"
                href="#activities"
                >現況二手車</a
              >
            </li>
            <li class="my-5">
              <a class="text-center text-[18px] font-bold md:text-[24px]" href="#faq"
                >我要賣車</a
              >
            </li>
            <li class="my-5">
              <a
                class="text-center text-[18px] font-bold text-primary-light"
                href="#register"
                >關於我們</a
              >
            </li>
            <li class="my-5">
              <button
                class="cursor-pointer px-8 text-[18px] font-bold text-gray-400"
                @click="openModel"
              >
                隱私政策
              </button>
            </li>
          </ul>
          <button
            aria-label="關閉選單"
            class="absolute right-[20px] top-[20px]"
            @click="navToggle = !navToggle"
          ></button>
        </div>
      </transition>
      <!--  -->
    </nav>
  </header>
</template>

<script setup lang="ts">
const navToggle = ref(false);

const route = useRoute();
const showModel = ref(false);

const openModel = () => {
  showModel.value = true;
};

watch(
  () => route.fullPath,
  () => {
    navToggle.value = false;
  }
);
</script>
