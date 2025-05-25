"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const chapters = document.querySelectorAll('[class^="Chapter"]:not(.Chapter-details)');

  chapters.forEach(chapter => {
    const nextElement = chapter.nextElementSibling;

    if (nextElement && nextElement.classList.contains('Chapter-details')) {
      chapter.addEventListener("click", () => {
        nextElement.classList.toggle("active");
      });
    }
  });
});