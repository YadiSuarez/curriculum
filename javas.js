function bar() {
  const nav = document.getElementById("main-nav");

  if (window.innerWidth <= 600) {
    if (nav.style.display === "none" || nav.style.display === "") {
      nav.style.display = "block";
      anima;
    } else {
      nav.style.display = "none";
    }
  }
}
