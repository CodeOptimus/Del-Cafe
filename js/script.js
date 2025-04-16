document.addEventListener("DOMContentLoaded", () => {
    const hamMenu = document.getElementById("ham-menu");
    const menu = document.querySelector(".menu");
    const navLinks = document.querySelectorAll(".menu a");
  
    // Toggle menu on hamburger click
    hamMenu.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  
    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    });
  
    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !menu.contains(e.target) &&
        !hamMenu.contains(e.target)
      ) {
        menu.classList.remove("active");
      }
    });
  });
  