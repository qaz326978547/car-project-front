<template>
  <div class="relative flex h-[700px] items-center justify-center">
    <div
      class="bg-banner absolute -z-10 h-full w-full bg-cover bg-bottom opacity-50"
    ></div>
    <div class="container mx-auto">
      <h2 class="pb-[50px] text-center text-4xl font-bold text-primary-light">
        車界典範，盡在中車
      </h2>
      <div
        class="mx-auto flex max-w-[900px] flex-col justify-between rounded-[20px] border-primary bg-primary-light px-3 py-6 md:flex-row"
      >
        <div class="flex w-full flex-wrap justify-between md:flex-nowrap">
          <select name="" id="" class="mx-0 mb-4 w-full md:mx-3 md:mb-0">
            <option value="">車廠</option>
          </select>
          <select name="" id="" class="mx-0 mb-4 w-full md:mx-3 md:mb-0">
            <option value="">車款</option>
          </select>
          <select name="" id="" class="mx-0 mb-4 w-full md:mx-3 md:mb-0">
            <option value="">年份</option>
          </select>
          <select name="" id="" class="mx-0 mb-4 w-full md:mx-3 md:mb-0">
            <option value="">價格</option>
          </select>
        </div>

        <button
          class="flex h-[36px] w-full items-center justify-center rounded-xl bg-primary text-primary-light md:h-[48px] md:w-[48px]"
        >
          <Icon class="h-[20px] w-[20px] p-2" name="material-symbols:search" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const AllCardInfo = ref([
  {
    id: 1,
    brand: "Toyota",
    model: "Vios",
    name: "旗艦版",
    year: "2019",
    price: "300000",
    color: "紅色",
    image: "https://images",
    images: ["https://images", "https://images", "https://images"],
  },
  {
    id: 2,
    brand: "Toyota",
    model: "Vios",
    name: "旗艦版",
    year: "2019",
    price: "300000",
    color: "紅色",
    image: "https://images",
    images: ["https://images", "https://images", "https://images"],
  },
  {
    id: 3,
    brand: "Toyota",
    model: "Vios",
    name: "旗艦版",
    year: "2019",
    price: "300000",
    color: "紅色",
    image: "https://images",
    images: ["https://images", "https://images", "https://images"],
  },
]);
</script>
