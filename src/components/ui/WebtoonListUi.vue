<template>
  <div class="webtoon-container">
    <ul
      :class="['day-container', today === String(i) ? 'active' : '']"
      v-for="(item, i) in webtoonArr"
      :key="i"
    >
      <li
        class="item-container"
        v-for="item in webtoonArr[i]"
        :key="item._id"
        @click="moveDetail(item.title, i)"
      >
        <img :src="item.img" alt="" />
        <p class="webtoon-title">{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useWebtoonDataStore } from "@/store/webtoonData";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import router from "@/router";

onMounted(() => {
  getToday();
  console.log(today.value);
});

function moveDetail(title: string, i: number) {
  router.push(`/${title}/${i}`);
}

const today = ref();
function getToday() {
  today.value = String(new Date().getDay());
}
const WebtoonData = useWebtoonDataStore();

const { webtoonArr } = storeToRefs(WebtoonData);
</script>
<style lang="scss">
.webtoon-container {
  display: flex;
  justify-content: center;

  .day-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 10px 4.3px;
    &.active {
      background-color: $main-color-2;
    }
    .item-container {
      cursor: pointer;
      width: 110px;
      height: 185px;
      display: flex;
      flex-direction: column;

      img {
        width: 100%;
        border-radius: 10px;
      }
      p {
        margin-top: 10px;
        text-overflow: ellipsis;
        &.webtoon-title {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
