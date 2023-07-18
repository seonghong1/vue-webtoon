<template>
  <div></div>
</template>
<script lang="ts" setup>
import { useWebtoonDataStore } from "@/store/webtoonData";
import { storeToRefs } from "pinia";
const { web } = storeToRefs(useWebtoonDataStore);
</script>
<style></style>
