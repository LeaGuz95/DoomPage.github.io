// ========================================
// MENÚ HAMBURGUESA - DOOM STYLE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navegacion-principal');
  const navLinks = document.querySelectorAll('.nav-link');
  const overlay = document.querySelector('.menu-overlay');
  const body = document.body;
  
  // Toggle del menú al hacer click en hamburguesa
  menuToggle.addEventListener('click', function() {
    const isOpen = nav.classList.contains('active');
    
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  
  // Función para abrir el menú
  function openMenu() {
    nav.classList.add('active');
    menuToggle.classList.add('active');
    overlay.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden'; // Prevenir scroll del body
  }
  
  // Función para cerrar el menú
  function closeMenu() {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    body.style.overflow = ''; // Restaurar scroll
  }
  
  // Cerrar menú al hacer click en un link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Solo cerrar si estamos en móvil (menú está activo)
      if (nav.classList.contains('active')) {
        closeMenu();
      }
    });
  });
  
  // Cerrar menú al hacer click en el overlay
  overlay.addEventListener('click', function() {
    closeMenu();
  });
  
  // Cerrar menú al hacer click fuera de él
  document.addEventListener('click', function(event) {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
      closeMenu();
    }
  });
  
  // Cerrar menú al presionar ESC
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
    }
  });
  
  // Cerrar menú al cambiar el tamaño de ventana (si pasamos a desktop)
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (window.innerWidth > 768 && nav.classList.contains('active')) {
        closeMenu();
      }
    }, 250);
  });
  
});
