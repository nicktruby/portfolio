// <--- To open the mobile nav menu --- > //

const navOpenClose = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  burger.addEventListener('click', () => nav.classList.toggle('open'));
}
navOpenClose();

// <--- Intersection Observers to flip styles on the navbar --- > //

  