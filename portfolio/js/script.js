// DOM Selections
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section'); // FIXED typo 'secction'

const header = document.querySelector('header');
const barsBox = document.querySelector('.bars-box');

// Function to reset page UI state
function activePage() {
  header.classList.remove('active');
  barsBox.classList.remove('active');
  navLinks.forEach(link => link.classList.remove('active'));
  sections.forEach(section => section.classList.remove('active'));

  setTimeout(() => {
    header.classList.add('active');
    barsBox.classList.add('active');
  }, 1100);
}

// Navigation click events
navLinks.forEach((link, idx) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default navigation

    if (!link.classList.contains('active')) {
      activePage();
      link.classList.add('active');

      setTimeout(() => {
        if (sections[idx]) sections[idx].classList.add('active');
      }, 1100);
    }
  });
});

// Logo click event (usually returns to home)
logoLink.addEventListener('click', () => {
  if (!navLinks[0].classList.contains('active')) {
    activePage();
    navLinks[0].classList.add('active');

    setTimeout(() => {
      if (sections[0]) sections[0].classList.add('active');
    }, 1100);
  }
});

// Resume Section
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    resumeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    resumeDetails.forEach(d => d.classList.remove('active'));
    if (resumeDetails[idx]) resumeDetails[idx].classList.add('active');
  });
});

// Portfolio Carousel
const slide = document.querySelector('.img-slide');
const leftBtn = document.querySelector('.arrow-left');
const rightBtn = document.querySelector('.arrow-right');
const items = document.querySelectorAll('.img-item');
const portfolioDetails = document.querySelectorAll('.portfolio-detail');

let currentIndex = 0;
const maxVisibleItems = 6;
const totalItems = Math.min(items.length, maxVisibleItems);

function updateSlidePosition() {
  slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateButtons();
  updatePortfolioDetail();
}

function updateButtons() {
  leftBtn.classList.toggle('disabled', currentIndex === 0);
  rightBtn.classList.toggle('disabled', currentIndex === totalItems - 1);
}

function updatePortfolioDetail() {
  portfolioDetails.forEach(detail => detail.classList.remove('active'));
  if (portfolioDetails[currentIndex]) {
    portfolioDetails[currentIndex].classList.add('active');
  }
}

leftBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
});

rightBtn.addEventListener('click', () => {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    updateSlidePosition();
  }
});
   const menuIcon = document.getElementById('menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.onclick = () => {
        nav.classList.toggle('active');
    };

// Initial state
updateSlidePosition();


 
