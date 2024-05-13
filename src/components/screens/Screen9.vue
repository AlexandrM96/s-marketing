<script setup>
import { onMounted } from "vue";
import { useGsap } from "@/plugins/scroll-trigger";

onMounted(() => {
  useGsap().to(".screen-9", {
    scrollTrigger: {
      trigger: ".screen-9",
      start: "top top+=40px",
      onEnter() {
        document.querySelector(".header").classList.add("header--9");
      },
      onLeaveBack() {
        document.querySelector(".header").classList.remove("header--9");
      },
    },
  });
  useGsap().to(".screen-9", {
    scrollTrigger: {
      trigger: ".screen-9",
      start: "top top",
      onEnter() {
        document.querySelector(".header").classList.add("header--fade");
      },
      onLeaveBack() {
        document.querySelector(".header").classList.remove("header--fade");
      },
    },
  });
});
</script>

<template>
  <section class="screen-9 relative z-30 bg-dark overflow-hidden">
    <div
      id="screen-9-content"
      class="flex flex-col gap-9 mobile:gap-0 justify-center relative items-center text-center pb-12 pt-32 mobile:pt-20"
    >
      <div class="text-H3_36 text-light_blue mb-9 mobile:mb-8">
        12 направлений
      </div>
      <div class="flex gap-8 text-opacity_gray text-P1_20 mb-16 mobile:mb-14">
        <div class="text-right flex flex-col gap-6 mobile:gap-5">
          <div>МРМ</div>
          <div>GrowthLab</div>
          <div>Веб-студия</div>
          <div>Нейромаркетинг</div>
          <div>Креативное агентство</div>
          <div>Инновации</div>
        </div>
        <div class="flex flex-col gap-6 text-left mobile:gap-5">
          <div>Данные</div>
          <div>Агентство</div>
          <div>Кинопродакшн</div>
          <div>Ивент-лаборатория</div>
          <div>Блогерское агентство</div>
          <div>СберШоп</div>
        </div>
      </div>
      <a
        href="mailto:hello@sbermarketing.ru"
        class="text-H3_36 text-light_blue mb-3 mobile:mb-14"
        >hello@sbermarketing.ru</a
      >
      <div class="text-opacity_gray text-P1_20 mb-11 mobile:mb-8">
        <div class="mb-3 mobile:mb-4">
          <a href="tel:+7 (495) 021-21-86">+7 (495) 021-21-86</a>
        </div>

        <div>Москва, Поклонная улица, д.3, к.4</div>
      </div>
      <div
        class="flex flex-col justify-center gap-4 text-p2_17 text-light_blue mb-28 mobile:mb-10"
      >
        <a href="#">Яндекс Дзен</a>
        <a href="https://t.me/sbermarketing" target="_blank">Телеграм</a>
        <a href="#">Вконтакте</a>
      </div>
      <div class="text-p2_17 text-opacity_gray">© 2022 СберМаркетинг</div>
    </div>
  </section>
</template>

<style lang="scss">
.screen-9 {
  background: url("/img/screen-9/bg.png") center bottom / cover fixed;
  a {
    transition: color 0.3s ease;
  }
  a:hover {
    color: theme("colors.violet");
  }
}
</style>
