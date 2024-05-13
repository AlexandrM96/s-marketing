<script setup>
import { isMobile } from "@/plugins/helpers.js";
import { ref } from "vue";

const showSubmenu = ref(false);

const submenu = ref([
  "MRM-платформа",
  "Агентство полного цикла",
  "Креативное Агентство",
  "Event",
  "Нейромаркетинг",
  "СберШоп",
  "Креативное продюсирование",
  "Данные",
  "GrowthLab",
  "Веб-продакшен",
  "Аналитика",
  "Инновации",
]);
</script>
<template>
  <div
    class="flex grow text-border_blue header-menu overflow-y-auto mobile:px-5 mobile:py-6 mobile:block"
    v-scroll-lock="true"
  >
    <div
      v-if="isMobile()"
      class="w-full text-P3_14 text-opacity_blue mb-6 flex gap-2.5"
      @click="showSubmenu = false"
    >
      <SvgIcon
        v-if="showSubmenu"
        name="arrow-back"
        width="17"
        height="20"
      ></SvgIcon>
      <div>{{ showSubmenu ? "Направления" : "Меню" }}</div>
    </div>
    <div
      v-if="!isMobile() || !showSubmenu"
      class="w-1/3 mobile:w-full pl-24 mobile:pl-0 pt-8 mobile:pt-0 header-menu__left flex flex-col gap-8 mobile:gap-6"
      :data-hide="!showSubmenu"
    >
      <div><a href="#" @click.prevent="showSubmenu = true">Направления</a></div>
      <div><a href="#">Кейсы</a></div>
      <div><a href="#">Компания</a></div>
      <div><a href="#">Блог</a></div>
      <div><a href="#">Новости</a></div>
      <div><a href="#">Карьера</a></div>
    </div>
    <div
      v-if="!isMobile() || showSubmenu"
      class="w-1/3 mobile:w-auto mobile:mr-11 flex flex-col items-center pt-8 mobile:pt-0 header-menu__center text-P1"
      :data-show="showSubmenu"
    >
      <div class="flex flex-col gap-5 mobile:w-full">
        <div v-for="item in submenu" :key="item">
          <a href="#" target="_blank">{{ item }}</a>
        </div>
      </div>
    </div>
    <div
      v-if="!isMobile() || !showSubmenu"
      class="w-1/3 mobile:w-full flex flex-col justify-end mobile:justify-start pr-16 mobile:pl-0 pb-16 mobile:pb-0 header-menu__right items-end mobile:items-start mobile:mt-20"
    >
      <div>
        <div class="text-P4 mb-3">Связаться с нами</div>
        <a href="tel:+7 (495) 021-21-86" class="block mb-3"
          >+7 (495) 021-21-86</a
        >
        <a href="mailto:hello@sbermarketing.ru" class="block mb-10"
          >hello@sbermarketing.ru</a
        >
        <div class="text-P4 opacity-60 mb-3">Следить за нами</div>
        <div class="flex gap-3">
          <a href="#">Яндекс Дзен</a>
          <a href="#">Телеграм</a>
          <a href="#">Вконтакте</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.header-menu {
  a:hover {
    color: #6624fa;
  }
  &__left {
    a {
      font-weight: 300;
      font-size: 32px;
      line-height: 100%;
      letter-spacing: -1.5px;
    }
  }
}
[data-show="true"] {
  animation: showIn 0.3s ease forwards;
}
[data-hide="true"] {
  animation: showOut 0.3s ease forwards;
}
@keyframes showIn {
  to {
    transform: translateX(24px);
  }
}
@keyframes showOut {
  from {
    transform: translateX(24px);
  }
  to {
    transform: translateX(0);
  }
}
</style>
