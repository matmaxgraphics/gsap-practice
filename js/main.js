const timeline = gsap.timeline({ duration: 1, paused: true });

// gsap.to("ul li:last-child", { duration: 0.7, y: 40, ease: "bounce.net", repeat: -1, repeatDelay: 1, yoyo: true });
timeline
  .from("body", { backgroundColor: "#c8e7d4", duration: 1.7, ease: "none" })
  .fromTo(
    ["h1", ".intro"],
    { y: -40, opacity: 0 },
    { y: 0, opacity: 1, ease: "power1.out", stagger: 0.2 },
    "-=1"
  )

  .from(["img, h2"], { ease: "none", opacity: 0 })
  .fromTo(
    "ul li",
    { y: -40, ease: "bounce.net", opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.3 }
  );

const playButton = document.getElementById("btnPlay");
const pauseButton = document.getElementById("btnPause");
const resumeButton = document.getElementById("btnResume");
const reverseButton = document.getElementById("btnReverse");
const speedUpButton = document.getElementById("btnSpeedUp");
const slowDwnButton = document.getElementById("btnSlowDown");
const seekButton = document.getElementById("btnSeek");
const progressButton = document.getElementById("btnProgress");
const restartButton = document.getElementById("btnRestart");


playButton.addEventListener("click", () => {
  timeline.play();
});


pauseButton.addEventListener("click", () => {
  timeline.pause();
});


resumeButton.addEventListener("click", () => {
  timeline.resume();
});


reverseButton.addEventListener("click", () => {
  timeline.reverse();
});


speedUpButton.addEventListener("click", () => {
  timeline.timeScale(2);
});


slowDwnButton.addEventListener("click", () => {
  timeline.timeScale(0.5);
});


seekButton.addEventListener("click", () => {
  timeline.seek(1);
});


progressButton.addEventListener("click", () => {
  timeline.progress(0.5);
});

restartButton.addEventListener("click", () => {
  timeline.restart();
});

