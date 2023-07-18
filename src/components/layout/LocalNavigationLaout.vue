<template>
  <div>
    <h3>요일별 전체 웹툰</h3>
    <ul>
      <li
        :class="today === day ? 'active' : ''"
        v-for="(day, i) in dayKrArr"
        :key="i"
      >
        {{ day }}요웹툰
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { dayKrArr } from "@/constants/dayArr";
import { ref, onMounted } from "vue";

onMounted(() => {
  getToday();
});

const today = ref("");
function getToday() {
  const date = new Date().getDay();
  today.value = dayKrArr[date];
}
</script>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 20px;
}
h3 {
  font-weight: 700;
  font-size: 20px;
}
ul {
  display: flex;
  width: 830px;
  li {
    width: calc(100% / 7);
    text-align: center;
    font-size: 18px;
    position: relative;
    z-index: 1;
    font-size: 15px;
    padding: 15px 0;
    font-weight: 600;
    &.active {
      background-color: $main-color;
      color: white;
    }
    &:not(:last-child) {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height: 15px;
        color: $gray-color-2;
        z-index: 5;
      }
    }
  }
}
</style>
