const height = window.innerHeight;

export const controller = new ScrollMagic.Controller();

export const revealController = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: "onLeave",
    duration: height * 2,
  },
});

export const getScene = (options) => {
  return new ScrollMagic.Scene(options);
};

export const useController = () => controller;
export const useRevealController = () => revealController;
