const lbtn = document.getElementById("fav-cake-left-arrow");
const rbtn = document.getElementById("fav-cake-right-arrow");
const crds = document.getElementById("favorite-flavors-card");
const sc = crds.clientWidth / 1;
lbtn.classList.add("disabled");

lbtn.addEventListener("click", () => {
  crds.scrollBy({ left: -sc, behavior: "smooth" });
});

rbtn.addEventListener("click", () => {
  crds.scrollBy({ left: sc, behavior: "smooth" });
});

crds.addEventListener("scroll", () => {
  const maxScrollValue = crds.scrollWidth - crds.clientWidth;
  const currentScrollValue = Math.round(crds.scrollLeft);

  lbtn.classList.toggle("disabled", currentScrollValue === 0);
  rbtn.classList.toggle("disabled", currentScrollValue >= maxScrollValue ); // Adjust the threshold as needed
});
