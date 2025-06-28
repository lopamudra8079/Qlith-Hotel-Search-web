      // Toggle mobile menu
      const hamburgerBtn = document.getElementById("hamburgerBtn");
      const mobileMenu = document.getElementById("mobileMenu");

      hamburgerBtn.addEventListener("click", () => {
        const isActive = mobileMenu.classList.toggle("active");
        hamburgerBtn.setAttribute("aria-expanded", isActive);
      });