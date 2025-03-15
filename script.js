document.addEventListener("DOMContentLoaded", () => {
  const connectButton = document.querySelector(".connect-button");
  const popup = document.getElementById("connect-popup");
  const closeButton = document.querySelector(".close");

  connectButton.addEventListener("click", (event) => {
    event.preventDefault();
    popup.style.display = "flex";
  });

  closeButton.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");
  const links = document.querySelectorAll("nav ul li a");
  const lightningBox = document.getElementById("lightning-box");

  // Smooth scroll function
  const smoothScroll = (targetId) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust for header height
        behavior: "smooth",
      });
    }
  };

  // Make headers bigger on scroll
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const scale = 1 + scrollY * 0.001; // Increase size based on scroll
    document.querySelectorAll(".section h2").forEach((header) => {
      header.style.transform = `scale(${Math.min(scale, 1.5)})`;
    });

    // Light up the top bar on scroll
    if (scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Add smooth scroll and lightning box effect to navigation links
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);

      // Show the lightning box
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        lightningBox.style.opacity = "1";
        lightningBox.style.top = `${targetSection.offsetTop}px`;
        lightningBox.style.height = `${targetSection.offsetHeight}px`;

        // Smooth scroll to the target section
        smoothScroll(targetId);

        // Hide the lightning box after 1 second
        setTimeout(() => {
          lightningBox.style.opacity = "0";
        }, 1000);
      }
    });
  });

  // Handle "Let's Connect" button
  const connectButton = document.querySelector(".connect-button");
  const popup = document.getElementById("connect-popup");
  const closeButton = document.querySelector(".close");

  connectButton.addEventListener("click", (event) => {
    event.preventDefault();
    popup.style.display = "flex";
  });

  closeButton.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");

  // Make top bar pop up when scrolling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");

  // Make top bar expand and light up when scrolling down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");
  const landingName = document.getElementById("landing-name");
  const headerName = document.getElementById("header-name");

  // Show/hide top bar on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("visible");
      landingName.style.opacity = "0"; // Fade out landing name
    } else {
      header.classList.remove("visible");
      landingName.style.opacity = "1"; // Fade in landing name
    }
  });

  // Smooth scroll for navigation links
  const links = document.querySelectorAll("nav ul li a");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });

  // Popup functionality
  const connectButton = document.querySelector(".connect-button");
  const popup = document.getElementById("connect-popup");
  const closeButton = document.querySelector(".close");

  connectButton.addEventListener("click", (event) => {
    event.preventDefault();
    popup.style.display = "flex";
  });

  closeButton.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
