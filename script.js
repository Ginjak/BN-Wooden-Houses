document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const testElement = document.querySelector(".mobile-menu-bg");

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
});
