<script setup>
import { onMounted, ref } from "vue";
import { useGsap } from "@/plugins/scroll-trigger";
const screen1_1_title = ref("Больше, чем маркетинг");
const colors = [
  "#6627FA",
  "#6233F7",
  "#603DF5",
  "#5C4BF2",
  "#5957F0",
  "#5565ED",
  "#536DEB",
  "#4F7BE8",
  "#4C85E6",
  "#4992E3",
  "#43A5DF",
  "#40B1DD",
  "#3DBEDA",
  "#3AC7D8",
  "#37D2D6",
  "#35DBD4",
  "#32E6D1",
  "#2FF2CF",
  "#2FF2CF",
  "#2FF2CF",
  "#2EF3CF",
];

screen1_1_title.value = screen1_1_title.value
  .split("")
  .map((el, index) => {
    return `<span style="--delay:${index * 70}ms;color:${colors[index]}">${el}${
      el === "," ? '<br class="mobile:block hidden">' : ""
    }</span>`;
  })
  .join("");

onMounted(() => {
  useGsap().to("#screen-1-pin", {
    scrollTrigger: {
      trigger: "#screen-1-pin",
      start: "top center",
      end: "bottom top",
      scrub: 0.5,
      //   markers: true,
      pin: true,
    },
    opacity: 0,
    scale: 0.3,
  });
});
</script>
<template>
  <section class="screen-1 relative">
    <div class="screen-1-1 flex flex-col h-screen items-center justify-center">
      <div
        id="screen-1-pin"
        class="screen-1-1__title relative z-10 whitespace-nowrap w-full text-center"
        v-html="screen1_1_title"
      ></div>
    </div>
    <div class="glow glow--top-center overflow-hidden"></div>
    <div class="glow glow--bottom-left overflow-hidden"></div>
    <div class="glow glow--bottom-right overflow-hidden"></div>
  </section>
</template>

<style lang="scss">
.screen-1 {
  &-1 {
    overflow: hidden;

    &__title {
      font-size: 64px;
      line-height: 64px;
      letter-spacing: -0.02em;
      @media (max-width: theme("screens.mobile.max")) {
        font-weight: 300;
        font-size: 31px;
        line-height: 40px;
        letter-spacing: normal;
      }
      span {
        font-weight: 300;
        opacity: 0;
        animation: fadeIn 0.7s var(--delay, 6s) ease-in forwards;
      }
    }
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
