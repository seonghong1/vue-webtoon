import { defineStore } from "pinia";
import { Webtoon } from "@/type/webtoon.type";
export const useWebtoonDataStore = defineStore("webtoonData", {
  state: () => {
    return {
      webtoonArr: [] as Webtoon[][],
    };
  },
  actions: {
    setWebtoonArr(webtoonData: Webtoon[]) {
      this.webtoonArr.push(webtoonData);
    },
  },
});
