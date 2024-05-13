<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
const props = defineProps({
  src: {
    type: String,
    defaul: "",
  },
  poster: {
    type: String,
    defaul: "",
  },
});

// const options = {
//   autoplay: false,
//   controls: false,
//   loop: true,
//   muted: true,
//   fluid: true,
//   preload: "auto",
//   poster: props.poster,
//   sources: [
//     {
//       src: props.src,
//       type: "video/mp4",
//     },
//   ],
// };

// const videoPlayer = ref();
// onMounted(() => {
//   const req = new XMLHttpRequest();
//   req.open("GET", props.src, true);
//   req.responseType = "blob";

//   req.onload = function () {
//     // Onload is triggered even on 404
//     // so we need to check the status code
//     if (this.status === 200) {
//       const videoBlob = this.response;
//       const vid = URL.createObjectURL(videoBlob); // IE10+
//       // Video is now downloaded
//       // and we can set it as source on the video element
//       videoPlayer.value.muted = true;
//       videoPlayer.value.src = vid;
//       videoPlayer.value.play();
//     }
//   };
//   req.send();
// });
</script>
<template>
  <video
    :src="src"
    ref="videoPlayer"
    :poster="poster"
    type="video/mp4"
    autoplay
    loop
    muted
  ></video>
</template>
<style scoped>
video {
  width: 100%;
  height: 100%;
  transform: translateZ(1px);
}
</style>
