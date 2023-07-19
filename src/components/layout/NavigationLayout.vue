<template>
  <ul class="navigation-list">
    <li class="navigation-item" v-for="(day, i) in dayArr" :key="i">
      {{ day }}
    </li>
  </ul>
</template>
<script setup lang="ts">
import { dayKrArr } from "@/constants/dayArr";
import { ref } from "vue";

const dayArr = ref(dayKrArr);

// function getWebtoolUpdateDay(day: number) {}
</script>
<style lang="scss">
.navigation {
  &-list {
    margin: 50px 0;
    display: flex;
    justify-content: center;
    border-top: 1px solid $gray-color-2;
    border-bottom: 1px solid $gray-color-2;
  }

  &-item {
    padding: 20px;
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
