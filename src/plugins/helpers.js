export const isMobile = () => {
  return window.innerWidth <= 460;
};

export const useIsMobile = () => isMobile;

export const videoLoader = (src) => {
  const req = new XMLHttpRequest();

  const res = new Promise(function (resolve) {
    req.open("GET", src, true);
    req.responseType = "blob";

    req.onload = function () {
      // Onload is triggered even on 404
      // so we need to check the status code
      if (this.status === 200) {
        const videoBlob = this.response;
        const vid = URL.createObjectURL(videoBlob); // IE10+
        // Video is now downloaded
        // and we can set it as source on the video element
        resolve(vid);
      }
    };
    req.send();
  });

  return res;
};
