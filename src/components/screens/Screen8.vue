<script setup>
import { onMounted } from "vue";
import { useGsap } from "@/plugins/scroll-trigger";

onMounted(() => {
  useGsap().to(".screen-8", {
    scrollTrigger: {
      trigger: ".screen-8",
      start: "top top+=300px",
      onEnter() {
        document.querySelector(".screen-8").classList.add("screen-8--visible");
      },
    },
  });
  useGsap().to(".screen-8", {
    scrollTrigger: {
      trigger: ".screen-8",
      start: "top top+=40px",
      onEnter() {
        document.querySelector(".header").classList.add("header--8");
      },
      onLeaveBack() {
        document.querySelector(".header").classList.remove("header--8");
      },
    },
  });
});
</script>

<template>
  <section class="screen-8 relative z-30 h-screen bg-dark overflow-hidden">
    <div
      id="screen-8-content"
      class="flex flex-col gap-8 justify-center h-full p-2 relative z-10 items-center text-center"
    >
      <div class="screen-8__title">
        <div class="screen-8__title-1">Партнерства</div>
        <div class="screen-8__title-2">со СберМаркетинг</div>
      </div>
      <div class="text-border_blue screen-8__text">
        <div style="--index: 0">
          Все каналы, любые форматы — от наружной рекламы до
        </div>
        <div style="--index: 1">
          технологичных ивентов. Оставьте заявку, и мы свяжемся
        </div>
        <div style="--index: 2">с вами в течение 24 часов</div>
      </div>
      <div class="btn text-white border-hidden relative">
        <span
          class="absolute inset-0 text-center flex justify-center items-center"
          >Связаться</span
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.screen-8 {
  background: url("/img/screen-8/bg.svg") center bottom / cover;
  &--visible {
    .screen-8 {
      &__title {
        opacity: 1;
        transform: translateY(0);
        &-1 {
          transform: translateY(0);
        }
        &-2 {
          transform: translateY(0);
        }
      }
      &__text {
        transform: translateY(0);
        transition: transform 0.6s 0.3s ease;
        div {
          transition: all 0.3s calc(0.3s + 0.1s * var(--index)) ease;
          opacity: 0.7;
          transform: translateY(0);
        }
      }
    }
    .btn.btn {
      transition: opacity 0.6s 0.6s ease, transform 0.6s 0.6s ease;
      opacity: 1;
      transform: scale(1);
    }
  }

  &__title {
    font-size: 48px;
    transition: all 0.6s ease;
    text-align: center;
    letter-spacing: -0.02em;
    line-height: 130%;
    transform: translateY(34px);
    opacity: 0;
    @media (max-width: theme("screens.mobile.max")) {
      font-size: 31px;
      line-height: 40px;
      height: 80px;
    }
    &-1 {
      transition: transform 0.6s ease;
      font-weight: 300;
      background: linear-gradient(90deg, #5173ea, #42acde);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      transform: translateY(34px);
    }

    &-2 {
      transition: transform 0.6s ease;
      font-weight: 300;
      background: linear-gradient(90deg, #4990e4, #3ebbdb);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      transform: translateY(54px);
    }
  }
  &__text {
    transition: transform 0.6s ease;
    transform: translateY(34px);
    @media (max-width: theme("screens.mobile.max")) {
      font-size: 17px;
      line-height: 26px;
    }
    div {
      transition: all 0.6s ease;
      opacity: 0;
      transform: translateY(calc(5px + 5px * var(--index)));
    }
  }
  .btn {
    background: url("/img/screen-8/button-bg.svg") center / cover !important;
    width: 200px;
    transition: all 0.6s ease;
    opacity: 0;
    transform: scale(0.5);
    span {
      background: transparent;
      border-radius: 50px;
      transition: background 0.3s ease;
    }
    &:hover {
      span {
        background: theme("colors.violet");
      }
    }
  }
}
</style>
