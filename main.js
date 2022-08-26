const item = document.getElementsByClassName("hoverItem")[0];
const body = document.getElementsByClassName("body")[0];
console.log(item);
console.log(body);

item.addEventListener("mouseover", () => {
  body.classList.toggle("active");
});

item.addEventListener("mouseout", () => {
  body.classList.toggle("active");
});
