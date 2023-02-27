// selecciona todos los elementos del menú
const menuItems = document.querySelectorAll('.nav-link');

// itera a través de cada elemento del menú
menuItems.forEach(item => {
  // agrega un event listener para detectar cuando el mouse está sobre un elemento del menú
  item.addEventListener('mouseenter', () => {
    // elimina la clase 'active' de cualquier otro elemento del menú que la tenga
    menuItems.forEach(item => item.classList.remove('active'));
    // agrega la clase 'active' al elemento del menú que se encuentra bajo el cursor
    item.classList.add('active');
  });
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
