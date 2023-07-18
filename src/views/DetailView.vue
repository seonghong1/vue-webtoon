<template>
  <div></div>
</template>
<script lang="ts" setup>
import router from "@/router";

console.log(
  router.currentRoute.value.params.title,
  router.currentRoute.value.params.day
);
</script>
<style></style>
