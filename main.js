const toggleBtn = document.querySelector(".nav__bar");
const sns = document.querySelector(".sns");

toggleBtn.addEventListener("click", () => {
  sns.classList.toggle("active");
});
