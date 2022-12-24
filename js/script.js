alert("Kinolani korish uchun  (Sign up) tugmasini bosing");

const dNone = document.querySelector(".text9");
const dBlock = document.querySelector(".botton");

dNone.addEventListener("click", () => {
  dBlock.classList.toggle("active");
});
