<script setup>
import ServiceCard from "@/components/ui/ServiceCard.vue";
import { onMounted, ref } from "vue";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import { isMobile } from "@/plugins/helpers.js";
import UiVideo from "../ui/UiVideo.vue";
// import { videoLoader } from "../../plugins/helpers";
import { useGsap } from "@/plugins/scroll-trigger";

const pinDistantion = ref(1000);

const rotationDegree = isMobile() ? 12 : 15;
const roundSlides = Math.round(360 / rotationDegree);

const currentLogo = ref(null);

const currentSlidesCount = 4;

const lockArrows = ref(false);
const cards = ref();
const titles = ref();

const cardsOptions = {
  rewind: false,
  type: "loop",
  autoWidth: true,
  gap: 0,
  focus: "center",
  drag: false,
  width: isMobile() ? "200px" : "316px",
  height: isMobile() ? "300px" : "500px",
  clones: Math.round((roundSlides - currentSlidesCount) / 2),
  pagination: false,
  arrowPath:
    "M13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289L26.7071 19.2929C27.0976 19.6834 27.0976 20.3166 26.7071 20.7071L14.7071 32.7071C14.3166 33.0976 13.6834 33.0976 13.2929 32.7071C12.9024 32.3166 12.9024 31.6834 13.2929 31.2929L24.5858 20L13.2929 8.70711C12.9024 8.31658 12.9024 7.68342 13.2929 7.29289Z",
};

const slideSpeed = 500;

const titlesOptions = {
  rewind: false,
  type: "fade",
  gap: 0,
  speed: slideSpeed,
  focus: "center",
  drag: false,
  pagination: false,
  arrows: false,
};

const currentAngle = ref(0);
const rotateSlider = (direction) => {
  lockArrows.value = true;

  setTimeout(() => {
    lockArrows.value = false;
  }, slideSpeed);

  if (direction === ">") {
    currentAngle.value += rotationDegree;
  } else {
    currentAngle.value -= rotationDegree;
  }
};

const initAngle = () => {
  [...document.querySelectorAll(".splide__slide")].forEach((el, index) => {
    el.style.setProperty("--index", index);
  });
  [
    ...document.querySelectorAll(
      "#screen-4-content .splide__slide--clone video"
    ),
  ].forEach(async (el) => {
    el.muted = true;
    el.play();
  });
};

onMounted(() => {
  // bind slides
  const thumbsSplide = titles.value?.splide;
  if (thumbsSplide) {
    cards.value?.sync(thumbsSplide);
  }
  // screen reveal
  useGsap().to(".screen-4__slider-wrapper", {
    scrollTrigger: {
      trigger: "#screen-4-1-trigger",
      start: "top bottom",
      end: `+=80%`,
      scrub: 1,
    },
    scale: 1,
    filter: "opacity(1)",
    webkitFilter: "opacity(1)",
  });

  //fade show
  useGsap().to(".screen-4__fade", {
    scrollTrigger: {
      trigger: ".screen-4__slider",
      start: "80% top",
      onEnter() {
        document
          .querySelector(".screen-4__fade")
          .classList.add("screen-4__fade--visible");
      },
      onEnterBack() {
        document
          .querySelector(".screen-4__fade")
          .classList.remove("screen-4__fade--visible");
      },
    },
  });

  // big text reveal
  useGsap().to(".screen-4__big-text", {
    scrollTrigger: {
      trigger: ".screen-4__big-text",
      start: "top center",
      onEnter() {
        document
          .querySelector(".screen-4__big-text")
          .classList.add("screen-4__big-text--visible");
      },
    },
  });

  // table reveal
  useGsap().to(".screen-4__table", {
    scrollTrigger: {
      trigger: ".screen-4__big-text",
      start: "center center",
      onEnter() {
        document
          .querySelector(".screen-4__table")
          .classList.add("screen-4__table--visible");
      },
    },
  });
});
</script>

<template>
  <section
    class="screen-4 relative z-30"
    :style="`margin-top:${pinDistantion / 3}px`"
  >
    <div class="screen-4__fade fixed top-0 left-0 right-0 z-10"></div>
    <div id="screen-4-1-trigger" class="trigger"></div>
    <div id="screen-4-3-trigger" class="trigger top-px"></div>
    <div id="screen-4-2-trigger" class="trigger top-0 -mt-7"></div>
    <div id="screen-4-content" class="overflow-hidden">
      <div class="screen-4__slider-wrapper">
        <div
          class="screen-4__slider"
          :class="{ 'screen-4__slider--disabled': lockArrows }"
          :style="`--angle:${currentAngle}deg;--rotation-degree:${rotationDegree}deg`"
        >
          <Splide
            ref="cards"
            :has-track="false"
            :options="cardsOptions"
            @splide:mounted="initAngle"
          >
            <SplideTrack>
              <SplideSlide>
                <ServiceCard :card="1" :id="`screen-4-card-1`">
                  <UiVideo
                    :src="`/f/dist/img/dev/Video-1-1.mp4`"
                    :poster="`/f/dist/img/dev/video-1-poster.jpg`"
                  ></UiVideo>
                  <a
                    href="#"
                    class="card-arrow rounded-full absolute bottom-6 left-1/2 -translate-x-1/2 hover:scale-110"
                  >
                    <SvgIcon
                      name="arrow"
                      :width="isMobile() ? '40' : '64'"
                      :height="isMobile() ? '40' : '64'"
                      class=""
                    ></SvgIcon>
                  </a>
                </ServiceCard>
              </SplideSlide>
              <SplideSlide>
                <ServiceCard :card="2" :id="`screen-4-card-2`">
                  <UiVideo
                    :src="`/f/dist/img/dev/Video-1-1.mp4`"
                    :poster="`/f/dist/img/dev/video-1-poster.jpg`"
                  ></UiVideo>
                  <a
                    href="#"
                    class="card-arrow rounded-full absolute bottom-6 left-1/2 -translate-x-1/2 hover:scale-110"
                  >
                    <SvgIcon
                      name="arrow"
                      :width="isMobile() ? '40' : '64'"
                      :height="isMobile() ? '40' : '64'"
                      class=""
                    ></SvgIcon>
                  </a>
                </ServiceCard>
              </SplideSlide>
              <SplideSlide>
                <ServiceCard :card="3" :id="`screen-4-card-3`">
                  <UiVideo
                    :src="`/f/dist/img/dev/Video-3-1.mp4`"
                    :poster="`/f/dist/img/dev/video-3-poster.jpg`"
                  ></UiVideo>
                  <a
                    href="#"
                    class="card-arrow rounded-full absolute bottom-6 left-1/2 -translate-x-1/2 hover:scale-110"
                  >
                    <SvgIcon
                      name="arrow"
                      :width="isMobile() ? '40' : '64'"
                      :height="isMobile() ? '40' : '64'"
                      class=""
                    ></SvgIcon>
                  </a>
                </ServiceCard>
              </SplideSlide>
              <SplideSlide>
                <ServiceCard :card="4" :id="`screen-4-card-4`">
                  <img
                    src="/img/dev/service-4.png"
                    srcset="/img/dev/service-4@2x.png 2x"
                    alt=""
                  />
                  <a
                    href="#"
                    class="card-arrow rounded-full absolute bottom-6 left-1/2 -translate-x-1/2 hover:scale-110"
                  >
                    <SvgIcon
                      name="arrow"
                      :width="isMobile() ? '40' : '64'"
                      :height="isMobile() ? '40' : '64'"
                      class=""
                    ></SvgIcon>
                  </a>
                </ServiceCard>
              </SplideSlide>
            </SplideTrack>
            <div class="splide__arrows">
              <button
                class="splide__arrow splide__arrow--prev"
                type="button"
                @click="rotateSlider('<')"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 8L26 20L14 32"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />
                </svg></button
              ><button
                class="splide__arrow splide__arrow--next"
                type="button"
                @click="rotateSlider('>')"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 8L26 20L14 32"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />
                </svg>
              </button>
            </div>
          </Splide>
        </div>
      </div>
      <div class="screen-4__small-text text-center text-border_blue">
        <Splide ref="titles" :options="titlesOptions">
          <SplideSlide class="screen-4__title-slide">
            Разработка стратегии, рекламных идей,<br />
            креативных рамок, слоганов.<br />
            Кейвижуалы.
          </SplideSlide>
          <SplideSlide class="screen-4__title-slide">
            Внедряем технологические AdTech/MarTech<br />
            инструменты и платформы
          </SplideSlide>
          <SplideSlide class="screen-4__title-slide">
            Разработка стратегии, рекламных идей,<br />
            креативных рамок, слоганов.<br />
            Кейвижуалы.
          </SplideSlide>
          <SplideSlide class="screen-4__title-slide">
            Внедряем технологические AdTech/MarTech<br />
            инструменты и платформы
          </SplideSlide>
        </Splide>
      </div>
      <div class="screen-4__big-text">
        <div style="--delay: 0">
          За <span class="screen-4__big-text-fir">7 лет работы</span> мы собрали
          <span class="screen-4__big-text-sec">300 клиентов</span>
        </div>
        <div style="--delay: 1">из разных индустрий и увеличили штат</div>
        <div style="--delay: 2">
          до <span class="screen-4__big-text-thi">615 сотрудников</span>. Оборот
          рекламного
        </div>
        <div style="--delay: 3">
          бюджета за 2021 год составил
          <span class="screen-4__big-text-fou">23 млрд ₽</span>
        </div>
      </div>
      <div class="screen-4__table border-t border-border_blue pt-2.5">
        <div
          @mouseenter="currentLogo = 0"
          @mouseleave="currentLogo = null"
          class="screen-4__table-row relative"
        >
          <div>1-е место</div>
          <div>Рейтинг креативности АКАР 2022</div>
          <div v-if="!isMobile()" class="screen-4__table-logo absolute z-10">
            <img
              src="/img/screen-4/screen-4-logo.png"
              srcset="/img/screen-4/screen-4-logo@2x.png 2x"
              alt=""
            />
          </div>
        </div>
        <div class="screen-4__table-row relative">
          <div>1-е место</div>
          <div>
            Рейтинга лучших работодателей hh.ru<br />в категории «Маркетинг и
            реклама»
          </div>
        </div>
        <div class="screen-4__table-row relative">
          <div>«Серебряный дельфин»</div>
          <div>Cannes Corporate Media & TV Awards</div>
        </div>
        <div class="screen-4__table-row relative">
          <div>5-е место</div>
          <div>
            Рейтинга российских медиаагентств<br />
            и холдингов АКАР и Sostav 2022
          </div>
        </div>
        <div class="screen-4__table-row relative">
          <div>9,1 из 10</div>
          <div>Оценки клиентов по итогам 2021 года</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.card-arrow {
  background: rgba(238, 243, 255, 0.1);
  backdrop-filter: blur(20px);
  color: #fff;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(238, 243, 255, 1);
  }
}
.screen-4 {
  padding-bottom: 96px;
  &__fade {
    opacity: 0;
    height: 144px;
    transform: translateY(-100%);
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.88) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    transition: all 0.3s ease-out;
    &--visible {
      opacity: 1;
      transform: translateY(0);
    }
  }
  &__slider {
    &-wrapper {
      transform: scale(0.63);
      filter: opacity(0.3);
      -webkit-filter: opacity(0.3);
      transform-origin: center top;
    }

    &--disabled {
      .splide__arrows {
        pointer-events: none;
      }
    }

    .splide {
      margin: 0 auto;
      &__arrows {
        position: absolute;
        z-index: 1;
        top: 50%;
        width: 100%;
      }
      &__arrow {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-content: center;
        opacity: 1;
        &--prev {
          background: #fff;
          left: -110px;
          color: theme("colors.arrow_dark");
          svg {
            margin-left: -2px;
          }
        }
        &--next {
          background: theme("colors.arrow_dark");
          right: -110px;
          color: #fff;
          svg {
            margin-right: -2px;
          }
        }
        svg {
          width: 40px;
          height: 40px;
        }
      }
      &__list {
        display: grid;
        grid-template-areas: "slide";
        transform: none !important;
      }
      &__track {
        z-index: 2;
        overflow: visible;
        transition: transform 1s ease-in-out;
        transform: rotate(var(--angle));
        transform-origin: 50% 1983px;
        @media (max-width: theme("screens.mobile.max")) {
          transform-origin: 50% 1288px;
        }
      }
      &__slide {
        grid-area: slide;
        transform-origin: 50% 1983px;
        @media (max-width: theme("screens.mobile.max")) {
          transform-origin: 50% 1288px;
        }
        transform: rotate(calc(var(--rotation-degree) * var(--index)));
      }
    }
  }
  &__small-text {
    margin-top: 40px;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.01em;
    @media (max-width: theme("screens.mobile.max")) {
      margin-top: 56px;
    }
    .splide__track {
      overflow: visible;
      height: 96px;
    }
    .splide__list {
      display: grid;
      grid-template-areas: "slide";
    }
  }
  &__title-slide {
    grid-area: slide;
    transition: all 800ms ease-in !important;
    line-height: 32px;
    animation: slideout 800ms ease-in;
    @media (max-width: theme("screens.mobile.max")) {
      font-size: 17px;
    }
    &.is-active {
      animation: slidein 800ms ease-in forwards;
    }
    @keyframes slidein {
      from {
        transform: translateY(20%);
        line-height: 32px;
        opacity: 0;
      }
      to {
        line-height: 26px;
        transform: translateY(0);
        opacity: 1;
      }
    }
    @keyframes slideout {
      from {
        line-height: 26px;
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(-30%);
        line-height: 32px;
        opacity: 0;
      }
    }
  }
  &__table {
    font-size: 20px;
    line-height: 28px;
    text-align: right;
    letter-spacing: -0.02em;
    max-width: 870px;
    width: 100%;
    margin: 177px auto 0;
    transform: translateY(40px);
    transition: all 0.6s ease-out;
    opacity: 0;
    color: theme("colors.border_blue");
    @media (max-width: theme("screens.mobile.max")) {
      margin-top: 100px;
      padding-left: 18px;
      padding-right: 18px;
      font-size: 16px;
      line-height: 130%;
      border-top: 0;
      text-align: left;
    }
    &--visible {
      transform: translateY(0);
      opacity: 1;
    }
    &-row {
      @apply flex justify-between items-center mb-3 border-b border-border_opacity_blue mobile:flex-col mobile:items-start mobile:mb-8;
      min-height: 72px;
      &:hover {
        .screen-4__table-logo {
          opacity: 1;
          transform: scale(1);
        }
      }
      div {
        @apply pb-4;
        @media (max-width: theme("screens.mobile.max")) {
          padding-bottom: 22px;
        }
      }
      @media (max-width: theme("screens.mobile.max")) {
        div:first-child {
          font-weight: 600;
          font-size: 24px;
          line-height: 140%;
          padding-bottom: 8px;
        }
      }
    }
    &-logo {
      top: -148px;
      left: 31.7%;
      opacity: 0;
      transform: scale(0.2);
      transition: all 0.6s ease-out;
    }
  }
  &__big-text {
    color: #222458;
    font-size: 48px;
    line-height: 64px;
    text-align: center;
    letter-spacing: -0.02em;
    margin-top: 139px;
    @media (max-width: theme("screens.mobile.max")) {
      margin-top: 93px;
      font-size: 31px;
      line-height: 40px;
      padding: 0 18px;
    }
    > div {
      opacity: 0;
      transform: translateY(calc(20px * var(--delay)));
      transition: all 0.6s calc(100ms * var(--delay)) ease-out;
    }
    &--visible {
      > div {
        opacity: 1;
        transform: translateY(0);
      }
    }
    &-fir {
      background: linear-gradient(90deg, #1c4eb7 0%, #0d63b9 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    &-sec {
      background: linear-gradient(90deg, #129db9 0%, #54d9c8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    &-thi {
      background: linear-gradient(90deg, #472d99 0%, #1b50b8 100%);

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    &-fou {
      background: linear-gradient(90deg, #076bba 0%, #13a1b9 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
}
</style>
