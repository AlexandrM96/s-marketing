<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import Screen1 from "@/components/screens/Screen1.vue";
import Screen2 from "@/components/screens/Screen2.vue";
import Screen3 from "@/components/screens/Screen3.vue";
import Screen4 from "@/components/screens/Screen4.vue";
import Screen5 from "@/components/screens/Screen5.vue";
import Screen6 from "@/components/screens/Screen6.vue";
import Screen7 from "@/components/screens/Screen7.vue";
import Screen8 from "@/components/screens/Screen8.vue";
import Screen9 from "@/components/screens/Screen9.vue";
import { isMobile } from "../plugins/helpers";
const showMenu = ref(false);
let timeout = null;

const reload = () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    window.location.reload();
  }, 200);
};

onMounted(() => {
  if (!isMobile) {
    window.addEventListener("resize", reload);
  }
});
onUnmounted(() => {
  if (!isMobile) {
    window.removeEventListener("resize", reload);
  }
});
</script>

<template>
  <header
    class="header fixed z-20 top-0 left-0 right-0 flex flex-col"
    :class="{ 'header--open-menu h-screen': showMenu, 'h-20': !showMenu }"
  >
    <div
      class="hidden md:flex h-20 items-center justify-between px-10 relative z-10"
    >
      <div class="w-1/3">
        <span
          v-if="!showMenu"
          class="cursor-pointer hover:text-violet transition-colors"
          @click="showMenu = true"
        >
          Меню
        </span>
        <span
          v-else
          class="cursor-pointer hover:text-violet inline-flex gap-2 items-center transition-colors"
          @click="showMenu = false"
        >
          <span class="">Зaкрыть</span>
          <SvgIcon name="close" width="14" height="15"></SvgIcon>
        </span>
      </div>
      <div class="w-1/3 text-center">
        <SvgIcon
          name="logo"
          width="181"
          height="20"
          class="inline header__logo"
        ></SvgIcon>
      </div>
      <div class="w-1/3 text-right"><div class="btn">Связаться</div></div>
    </div>
    <div
      class="flex md:hidden h-12.5 shrink-0 items-center justify-between px-4.5 relative z-10"
    >
      <div>
        <svg
          class="mobile-menu-toggler"
          :class="{ 'mobile-menu-toggler--active': showMenu }"
          @click="showMenu = !showMenu"
          width="33"
          height="22"
          viewBox="0 0 33 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="7" width="33" height="2" fill="currentColor" />
          <rect y="15" width="33" height="2" fill="currentColor" />
        </svg>
      </div>
      <div>
        <SvgIcon
          name="logo"
          width="148"
          height="16"
          class="header__logo"
        ></SvgIcon>
      </div>
      <div>
        <SvgIcon name="bubble" width="30" height="30"></SvgIcon>
      </div>
    </div>
    <HeaderMenu v-if="showMenu"></HeaderMenu>
  </header>

  <main class="bg-dark z-10 mobile:overflow-x-hidden">
    <div class="bg-tint relative z-10">
      <Screen1></Screen1>
      <Screen2></Screen2>
      <Screen3></Screen3>
      <Screen4></Screen4>
      <Screen5></Screen5>
      <Screen6></Screen6>
      <Screen7></Screen7>
      <Screen8></Screen8>
      <Screen9></Screen9>
    </div>
  </main>
</template>

<style lang="scss">
.mobile-menu-toggler {
  rect {
    transition: transform 0.3s ease;
  }
  &--active {
    rect {
      transform: rotate(45deg) translate(4px, -8px) scaleX(0.8);
      + rect {
        transform: rotate(-45deg) translate(-13px, 1px) scaleX(0.8);
      }
    }
  }
}
.header {
  color: #fff;
  transition: all 0.1s 0.1s ease, height 0s 0.1s linear;
  &__logo {
    transition: filter 0s 0.1s ease;
    filter: grayscale(1) brightness(10);
  }
  &--3,
  &--4,
  &--6,
  &--8 {
    color: #000;
    .header__logo {
      filter: grayscale(0) brightness(1);
    }
    .btn {
      border: 1px solid #00000066;
    }
  }
  &--5:not(.header--6),
  &--7:not(.header--8),
  &--9 {
    color: #fff;
    .header__logo {
      filter: grayscale(1) brightness(10);
    }
    .btn {
      border: 1px solid #ffffff66;
    }
  }
  &:after {
    position: absolute;
    content: "";
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(3, 13, 28, 0.7) 17.34%,
      rgba(3, 13, 28, 0) 100%
    );
    transform: scaleY(0);
    opacity: 0;
    z-index: 0;
    pointer-events: none;
    transform-origin: top center;
    transition: all 0.3s ease;
  }
  &--fade {
    &:after {
      transform: scaleY(1);
      opacity: 1;
    }
  }
  &--open-menu {
    color: #222458 !important;
    background: rgba(238, 243, 255, 0.75);
    backdrop-filter: blur(50px);
    transition: background 0.3s ease, filter 0.3s ease, height 0s 0s linear;
    .header__logo {
      filter: grayscale(0) brightness(1) !important;
    }
    .btn {
      border: 1px solid #00000066 !important;
    }
  }
}
.glow {
  position: fixed;
  &--top-center {
    width: 504px;
    height: 504px;
    bottom: 100%;
    left: 50%;
    margin-left: -252px;
    background: linear-gradient(
      149.51deg,
      #222458 0.81%,
      #00adee 32.45%,
      #662895 58.42%
    );
    opacity: 0.5;
    filter: blur(128px);
    border-radius: 252px;
    transform: translateY(-34px) rotate(-43deg);
    animation: glow-top-center 6s infinite ease;
    @media (max-width: theme("screens.mobile.max")) {
      animation: glow-top-center-mobile 6s infinite ease;
      filter: blur(83px);
      width: 247px;
      height: 247px;
      margin-left: -123px;
      transform: translateY(123px) rotate(-43deg);
    }
  }
  &--bottom-left {
    width: 917px;
    height: 891px;
    left: -350px;
    bottom: 0;
    margin-bottom: -475px;
    border-radius: 50%;
    background: linear-gradient(
      43.58deg,
      #004a5e 40.76%,
      rgba(3, 12, 26, 0) 97.59%
    );
    filter: blur(140px);
    animation: glow-bottom-left 6s infinite ease-in-out;

    @media (max-width: theme("screens.mobile.max")) {
      width: 727px;
      height: 707px;
      margin-bottom: -220px;
      left: -386px;
      background: radial-gradient(
        50% 50% at 50% 50%,
        #004a5e 0%,
        rgba(9, 11, 12, 0.03) 100%
      );
      filter: blur(95px);
    }
  }
  &--bottom-right {
    right: 0;
    bottom: 0;
    width: 285px;
    height: 285px;
    filter: blur(128px);
    display: grid;
    grid-template-areas: "a";
    &:before {
      content: "";
      grid-area: a;
      margin: 50% 0 0 50%;
      animation: glow-bottom-right-first-bg 9s infinite ease-out;
      background: linear-gradient(
        44.12deg,
        rgba(255, 255, 255, 0.6) 19.96%,
        rgba(67, 237, 176, 0.6) 68.24%,
        rgba(18, 34, 176, 0.6) 104.79%
      );
    }

    &:after {
      content: "";
      grid-area: a;
      margin: 50% 0 0 50%;
      animation: glow-bottom-right-second-bg 9s infinite ease-out;
      background: linear-gradient(
        30.92deg,
        rgba(238, 243, 255, 0.6) 17.67%,
        rgba(43, 253, 204, 0.6) 39.14%,
        rgba(0, 135, 205, 0.6) 71.61%
      );
    }

    @media (max-width: theme("screens.mobile.max")) {
      width: 427px;
      height: 427px;
      filter: blur(100px);
      border-radius: 157px;
    }
  }
}

@keyframes glow-top-center {
  0%,
  100% {
    transform: translateY(-34px) rotate(-43deg);
  }
  50% {
    transform: translateY(108px) rotate(-43deg);
  }
}

@keyframes glow-top-center-mobile {
  0%,
  100% {
    transform: translateY(123px) rotate(-43deg);
  }
  50% {
    transform: translateY(100px) rotate(-43deg);
  }
}

@keyframes glow-bottom-left {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.26);
  }
}

@keyframes glow-bottom-right-first-bg {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes glow-bottom-right-second-bg {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
