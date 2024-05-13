<script setup>
import { computed } from "vue";
const props = defineProps({
  buttons: {
    type: Array,
    required: true,
  },
  current: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const currentIndex = computed(() => {
  const index = props.buttons.findIndex((el) => {
    return el.type === props.current;
  });
  return index;
});
</script>
<template>
  <div
    class="ui-toggler rounded-full text-border_blue flex"
    :data-current="currentIndex"
  >
    <div
      v-for="button in buttons"
      :key="button.type"
      class="ui-toggler__button h-12 flex justify-center items-center cursor-pointer hover:text-black"
      @click="emit('update:modelValue', button.type)"
    >
      {{ button.name }}
    </div>
  </div>
</template>
<style lang="scss">
.ui-toggler {
  background: rgba(238, 243, 255, 0.5);
  padding: 3px;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.5px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 3px;
    bottom: 3px;
    border-radius: 24px;
    background: #fff;
    box-shadow: 0px 2px 4px rgba(65, 49, 157, 0.05),
      0px 8px 24px rgba(65, 49, 157, 0.05);
    transition: all 1.2s cubic-bezier(0.6, 0, 0.38, 1);
  }
  &[data-current="0"]:before {
    left: 3px;
    right: 50%;
  }
  &[data-current="1"]:before {
    left: 50%;
    right: 3px;
  }
  &__button {
    width: 154px;
    position: relative;
    z-index: 1;
  }
}
</style>
