const navOpenClose = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-link');
  burger.addEventListener('click', () => nav.classList.toggle('open'));
  navLinks.forEach(link => link.addEventListener('click', () => nav.classList.toggle('open')));
}
navOpenClose();