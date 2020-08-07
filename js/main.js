var instance = new vidbg('.video', {
    mp4: 'video/world.mp4',
    webm: 'video/world.webm',
    poster: 'video/poster.jpg',
    overlay: false,
  });

var rellax = new Rellax(".rocket", {
  breakpoints: [576, 768, 1201]
});

window.addEventListener("resize", () => {
  if (document.body.clientWidth < 576) {
    rellax.destroy();
  }
  if (document.body.clientWidth >= 576) {
    rellax.refresh();
  }
})

AOS.init();