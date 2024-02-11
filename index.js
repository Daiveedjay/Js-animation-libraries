"use strict";

// index.js
const box = document.querySelector(".box");

// gsap.to(box, {
//   y: 45, // Bounce down by 100 pixels
//   duration: 0.5, // Animation duration
//   ease: "power2.inOut", // Bounce easing
//   yoyo: true, // Bounce back up
//   repeat: -1, // Repeat indefinitely
// });

// anime({
//   targets: box,
//   translateY: 45, // Bounce down by 100 pixels
//   duration: 500, // Animation duration in milliseconds
//   easing: "easeInOutQuad", // Bounce easing
//   direction: "alternate", // Bounce back up
//   loop: true, // Repeat indefinitely
// });

// // index.js
// const box = document.querySelector(".box");

Velocity(
  box,
  {
    bottom: 45,
  },
  {
    duration: 500,
    easing: "easeInOutQuad",
    loop: true,
  }
);

console.log(Velocity);

// function animateElement() {
//   // const element = document.getElementById("greeting");

//   box.velocity({ left: "200px" }, { loop: true });
// }

// // Call the function when the page loads
// document.addEventListener("DOMContentLoaded", animateElement);

// box.addEventListener("click", () => {
//   box.velocity({ left: "200px" }, { loop: true });
// });
