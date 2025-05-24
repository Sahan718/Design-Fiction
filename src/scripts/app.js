"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggle-button");
  const content = document.getElementById("content");

  button.addEventListener("click", () => {
    content.classList.toggle("active");
  });
});
  
  