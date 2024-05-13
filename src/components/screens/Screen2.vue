<script setup>
import ServiceCard from "@/components/ui/ServiceCard.vue";
import { onMounted } from "vue";
import UiVideo from "../ui/UiVideo.vue";
import { useGsap } from "@/plugins/scroll-trigger";

const getVerticalOffset = (index) => {
  switch (index) {
    case 1:
      return "";
    case 2:
      return "margin-top:170px";
    case 3:
      return "margin-top:16px";
    case 4:
      return "margin-top:144px";
    default:
      return "";
  }
};

onMounted(() => {
  useGsap().to("#screen-2-content", {
    scrollTrigger: {
      trigger: "#screen-2-1-trigger",
      start: "top center",
      end: "+=30%",
      scrub: 0.5,
    },
    scale: 0.7,
  });
  const colScrollTrigger = {
    trigger: "#screen-2-2-trigger",
    start: "top center",
    end: "+=100%",
    // markers: true,
    scrub: 0.5,
  };
  useGsap().to("#screen-2-col-1", {
    scrollTrigger: colScrollTrigger,
    translateY: "-5%",
  });
  useGsap().to("#screen-2-col-2", {
    scrollTrigger: colScrollTrigger,
    translateY: "5%",
  });
  useGsap().to("#screen-2-col-3", {
    scrollTrigger: colScrollTrigger,
    translateY: "-4%",
  });
  useGsap().to("#screen-2-col-4", {
    scrollTrigger: colScrollTrigger,
    translateY: "2%",
  });
});
</script>
<template>
  <section class="screen-2 px-16 relative z-20 hidden tablet:block">
    <div id="screen-2-1-trigger" class="trigger top-1/3"></div>
    <div id="screen-2-2-trigger" class="trigger top-0"></div>

    <div id="screen-2-content" class="grid justify-center gap-4">
      <div
        v-for="i in 4"
        :key="i"
        :id="`screen-2-col-${i}`"
        class="flex flex-col gap-4"
        :style="getVerticalOffset(i)"
      >
        <ServiceCard :card="1" :id="`screen-2-card-${i}-1`">
          <UiVideo
            :src="`/f/dist/img/dev/Video-1-1.mp4`"
            :poster="`/f/dist/img/dev/video-1-poster.jpg`"
          ></UiVideo>
        </ServiceCard>
        <ServiceCard :card="2" :id="`screen-2-card-${i}-2`">
          <UiVideo
            :src="`/f/dist/img/dev/Video-2-1.mp4`"
            :poster="`/f/dist/img/dev/video-2-poster.jpg`"
          ></UiVideo>
        </ServiceCard>
        <ServiceCard :card="3" :id="`screen-2-card-${i}-3`">
          <UiVideo
            :src="`/f/dist/img/dev/Video-3-1.mp4`"
            :poster="`/f/dist/img/dev/video-3-poster.jpg`"
          ></UiVideo>
        </ServiceCard>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
#screen-2-content {
  will-change: transform;
  grid-template-columns: repeat(4, minmax(0, 314px));
  @media (max-width: theme("screens.mobile.max")) {
    grid-template-columns: repeat(4, minmax(0, 200px));
  }
}
</style>
