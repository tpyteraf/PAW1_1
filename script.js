const ex1_btn = document.getElementById("ex1_button");
const ex1_cont = document.getElementById("ex1_content");

ex1_btn.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    ex1_cont.textContent += i;
    if (i < 9) ex1_cont.textContent += `, `;
  }
});
