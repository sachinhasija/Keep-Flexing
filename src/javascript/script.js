window.onload = () => {
  function toggleClicked(e) {
    this.classList.toggle("clicked");
  }
  function toggleClickedActive(e) {
    if (e.propertyName.includes("flex")) {
      this.classList.toggle("clicked-active");
    }
  }
  const children = document.querySelectorAll(".children");
  children.forEach(child => child.addEventListener("click", toggleClicked));
  children.forEach(child =>
    child.addEventListener("transitionend", toggleClickedActive)
  );
};
