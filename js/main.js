const generatortab = document.querySelector(".nav-gene");
const scannertab = document.querySelector(".nav-scan");

generatortab.addEventListener("click", () => {
  generatortab.classList.add("active");
  scannertab.classList.remove("active");

  document.querySelector(".scanner").style.display = "none";
  document.querySelector(".generator").style.display = "block";
});

scannertab.addEventListener("click", () => {
  scannertab.classList.add("active");
  generatortab.classList.remove("active");

  document.querySelector(".generator").style.display = "none";
  document.querySelector(".scanner").style.display = "block";
});
