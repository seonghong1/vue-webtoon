<template>
  <LocalNavigationLaout />
  <WebtoonListUi />
</template>

<script setup lang="ts">
import WebtoonListUi from "@/components/ui/WebtoonListUi.vue";
import LocalNavigationLaout from "@/components/layout/LocalNavigationLaout.vue";
import Axios from "@/axios/index";
import { onMounted } from "vue";
import { dayArr } from "@/constants/dayArr";
import { useWebtoonDataStore } from "@/store/webtoonData";
import type { Webtoon } from "@/type/webtoon.type";

const WebtoonData = useWebtoonDataStore();

onMounted(async () => {
  if (WebtoonData.webtoonArr.length < 1) {
    let currentWebtoonArr: Webtoon[];

    for (let i = 0; dayArr.length > i; i++) {
      currentWebtoonArr = await getWebtoon(dayArr[i]);
      await WebtoonData.setWebtoonArr(currentWebtoonArr);
    }
  }
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
  } catch {
    return [];
  }
}
</script>

<style scoped></style>
