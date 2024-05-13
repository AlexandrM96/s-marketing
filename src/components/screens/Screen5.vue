<script setup>
import { onMounted } from "vue";
import { useGsap } from "@/plugins/scroll-trigger";

onMounted(() => {
  // screen reveal

  useGsap().to("#screen-5-1-trigger", {
    scrollTrigger: {
      trigger: "#screen-5-1-trigger",
      start: "top center",
      onEnter() {
        document.querySelector(".screen-5").classList.add("screen-5--active");
      },
    },
  });

  useGsap().to(".screen-5", {
    scrollTrigger: {
      trigger: ".screen-5",
      start: "top top+=40px",

      onEnter() {
        document.querySelector(".header").classList.add("header--5");
      },
      onLeaveBack() {
        document.querySelector(".header").classList.remove("header--5");
      },
    },
  });
});
</script>

<template>
  <section class="screen-5 relative z-30 h-screen bg-dark overflow-hidden">
    <div id="screen-5-1-trigger" class="trigger toggler--bottom ml-28"></div>
    <div
      id="screen-5-content"
      class="flex flex-col gap-16 justify-center h-full p-2 relative z-10"
    >
      <div class="screen-5__top-line flex gap-4">
        <div v-for="i in 9" :key="i" class="screen-5__logo">
          <img
            :src="`/f/dist/img/screen-5/logo1-${i}.png`"
            :srcset="`/f/dist/img/screen-5/logo1-${i}@2x.png 2x`"
            alt=""
          />
        </div>
      </div>
      <div
        class="screen-5__mid-line text-light_blue flex items-center flex-col"
      >
        <div class="screen-5__text screen-5__text--1">
          <span>Более 23 млрд ₽</span> рекламного бюджета в 2021 году,
        </div>
        <div class="screen-5__text screen-5__text--2">
          <span>более 300 компаний</span> доверяются СберМаркетингу
        </div>
      </div>
      <div class="screen-5__bottom-line flex gap-4">
        <div v-for="i in 9" :key="i" class="screen-5__logo">
          <img
            :src="`/f/dist/img/screen-5/logo2-${i}.png`"
            :srcset="`/f/dist/img/screen-5/logo2-${i}@2x.png 2x`"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="glow absolute glow--top-center flex gap-4"></div>
    <div class="glow absolute glow--bottom-left"></div>
    <div class="glow absolute glow--bottom-right"></div>
  </section>
</template>

<style lang="scss">
.screen-5 {
  &--active {
    .screen-5__top-line,
    .screen-5__bottom-line {
      transform: translateX(0);
    }
  }
  &__logo {
    height: 205px;
    width: 205px;
    border: 1px #0b4e59 solid;
    border-radius: 30px;
    @apply flex items-center justify-center shrink-0;

    @media (max-width: theme("screens.mobile.max")) {
      height: 100px;
      width: 140px;
    }
  }
  &__text {
    font-weight: 300;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    letter-spacing: -0.01em;
    text-align: center;
    @media (max-width: theme("screens.mobile.max")) {
      font-weight: 400;
      font-size: 18px;
      line-height: 120%;
    }
    span {
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
      letter-spacing: -0.01em;
      @media (max-width: theme("screens.mobile.max")) {
        display: block;
        margin-bottom: 12px;
        font-weight: 300;
        font-size: 32px;
        line-height: 100%;
      }
    }
    &--1 {
      clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
      .screen-5--active & {
        animation: clipLeft 1.5s 0.3s linear forwards;
      }
      @keyframes clipLeft {
        to {
          clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        }
      }

      span {
        background: linear-gradient(90deg, #135ab8 0%, #1096b9 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
    &--2 {
      padding-left: 77px;
      margin-top: 32px;
      clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
      @media (max-width: theme("screens.mobile.max")) {
        padding-left: 0;
      }
      .screen-5--active & {
        animation: clipRight 1.5s 0.3s linear forwards;
      }
      @keyframes clipRight {
        to {
          clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        }
      }
      span {
        background: linear-gradient(90deg, #105eb9 0%, #2ed0bb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
  }
  &__top-line,
  &__bottom-line {
    transition: transform 2s ease-out;
    width: fit-content;
  }
  &__top-line {
    transform: translateX(-100%);
  }
  &__bottom-line {
    transform: translateX(100%);
  }
}
</style>
