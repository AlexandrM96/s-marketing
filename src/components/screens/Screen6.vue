<script setup>
import UiSwitch from "@/components/ui/UiSwitch.vue";
import { onMounted, ref, watch } from "vue";
import { useGsap } from "@/plugins/scroll-trigger";

const allowAnimation = ref(false);
const animationDuration = ref(800);
const animationDelay = ref(0);
const current = ref("blog");

watch(current, (val) => {
  allowAnimation.value = true;
  animationDelay.value = 800;
  setTimeout(() => {
    allowAnimation.value = false;
  }, animationDuration.value);
});

const togglerList = [
  { type: "blog", name: "Блог" },
  { type: "news", name: "Новости" },
];

const blogList = [
  {
    name: "Реклама в банкоматах как перспективный и эффективный DOOH-канал",
    tags: ["Автоматизация", "Тенденции"],
    img: "/f/dist/img/dev/blog1.jpg",
  },
  {
    name: "Специфика маркетинга в сфере недвижимости",
    tags: ["Автоматизация", "Тенденции"],
    img: "/f/dist/img/dev/blog2.jpg",
  },
  {
    name: "NFT: как новая технология может решать задачи маркетинга и за что ее критикуют",
    tags: ["NFT", "Бренды"],
    img: "/f/dist/img/dev/blog3.jpg",
  },
  {
    name: "Автоматизация маркетинга: тенденции и решения",
    tags: ["Автоматизация", "Тенденции"],
    img: "/f/dist/img/dev/blog4.jpg",
  },
  {
    name: "Реклама в банкоматах как перспективный и эффективный DOOH-канал",
    tags: ["Автоматизация", "Тенденции"],
    img: "/f/dist/img/dev/blog1.jpg",
  },
  {
    name: "Специфика маркетинга в сфере недвижимости",
    tags: ["Автоматизация", "Тенденции"],
    img: "/f/dist/img/dev/blog2.jpg",
  },
];

const newsList = [
  {
    name: "Диджитал-панацея: как изменился рынок маркетинга фарминдустрии с пандемией",
    teaser:
      "Пандемия ускорила изменения на многих рынках, особенно это коснулось фарминдустрии",
    tags: ["Новость"],
    date: "5 сентября",
  },
  {
    name: "Состав: Сбер Маркетинг снова превзошли прогнозы рыночных аналитиков",
    teaser:
      "Оборот компании увеличился на 31% относительного этого же квартала годом ранее",
    tags: ["СМИ о нас"],
    date: "23 августа",
  },
  {
    name: "ESG в маркетинге: влияние на бренд, коммуникацию и потребителя​",
    teaser:
      "За последние несколько лет в общество появился активный спрос на экологические инициативы​",
    tags: ["Новость"],
    date: "5 сентября",
  },
  {
    name: "Поддержка, дружба и волшебство — темы рождественских роликов 2021 года​",
    teaser:
      "Рождественские рекламные кампании несут в себе волшебство и затрагивают важные темы​",
    tags: ["Новость"],
    date: "5 сентября",
  },
  {
    name: "Диджитал-панацея: как изменился рынок маркетинга фарминдустрии с пандемией​",
    teaser:
      "Пандемия ускорила изменения на многих рынках, особенно это коснулось фарминдустрии​",
    tags: ["Новость"],
    date: "5 сентября",
  },
  {
    name: "ESG в маркетинге: влияние на бренд, коммуникацию и потребителя​",
    teaser:
      "За последние несколько лет в общество появился активный спрос на экологические инициативы​",
    tags: ["Новость"],
    date: "5 сентября",
  },
];
onMounted(() => {
  // screen underlay
  //   useGsap().to(".screen-6", {
  //     scrollTrigger: {
  //       trigger: ".screen-6",
  //       start: "top top",
  //       end: "+=100%",
  //       //   markers: true,
  //       pin: true,
  //     },
  //   });

  useGsap().to(".screen-6__posts", {
    scrollTrigger: {
      trigger: ".screen-6__posts",
      start: "top bottom",
      onEnter() {
        document
          .querySelector(".screen-6__posts")
          .classList.add("screen-6__posts--visible");
        document
          .querySelector(".screen-6__news")
          .classList.add("screen-6__news--visible");
      },
    },
  });

  useGsap().to(".screen-6__more", {
    scrollTrigger: {
      trigger: ".screen-6__more",
      start: "top bottom",
      onEnter() {
        document
          .querySelector(".screen-6__more")
          .classList.add("screen-6__more--visible");
      },
    },
  });

  useGsap().to(".screen-6", {
    scrollTrigger: {
      trigger: ".screen-6",
      start: "top top+=40px",
      onEnter() {
        document.querySelector(".header").classList.add("header--6");
      },
      onLeaveBack() {
        document.querySelector(".header").classList.remove("header--6");
      },
    },
  });
});
</script>

<template>
  <section
    class="screen-6 relative z-30 h-screen bg-dark overflow-hidden"
    :style="`--hide-animation-duration:${animationDuration}ms;--animation-delay: ${animationDelay}ms`"
  >
    <div id="screen-6-1-trigger" class="trigger toggler--bottom"></div>
    <div id="screen-6-2-trigger" class="trigger -top-8"></div>
    <div
      id="screen-6-content"
      class="flex flex-col gap-16 justify-center h-full p-2 mobile:px-0 relative z-10 items-center"
    >
      <UiSwitch
        :buttons="togglerList"
        :current="current"
        v-model="current"
      ></UiSwitch>
      <div class="container">
        <div class="screen-6__placeholder">
          <div
            class="screen-6__posts flex gap-5"
            :data-active="current === 'blog'"
            :data-allow-animation="allowAnimation"
          >
            <a
              v-for="(post, index) in blogList"
              :key="index"
              href="#"
              class="screen-6__post overflow-hidden rounded-3xl relative flex-shrink-0"
              :style="`--delay: ${index}`"
            >
              <img :src="post.img" alt="" class="w-full" />
              <div
                class="mobile:top-7 top-8 mobile:right-5 right-6 mobile:left-5 left-6 text-P1_20 absolute"
                :class="index % 2 === 0 ? 'text-border_blue' : 'text-white'"
              >
                {{ post.name }}
              </div>
              <div
                class="flex flex-wrap gap-2 absolute bottom-8 left-6 right-6 text-border_blue"
              >
                <div
                  v-for="(tag, jindex) in post.tags"
                  :key="jindex"
                  class="screen-6__tag border border-border_white bg-opacity_gray py-1 px-2 rounded-full"
                >
                  {{ tag }}
                </div>
              </div>
            </a>
          </div>
          <div
            class="screen-6__news flex gap-5"
            :data-active="current === 'news'"
            :data-allow-animation="allowAnimation"
          >
            <a
              v-for="(post, index) in newsList"
              :key="index"
              href="#"
              class="screen-6__post screen-6__post--news flex-col justify-end overflow-hidden rounded-3xl flex-shrink-0 mobile:px-5 mobile:py-5 px-6 py-8 hover:bg-light_blue"
              :style="`--delay: ${index}`"
            >
              <div class="flex flex-wrap gap-2 mb-auto text-border_blue">
                <div
                  v-for="(tag, jindex) in post.tags"
                  :key="jindex"
                  class="screen-6__tag border border-border_white bg-opacity_gray py-1 px-2 rounded-full"
                >
                  {{ tag }}
                </div>
              </div>

              <div
                class="text-P1_20 mb-5 mobile:mb-3 text-border_blue opacity-60 mt-12 mobile:mt-8"
              >
                {{ post.date }}
              </div>
              <div class="text-P1_20 text-border_blue mb-4">
                {{ post.name }}
              </div>
              <div class="text-P3_14 text-border_blue opacity-70 mobile:hidden">
                {{ post.teaser }}
              </div>
            </a>
          </div>
        </div>
        <div class="flex justify-center mt-20 mobile:mt-16">
          <a href="#" class="flex items-center gap-4 screen-6__more">
            <span class="text-border_blue">Перейти в раздел</span>
            <SvgIcon
              class="text-white"
              name="arrow"
              width="52"
              height="52"
            ></SvgIcon>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.screen-6 {
  background: url("/f/dist/img/screen-6/bg.png") center bottom / cover;
  &__post {
    width: 292px;
    pointer-events: none;
    @media (max-width: theme("screens.mobile.max")) {
      width: 250px;
      img {
        height: 100%;
        object-fit: cover;
      }
    }

    &--news {
      background: rgba(255, 255, 255, 0.32);
      backdrop-filter: blur(30px);
      transition: background 0.3s ease, box-shadow 0.3s ease;
      &:hover {
        box-shadow: 0px 26px 48px rgba(34, 36, 88, 0.16);
      }
    }
  }
  &__placeholder {
    display: grid;
    grid-template-areas: "posts";
  }
  &__posts,
  &__news {
    grid-area: posts;
    .screen-6__post {
      opacity: 0;
      transform: translateX(300%);
      animation: none;
    }

    &--visible[data-active="true"] {
      .screen-6__post {
        pointer-events: all;
        animation: postsIn 1s calc(var(--delay) * 0.1s + var(--animation-delay))
          cubic-bezier(0.16, 0.32, 0.53, 1.14) forwards;
      }
    }
    &[data-active="false"] {
      pointer-events: none;
    }
    &[data-active="false"][data-allow-animation="true"] {
      .screen-6__post {
        opacity: 1;
        transform: translateX(0%);
        pointer-events: none;
        animation: postsOut var(--hide-animation-duration)
          calc(var(--delay) * 0.1s) cubic-bezier(0.16, 0.32, 0.53, 1.14)
          forwards;
      }
    }
  }
  @keyframes postsIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes postsOut {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
      opacity: 0;
    }
  }
  &__tag {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    @media (max-width: theme("screens.mobile.max")) {
      font-size: 12px;
    }
  }

  &__more {
    span {
      width: 0;
      overflow: hidden;
      transition: all 0.4s ease-out;
      white-space: nowrap;
    }
    .icon {
      transform: scale(0);
      margin-left: 0;
      transition: transform 0.4s 0.4s ease-out, margin-left 0.4s ease-out;
    }
    &--visible {
      span {
        transition: all 0.4s 0.4s ease-out;
        width: 137px;
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
