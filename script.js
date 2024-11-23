document.addEventListener("DOMContentLoaded", () => {
  const background = document.querySelector(".background");
  const audio = document.getElementById("background-music");
  const playButton = document.getElementById("play-music");
  const pauseButton = document.getElementById("pause-music");

  // Generate multiple shapes dynamically
  for (let i = 0; i < 20; i++) {
    const shape = document.createElement("div");
    shape.classList.add("shape");

    shape.style.left = `${Math.random() * 100}%`;
    shape.style.top = `${Math.random() * 100}%`;
    shape.style.animationDelay = `${Math.random() * 5}s`;

    background.appendChild(shape);
  }

  // Music controls
  playButton.addEventListener("click", () => {
    audio.play();
  });

  pauseButton.addEventListener("click", () => {
    audio.pause();
  });
});
