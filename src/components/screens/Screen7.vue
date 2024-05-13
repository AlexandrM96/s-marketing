<script setup>
import { onMounted } from "vue";
import { isMobile } from "@/plugins/helpers.js";
import { useGsap } from "@/plugins/scroll-trigger";

const texts = [
  [
    {
      icon: "lipsink",
      title: "Липсинк по тексту и&nbsp;звуковому файлу",
      text: "Генерация синхронного движения губ&nbsp;аватаров по тексту",
      width: 191,
      margin: 86,
    },
    {
      icon: "adapt",
      title: "Адаптация сценариев под бизенс задачи",
      text: "Виртуальный ассистент для любых задач вашего бизнеса",
      width: 221,
      margin: 150,
    },
    {
      icon: "map",
      title: "Доступ в&nbsp;вебе и&nbsp;на экране",
      text: "Доступность в браузере, в интерактивном контенте - делает  технологию уникальной",
      width: 221,
      margin: 0,
    },
  ],
  [
    {
      icon: "avatar",
      title: "Кастомизация аватара",
      text: "Сервис создания уникальных 3D аватаров по одной фотографии ",
      width: 226,
      margin: 77,
    },
    {
      icon: "group",
      title: "Интерактив в&nbsp;real-time",
      text: "Голосовое управление в режиме реального времени для создания естественного диалога на разных языках между пользователем и чат-ботом в виде 3D аватара",
      width: 289,
      margin: 0,
    },
  ],
];
onMounted(() => {
  //fix scene for overlay
  useGsap().to(".screen-7", {
    scrollTrigger: {
      trigger: ".screen-8",
      start: "top bottom",
      end: "top top",
      pin: ".screen-7",
      pinSpacing: false,
    },
  });
  //scroll faces
  [...document.querySelectorAll(".screen-7__face")].forEach((face) => {
    useGsap().to(face, {
      scrollTrigger: {
        trigger: face,
        start: "bottom bottom",
        end: `bottom top`,
        scrub: 1,
      },
      translateY: face.dataset.scroll,
    });
  });

  //text reveal
  [...document.querySelectorAll(".screen-7__text")].forEach((el, index) => {
    useGsap().set(el, { opacity: 0.1 });
    useGsap().to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: `center center`,
        scrub: true,
      },
      opacity: 1,
    });

    useGsap().from(el, {
      scrollTrigger: {
        trigger: el,
        start: "bottom center",
        end: `bottom top`,
        scrub: true,
      },
      opacity: 1,
    });
  });

  useGsap().to(".header", {
    scrollTrigger: {
      trigger: ".screen-7",
      start: "top top+=40px",
      onEnter() {
        document.querySelector(".header").classList.add("header--7");
      },
      onLeaveBack() {
        document.querySelector(".header").classList.remove("header--7");
      },
    },
  });

  //button reveal
  useGsap().to(".header", {
    scrollTrigger: {
      trigger: isMobile() ? ".screen-7__text--1-1" : ".screen-7__text--0-0",
      start: isMobile() ? "bottom top" : "top bottom",
      onEnter() {
        document
          .querySelector(".screen-7__button")
          .classList.add("screen-7__button--visible");
      },
    },
  });

  //glow reveal
  //   big
  useGsap().to(".screen-7__big-glow", {
    scrollTrigger: {
      trigger: ".screen-7__text--0-0",
      start: "center center",
      end: "+=50",
      //   markers: true,
      scrub: 1,
    },
    opacity: 1,
  });

  //small
  useGsap().to(".screen-7__small-glow", {
    scrollTrigger: {
      trigger: "#screen-7-1-trigger",
      start: "top top",
      scrub: 1,
    },
    opacity: 1,
  });

  if (isMobile()) {
    // mobile fixed face hide
    useGsap().to(".screen-7__fixed-face", {
      scrollTrigger: {
        trigger: ".screen-7__text--0-0",
        start: "bottom top",
        end: "+=50%",
      },
      opacity: 0,
    });

    // mobile fixed face show
    useGsap().to(".screen-7__fixed-face", {
      scrollTrigger: {
        trigger: ".screen-7__text--1-1",
        start: "bottom top",
        end: "+=20%",
      },
      opacity: 1,
    });
  }
});

const getScrollDistance = (index) => {
  switch (index) {
    case 1:
      return "-100%";

    case 2:
      return "-150%";

    case 3:
      return "-100%";

    case 4:
      return "-120%";

    case 5:
      return "-200%";

    case 6:
      return "-110%";

    default:
      return "-100%";
  }
};

const updateScrollTrigger = () => {
  ScrollTrigger.refresh();
};
</script>

<template>
  <section class="screen-7 relative z-30 bg-dark overflow-clip">
    <div id="screen-7-1-trigger" class="trigger top-0"></div>
    <div id="screen-7-2-trigger" class="trigger -top-8"></div>
    <div id="screen-7-content" class="relative">
      <div class="screen-7__fixed text-center z-20">
        <img
          class="screen-7__small-glow absolute top-0 left-1/2 -translate-x-1/2 max-w-full z-0 blur-lg"
          src="/img/screen-7/small-glow.png"
          width="1440"
          height="900"
          alt=""
        />
        <img
          class="screen-7__big-glow absolute top-0 h-screen w-full object-cover z-0 blur-lg"
          src="/img/screen-7/big-glow.png"
          width="1020"
          height="363"
          alt=""
        />
        <div class="screen-7__title mb-6 relative z-10">Digital Humans</div>
        <div
          class="screen-7__subtitle text-white opacity-60 mb-11 mobile:hidden relative z-10"
        >
          Метатехнологии для брендов
        </div>
        <img
          src="/img/screen-7/fixed.png"
          srcset="/img/screen-7/fixed@2x.png 2x"
          class="ml-auto mr-auto screen-7__fixed-face relative z-10"
          alt=""
          width="370"
          height="480"
        />
        <a
          href="#"
          class="screen-7__button flex justify-center items-center mt-9"
        >
          <span class="text-light_blue">Попробовать</span>
          <SvgIcon
            class="text-arrow_dark"
            name="arrow"
            width="52"
            height="52"
          ></SvgIcon>
        </a>
      </div>

      <div class="screen-7__faces relative z-30 w-full">
        <div
          v-for="i in 6"
          :key="i"
          class="screen-7__face rounded-2xl absolute"
          :class="`screen-7__face--${i} ${
            [1, 3, 5, 6].includes(i) ? 'screen-7__face--small' : ''
          } ${i === 5 ? 'mobile:hidden' : ''}`"
          :data-scroll="getScrollDistance(i)"
        >
          <img
            :src="`/f/dist/img/screen-7/face${i}.png`"
            :srcset="`/f/dist/img/screen-7/face${i}@2x.png 2x`"
            alt=""
          />
        </div>
      </div>
      <div
        class="screen-7__columns text-white flex mobile:flex-col mobile:items-center mobile:px-4 mobile:text-center justify-center z-30"
      >
        <div v-for="(column, index) in texts" :key="index">
          <div
            v-for="(item, jindex) in column"
            :key="jindex"
            :class="`screen-7__text screen-7__text--${index}-${jindex}`"
            :style="`width:${item.width}px;margin-bottom:${item.margin}px`"
          >
            <SvgIcon
              :name="item.icon"
              width="46"
              height="46"
              class="mb-3"
            ></SvgIcon>
            <div class="mb-3 text-xl" v-html="item.title"></div>
            <div class="text-opacity_gray" v-html="item.text"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="glow absolute glow--top-center flex gap-4"></div>
    <div class="glow absolute glow--bottom-left"></div>
    <div class="glow absolute glow--bottom-right"></div>
  </section>
</template>
<style lang="scss">
#screen-7-content {
  padding-bottom: 26px;
}
.screen-7 {
  @media (max-width: theme("screens.mobile.max")) {
    padding-bottom: 100vh;
  }
  &__big-glow,
  &__small-glow {
    opacity: 0;
    transition: opacity 0.3s ease-out;
    pointer-events: none;
  }
  &__fixed {
    padding-top: 134px;
    padding-bottom: 26px;
    position: sticky;
    position: -webkit-sticky;
    top: 0;

    @media (max-width: theme("screens.mobile.max")) {
      padding-top: 92px;
      padding-bottom: 73px;
    }
  }
  &__faces {
    overflow-x: clip;
  }
  &__title {
    font-weight: 300;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.02em;
    background: linear-gradient(89.11deg, #5270eb 19.87%, #2df6ce 80.47%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    @media (max-width: theme("screens.mobile.max")) {
      font-weight: 300;
      font-size: 31px;
      line-height: 40px;
    }
  }
  &__face {
    z-index: 20;
    width: 205px;
    height: 281px;
    z-index: 2;
    &--small {
      width: 150px;
      height: 206px;
      z-index: 1;
    }
    &--1 {
      bottom: 161px;
      right: calc(50% + 592px);
      @media (max-width: theme("screens.mobile.max")) {
        bottom: -49px;
        right: calc(50% + 41px);
      }
    }
    &--2 {
      bottom: -66px;
      right: calc(50% + 354px);
      @media (max-width: theme("screens.mobile.max")) {
        width: 106px;
        height: 145px;
        right: calc(50% + 125px);
        bottom: 120px;
      }
    }
    &--3 {
      bottom: 161px;
      right: calc(50% + 240px);
      @media (max-width: theme("screens.mobile.max")) {
        width: 70px;
        height: 95px;
        right: calc(50% + 125px);
        bottom: 391px;
      }
    }
    &--4 {
      bottom: 3px;
      left: calc(50% + 430px);
      @media (max-width: theme("screens.mobile.max")) {
        width: 90px;
        height: 122px;
        left: calc(50% + 105px);
        bottom: 40px;
      }
    }
    &--5 {
      bottom: -124px;
      left: calc(50% + 225px);
    }
    &--6 {
      bottom: 128px;
      left: calc(50% + 610px);
      @media (max-width: theme("screens.mobile.max")) {
        width: 160px;
        height: 219px;
        left: calc(50% + 45px);
        bottom: 274px;
      }
    }
  }
  &__fixed-face {
    @media (max-width: theme("screens.mobile.max")) {
      width: 200px;
    }
  }
  &__columns {
    pointer-events: none;
    gap: 540px;
    margin-top: 265px;
    position: relative;
    z-index: 1;
    padding-bottom: 50vh;
    @media (max-width: theme("screens.mobile.max")) {
      margin-top: 100px;
      gap: 32px;
      .icon {
        margin-left: auto;
        margin-right: auto;
      }
    }
    > div + div {
      padding-top: 107px;
      @media (max-width: theme("screens.mobile.max")) {
        margin-top: 32px;
      }
    }
  }
  &__text {
    color: #fff;
    line-height: 139%;
    @media (max-width: theme("screens.mobile.max")) {
      width: 100% !important;
      max-width: 343px;
      .text-xl {
        max-width: 200px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  &__button {
    span {
      width: 0;
      overflow: hidden;
      transition: all 0.4s ease-out;
    }
    .icon {
      transform: scale(0);
      margin-left: 0;
      transition: transform 0.4s 0.4s ease-out, margin-left 0.4s ease-out;
    }
    &--visible {
      span {
        transition: all 0.4s 0.4s ease-out;
        width: 108px;
      }
      .icon {
        transition: transform 0.4s ease-out, margin-left 0.4s 0.4s ease-out;
        transform: scale(1);
        margin-left: 16px;
      }
      &:hover {
        .icon {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
