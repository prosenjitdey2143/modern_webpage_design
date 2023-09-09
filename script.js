//nav animation
gsap.from(".ri-arrow-left-line", {
  x: 100,
  duration: 2,
});
gsap.from(".nav-right", {
  x: -100,
  duration: 2,
});
gsap.from(".content-text", {
  scale:1.5,
  duration:3,
  opacity:0
});
//timeline
var tl=gsap.timeline();
tl.from(".navbar", {
  opacity: 0.8,
  duration: 1,
})
  .from(".upper-left", {
    x: "-100%",
    duration: 1.5,
  })
  .from(".upper-right", {
    y: "-100%",
    duration: 1.5,
  })
  .from(".lower-content", {
    x: "100%",
    duration: 1.5,
  })
  .from(".arrow", {
    scale: 0,
    opacity: 0,
  })
  .to(".ri-arrow-left-line",{
    x:"-10",
    yoyo:"true",
    repeat:"-1",
    deley:2
  });