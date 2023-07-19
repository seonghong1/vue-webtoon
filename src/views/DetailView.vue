<template>
  <div></div>
</template>
<script lang="ts" setup>
import router from "@/router";
import { useWebtoonDataStore } from "@/store/webtoonData";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import type { Webtoon } from "@/type/webtoon.type";

// // const { webtoonArr } = storeToRefs(useWebtoonDataStore);
// let currentWebtoon = ref([] as Webtoon[]);
// const currentTitle = router.currentRoute.value.params.title
// const cuttnetDay = router.currentRoute.value.params.day

// onMounted(() => {

// }),
</script>
<style></style>
