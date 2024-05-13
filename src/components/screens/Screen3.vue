<script setup>
import { onMounted, ref } from "vue";
import { isMobile } from "@/plugins/helpers.js";
import { useGsap } from "@/plugins/scroll-trigger";
import ScrollTrigger from "gsap/ScrollTrigger";

const pinDistantion = ref(1000);

onMounted(() => {
  const screen_3_titles_distance = isMobile() ? 20 : 160;
  const screen_3_hidden_titles_distance = isMobile() ? -6 : -54;
  const top_card_move = isMobile() ? 34 : 58;
  const mid_card_move = isMobile() ? 43 : 80;
  const bottom_card_move = isMobile() ? 38 : 87;

  // screen reveal
  useGsap().to("#screen-3-content", {
    scrollTrigger: {
      trigger: ".screen-3__titles",
      start: "top bottom",
      end: "+=50%",
      scrub: 1,
    },
    filter: "blur(0px)",
  });

  // title up
  useGsap().to(".screen-3__title--bottom,.screen-3__cards", {
    scrollTrigger: {
      trigger: "#screen-3-2-trigger",
      start: "center center",
      end: "+=25%",
      scrub: 1,
      ease: "power3.easeOut",
    },
    translateY: 0,
  });

  //   pin screen content
  const nextScreen = document.querySelector(".screen-4");
  useGsap().to("#screen-3-content", {
    scrollTrigger: {
      trigger: "#screen-3-4-trigger",
      start: "bottom bottom",
      end: `+=${
        nextScreen.offsetHeight + parseInt(nextScreen.style.marginTop)
      } bottom`,
      pinSpacing: false,
      pin: "#screen-3-content",
    },
  });

  const scrollTrigger1 = {
    trigger: "#screen-3-content",
    start: "bottom bottom",
    end: `+=${pinDistantion.value / 3}`,
    scrub: 1,
  };

  //show hidden
  useGsap().to(".screen-3__hidden-titles", {
    scrollTrigger: scrollTrigger1,
    translateY: screen_3_hidden_titles_distance,
    opacity: "0.6",
    ease: "power3.easeOut",
  });

  //up hidden title
  useGsap().to(".screen-3__hidden-title-2", {
    scrollTrigger: scrollTrigger1,
    translateY: 0,
    ease: "power3.easeOut",
  });

  //titles up more
  useGsap().to(".screen-3__titles", {
    scrollTrigger: scrollTrigger1,
    translateY: `-${screen_3_titles_distance}`,
    ease: "power3.easeOut",
  });

  //turn cards
  useGsap().to(".screen-3__card--top.screen-3__card--left", {
    scrollTrigger: scrollTrigger1,
    translateX: `-${top_card_move}`,
    rotate: -3,
    ease: "power3.easeOut",
  });
  useGsap().to(".screen-3__card--top.screen-3__card--right", {
    scrollTrigger: scrollTrigger1,
    translateX: `${top_card_move}`,
    rotate: 3,
    ease: "power3.easeOut",
  });
  useGsap().to(".screen-3__card--mid.screen-3__card--left", {
    scrollTrigger: scrollTrigger1,
    translateX: `-${mid_card_move}`,
    rotate: -6,
    ease: "power3.easeOut",
  });
  useGsap().to(".screen-3__card--mid.screen-3__card--right", {
    scrollTrigger: scrollTrigger1,
    translateX: `${mid_card_move}`,
    rotate: 6,
    ease: "power3.easeOut",
  });
  useGsap().to(".screen-3__card--bottom.screen-3__card--left", {
    scrollTrigger: scrollTrigger1,
    translateX: `-${bottom_card_move}`,
    rotate: -12,
    ease: "power3.easeOut",
  });

  useGsap().to(".screen-3__card--bottom.screen-3__card--right", {
    scrollTrigger: scrollTrigger1,
    translateX: `${bottom_card_move}`,
    rotate: 12,
    ease: "power3.easeOut",
  });

  //   enlarge bg
  const width = window.innerWidth;
  const height = window.innerHeight;

  const cardBlur = document.querySelector(".screen-3__card-blur");
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      if (entry.borderBoxSize) {
        // Firefox implements `borderBoxSize` as a single content rect, rather than an array
        const borderBoxSize = Array.isArray(entry.borderBoxSize)
          ? entry.borderBoxSize[0]
          : entry.borderBoxSize;

        if (borderBoxSize.blockSize >= height - 40) {
          document.querySelector(".header").classList.add("header--3");
        } else {
          document.querySelector(".header").classList.remove("header--3");
        }
      }
    }
  });

  resizeObserver.observe(cardBlur);

  useGsap().to(cardBlur, {
    scrollTrigger: {
      trigger: "#screen-3-6-trigger",
      start: "bottom bottom",
      end: `+=${(pinDistantion.value / 3) * 2}`,
      scrub: 1,
    },
    width: `${width + 24}px`,
    height: `${height}px`,
    ease: "power3.easeOut",
  });

  const scrollTrigger2 = {
    trigger: "#screen-3-6-trigger",
    start: "center bottom",
    end: `+=${pinDistantion.value / 2}`,
    scrub: 1,
  };

  useGsap().to(".screen-3__card-blur-digit,.screen-3__card-blur-cards", {
    scrollTrigger: scrollTrigger2,
    translateY: height,
    ease: "power3.easeOut",
  });
  useGsap().to(".screen-3__card-blur-title", {
    scrollTrigger: scrollTrigger2,
    translateY: height * 1.1,
    ease: "power3.easeOut",
  });
  useGsap().to(".screen-3__card-blur-helper", {
    scrollTrigger: scrollTrigger2,
    opacity: 1,
    ease: "power3.easeOut",
  });
});
</script>
<template>
  <section class="screen-3 relative z-20">
    <div id="screen-3-1-trigger" class="trigger top-0"></div>
    <div id="screen-3-2-trigger" class="trigger top-0 mt-20"></div>
    <div id="screen-3-3-trigger" class="trigger top-1/2"></div>
    <div id="screen-3-4-trigger" class="trigger trigger--bottom"></div>
    <div
      id="screen-3-5-trigger"
      class="trigger trigger--bottom"
      :style="`margin-top: ${pinDistantion}px`"
    ></div>
    <div id="screen-3-6-trigger" class="trigger trigger--bottom"></div>

    <div
      id="screen-3-content"
      class="h-screen justify-center items-center flex flex-col text-center"
    >
      <div class="screen-3__titles">
        <div class="screen-3__title screen-3__title--top">
          Мы меняем рекламную
        </div>
        <div class="screen-3__title screen-3__title--bottom">индустрию</div>
      </div>
      <div class="screen-3__hidden-titles relative">
        <div
          class="absolute text-center l-1/2 t-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div class="screen-3__hidden-title-1">
            Самый полный комплекс маркетинговых услуг
          </div>
          <div class="screen-3__hidden-title-2">на российском рынке</div>
        </div>
      </div>
      <div class="screen-3__cards absolute bottom-0">
        <div
          class="relative screen-3__card screen-3__card--overlay flex items-end justify-center"
        >
          <div class="screen-3__card-blur rounded-t-3xl relative shrink-0">
            <div
              class="absolute inset-0 screen-3__card-blur-helper rounded-t-3xl"
            ></div>
            <div class="screen-3__card-blur-cards absolute inset-0">
              <div
                class="screen-3__card screen-3__card--top screen-3__card--right"
              >
                <img
                  src="/img/screen-3/top-right.png"
                  srcset="/img/screen-3/top-right@2x.png 2x"
                  alt=""
                />
              </div>
              <div
                class="screen-3__card screen-3__card--top screen-3__card--left"
              >
                <img
                  src="/img/screen-3/top-left.png"
                  srcset="/img/screen-3/top-left@2x.png 2x"
                  alt=""
                />
              </div>
              <div
                class="screen-3__card screen-3__card--mid screen-3__card--right"
              >
                <img
                  src="/img/screen-3/mid-right.png"
                  srcset="/img/screen-3/mid-right@2x.png 2x"
                  alt=""
                />
              </div>
              <div
                class="screen-3__card screen-3__card--mid screen-3__card--left"
              >
                <img
                  src="/img/screen-3/mid-left.png"
                  srcset="/img/screen-3/mid-left@2x.png 2x"
                  alt=""
                />
              </div>
              <div
                class="screen-3__card screen-3__card--bottom screen-3__card--right"
              >
                <img
                  src="/img/screen-3/bottom-right.png"
                  srcset="/img/screen-3/bottom-right@2x.png 2x"
                  alt=""
                />
              </div>
              <div
                class="screen-3__card screen-3__card--bottom screen-3__card--left"
              >
                <img
                  src="/img/screen-3/bottom-left.png"
                  srcset="/img/screen-3/bottom-left@2x.png 2x"
                  alt=""
                />
              </div>
            </div>
            <div class="relative z-10">
              <div class="screen-3__card-blur-digit">12</div>
              <div class="screen-3__card-blur-title">направлений</div>
            </div>
          </div>
        </div>
        <div class="screen-3__card screen-3__card--top screen-3__card--right">
          <img
            src="/img/screen-3/top-right.png"
            srcset="/img/screen-3/top-right@2x.png 2x"
            alt=""
          />
        </div>
        <div class="screen-3__card screen-3__card--top screen-3__card--left">
          <img
            src="/img/screen-3/top-left.png"
            srcset="/img/screen-3/top-left@2x.png 2x"
            alt=""
          />
        </div>
        <div class="screen-3__card screen-3__card--mid screen-3__card--right">
          <img
            src="/img/screen-3/mid-right.png"
            srcset="/img/screen-3/mid-right@2x.png 2x"
            alt=""
          />
        </div>
        <div class="screen-3__card screen-3__card--mid screen-3__card--left">
          <img
            src="/img/screen-3/mid-left.png"
            srcset="/img/screen-3/mid-left@2x.png 2x"
            alt=""
          />
        </div>
        <div
          class="screen-3__card screen-3__card--bottom screen-3__card--right"
        >
          <img
            src="/img/screen-3/bottom-right.png"
            srcset="/img/screen-3/bottom-right@2x.png 2x"
            alt=""
          />
        </div>
        <div class="screen-3__card screen-3__card--bottom screen-3__card--left">
          <img
            src="/img/screen-3/bottom-left.png"
            srcset="/img/screen-3/bottom-left@2x.png 2x"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
#screen-3-content {
  filter: blur(16px);
  will-change: padding;
  overflow: hidden;
  padding-bottom: 355px;
}
.screen-3 {
  &__title {
    font-style: normal;
    font-weight: 300;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.02em;
    @media (max-width: theme("screens.mobile.max")) {
      font-size: 31px;
      line-height: 40px;
      letter-spacing: normal;
    }
    &--top {
      background: linear-gradient(90deg, #5c4bf2 0%, #2df7ce 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    &--bottom {
      background: linear-gradient(90deg, #1c9f87 0%, #2bfdcc 100%);
      transform: translateY(20px);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  &__cards {
    margin-top: 70px;
    transform: translateY(35px);
    height: 355px;
  }
  &__card {
    aspect-ratio: 316/355;
    &-blur {
      color: #2bfdcc;
      text-align: center;
      padding-top: 97px;
      width: 316px;
      height: 355px;
      will-change: width, height;
      box-shadow: 0px 4px 24px 1px rgba(35, 16, 94, 0.25);
      clip-path: inset(0 round 1.5rem 1.5rem 0 0);
      background: url("/img/screen-3/overlay-bg.png") center / cover no-repeat;
      outline: 2px rgba(255, 255, 255, 0.1) solid;
      outline-offset: -2px;
      @media (max-width: theme("screens.mobile.max")) {
        width: 224px;
        height: 302px;
      }

      &-helper {
        opacity: 0;
        background: url("/img/screen-3/full-bg.png") center bottom / cover fixed
            no-repeat,
          #fff;
      }
      &-cards {
        clip-path: inset(-1px);
        .screen-3__card {
          filter: blur(22.5px);
        }
      }

      &-digit {
        font-weight: 300;
        font-size: 147px;
        line-height: 108px;
        letter-spacing: -0.02em;
        margin-bottom: 29px;
        @media (max-width: theme("screens.mobile.max")) {
          font-size: 116px;
          line-height: 86px;
          margin-bottom: 27px;
        }
      }
      &-title {
        font-size: 24px;
        line-height: 120%;
        text-align: center;
        letter-spacing: -0.01em;
        @media (max-width: theme("screens.mobile.max")) {
          font-size: 17px;
        }
      }
    }
    &--overlay {
      z-index: 4;
      height: 355px;
      width: 316px;
    }
    &--left,
    &--right {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 260px;
      margin-left: -130px;
      transform-origin: center bottom;
      display: flex;
      align-items: flex-end;
      @media (max-width: theme("screens.mobile.max")) {
        width: 189px;
        margin-left: -94px;
        height: 278px;
        img {
          height: 100%;
        }
      }
    }
    &--top {
      z-index: 3;
    }
    &--mid {
      z-index: 2;
      @media (max-width: theme("screens.mobile.max")) {
        margin-bottom: -20px;
      }
    }
    &--bottom {
      z-index: 1;
      @media (max-width: theme("screens.mobile.max")) {
        margin-bottom: -40px;
      }
    }
  }
  &__hidden-titles {
    opacity: 0;
    font-size: 24px;
    line-height: 38px;
    text-align: center;
    color: #fff;
    white-space: nowrap;
    transform: translateY(20px);
    @media (max-width: theme("screens.mobile.max")) {
      font-size: 14px;
      line-height: 26px;
    }
  }
  &__hidden-title-2 {
    transform: translateY(10px);
  }
}
</style>
