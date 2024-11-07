document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const testElement = document.querySelector(".mobile-menu-bg");

  if (toggler && testElement) {
    toggler.addEventListener("click", function () {
      if (testElement.style.top === "0px") {
        testElement.style.transition = "top 0.4s ease-in-out";
        testElement.style.top = "-100vh";
        document.body.style.overflow = ""; // Enable scroll
      } else {
        testElement.style.transition = "top 0.2s ease-in-out";
        testElement.style.top = "0px";
        document.body.style.overflow = "hidden"; // Disable scroll
      }
    });
  }

  function updateMainImage(src) {
    document.getElementById("mainImage").src = src;
  }

  const triggerDropdownElements =
    document.querySelectorAll(".trigger-dropdown");

  if (triggerDropdownElements.length > 0) {
    triggerDropdownElements.forEach(function (element) {
      element.addEventListener("click", function () {
        var targetId = this.getAttribute("data-target");
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.click();
        }
      });
    });
  }
});
