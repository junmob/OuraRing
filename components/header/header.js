    const menuToggle = document.getElementById('menu-toggle');
    const menuWrapper = document.getElementById('menu-wrapper');
    const menuClose = document.getElementById('menu-close');
    const overlay = document.getElementById('overlay');

    function openMenu() {
      menuWrapper.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      menuWrapper.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }

    menuToggle.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Header hide/show on scroll
    let lastScrollY = window.scrollY;
    const header = document.querySelector(".site-header");
    
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 150) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          header.classList.add("hide-header");
        } else {
          header.classList.remove("hide-header");
        }
        lastScrollY = currentScrollY;
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuWrapper.classList.contains('active')) {
        closeMenu();
      }
    });