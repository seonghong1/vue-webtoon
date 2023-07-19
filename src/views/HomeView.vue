<template>
  <LocalNavigationLaout />
  <WebtoonListUi v-if="!isLoading" />
  <p v-else>Loading...</p>
</template>

<script setup lang="ts">
import WebtoonListUi from "@/components/ui/WebtoonListUi.vue";
import LocalNavigationLaout from "@/components/layout/LocalNavigationLaout.vue";
import Axios from "@/axios/index";
import { onMounted, ref } from "vue";
import { dayArr } from "@/constants/dayArr";
import { useWebtoonDataStore } from "@/store/webtoonData";
import type { Webtoon } from "@/type/webtoon.type";

const isLoading = ref(false as boolean);

const WebtoonData = useWebtoonDataStore();

const fetchWebtoon = async () => {
  isLoading.value = true;
  const currentWebtoonArr: Webtoon[][] = [];

  if (WebtoonData.webtoonArr.length < 1) {
    for (let i = 0; dayArr.length > i; i++) {
      const _webtoon = await getWebtoon(dayArr[i]);
      currentWebtoonArr.push(_webtoon);
    }
    console.log(currentWebtoonArr);
    WebtoonData.setWebtoonArr(currentWebtoonArr);
  }

  isLoading.value = false;
};

onMounted(() => {
  fetchWebtoon();
});

async function getWebtoon(day: string): Promise<Webtoon[]> {
  try {
    const response = await Axios.get("/", {
      params: {
        service: "naver",
        perPage: 20,
        updateDay: day,
      },
    });

    return response.data.webtoons;
  } catch (err) {
    return [];
  }
}
</script>

<style scoped></style>
