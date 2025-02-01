document.addEventListener('DOMContentLoaded', () => {
  // 01. Menu Toggle Functionality
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navLinks.classList.toggle('hide');
  });

  // 02. Handle the Window Resize Event
  function updateMenuDisplay() {
    if (window.innerWidth < 1000) {
      // On screens less than 1000px, show the menu button and hide menu items by default (unless already open)
      menuToggle.style.display = 'block';
      if (!navLinks.classList.contains('open')) {
        navLinks.classList.add('hide');
      }
    } else {
      // On screens 1000px and wider, hide the menu button and always show the menu items
      menuToggle.style.display = 'none';
      navLinks.classList.remove('hide', 'open');
    }
  }
  
  updateMenuDisplay();
  window.addEventListener('resize', updateMenuDisplay);

  // 03. Image Viewer (Modal)
  function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
    </div>`;
  }
  
  function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
      viewer.remove();
    }
  }
  
  function viewHandler(event) {
    const target = event.target;
    if (target.tagName !== 'IMG') return;
    const src = target.getAttribute('src');
    const parts = src.split('-');
    const newSrc = parts[0] + "-full.jpeg";
    const altText = target.getAttribute('alt');
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newSrc, altText));
    const closeBtn = document.querySelector('.close-viewer');
    closeBtn.addEventListener('click', closeViewer);
  }
  
  const gallery = document.querySelector('.gallery');
  gallery.addEventListener('click', viewHandler);
});
