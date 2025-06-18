
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-xmark'); // optional for hamburger to X icon
  });

