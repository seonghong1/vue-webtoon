<template>
  <div class="gnb">
    <header class="title">
      <h1>NAVER</h1>
      <h2>웹툰</h2>
    </header>
    <form class="search-form">
      <input type="text" placeholder="제목/작가로 검색할 수 있습니다." />
      <font-awesome-icon
        class="search-icon"
        :icon="['fas', 'magnifying-glass']"
      />
    </form>
  </div>
  <NavigationLayout />
</template>

<script setup lang="ts">
import NavigationLayout from "@/components/layout/NavigationLayout.vue";
</script>

<style lang="scss" scoped>
.gnb {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 25px;
    font-weight: 900;
    h1 {
      color: $main-color;
    }
    h2 {
      font-size: 30px;
    }
  }
}

.search {
  &-form {
    position: absolute;
    right: 0;

    input {
      border: 1px solid $gray-color-2;
      color: $gray-color-1;
      padding: 7px;
      font-size: 14px;
      width: 200px;
    }
  }

  &-icon {
    position: absolute;
    right: 5;
    top: 7;
  }
}
</style>
