"use strict";

//Toggle chapter details on click

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


// Change opacity of left and right columns based on scroll position

// Cette fonction a été faite avec l'aide de ChatGPT (de la ligne 36 à la ligne 41)

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


// Reset opacity of left and right columns on desktop view 

// Cette fonction a été faite avec l'aide de ChatGPT

function resetOpacityOnDesktop() {
  if (window.innerWidth > 768) {
    const allChapters = document.querySelectorAll('.chapter-details');
    allChapters.forEach((chapter) => {
      const left = chapter.querySelector('.column-left');
      const right = chapter.querySelector('.column-right');


      left.style.removeProperty('opacity');
      right.style.removeProperty('opacity');
    });
  }
}

resetOpacityOnDesktop();

window.addEventListener('resize', resetOpacityOnDesktop);




