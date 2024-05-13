<script setup>
defineProps({
  card: {
    type: Number,
    required: true,
  },
});
const titles = ["Креативное агентство", "СберШоп", "Веб-студия"];
</script>
<template>
  <div class="service-card rounded-3xl overflow-hidden relative">
    <div class="service-card__img">
      <slot></slot>
    </div>
    <div
      class="service-card__title absolute text-center top-16 left-8 right-8 text-white"
    >
      {{ titles[card - 1] }}
    </div>
  </div>
</template>
<style lang="scss">
.service-card {
  clip-path: inset(0 round 24px);
  &__title {
    font-size: 28px;
    line-height: 120%;
    text-align: center;
    letter-spacing: -0.01em;
    @media (max-width: theme("screens.mobile.max")) {
      font-size: 18px;
    }
  }
  &__img {
    aspect-ratio: 245/387;
    width: 100%;
    max-width: 100%;
    @media (max-width: theme("screens.mobile.max")) {
      aspect-ratio: 2/3;
    }
    img,
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
