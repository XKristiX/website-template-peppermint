document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
  
    // Change header background color on scroll
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  });
  