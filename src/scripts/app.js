"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const chapters = document.querySelectorAll('[class^="chapter"]:not(.chapter-details)');

  chapters.forEach(chapter => {
    const nextElement = chapter.nextElementSibling;

    if (nextElement && nextElement.classList.contains('chapter-details')) {
      chapter.addEventListener("click", () => {
        nextElement.classList.toggle("active");
      });
    }
  });
});



  document.addEventListener("DOMContentLoaded", () => {

    const allChapters = document.querySelectorAll('.chapter-details');

    allChapters.forEach((chapter) => {
      const leftColumn = chapter.querySelector('.column-left');
      const rightColumn = chapter.querySelector('.column-right');

      chapter.addEventListener('scroll', () => {
        const scrollLeft = chapter.scrollLeft;
        const containerWidth = chapter.offsetWidth;

        if (scrollLeft < containerWidth * 0.4) {
          leftColumn.style.opacity = '1';
          rightColumn.style.opacity = '0.3';
        } else {
          leftColumn.style.opacity = '0.3';
          rightColumn.style.opacity = '1';
        }
      });
    });
  });


function resetOpacityOnDesktop() {
  if (window.innerWidth > 768) {
    const allChapters = document.querySelectorAll('.chapter-details');
    allChapters.forEach((chapter) => {
      const left = chapter.querySelector('.column-left');
      const right = chapter.querySelector('.column-right');

      // Supprime les styles JS (inline)
      left.style.removeProperty('opacity');
      right.style.removeProperty('opacity');
    });
  }
}

// Appelle une fois au chargement
resetOpacityOnDesktop();

// Appelle aussi à chaque resize
window.addEventListener('resize', resetOpacityOnDesktop);




