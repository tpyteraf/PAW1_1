// 1_1.1
const ex1_btn = document.getElementById("ex1_button");
const ex1_cont = document.getElementById("ex1_content");

ex1_btn.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    ex1_cont.textContent += i;
    if (i < 9) ex1_cont.textContent += `, `;
  }
});

// 1_1.2
const ex2_text = document.getElementById("ex2_text");
const ex2_cont = document.getElementById("ex2_content");

const letterRegEx = /[a-zA-Z]/;
const specialRegEx = /[^0-9 ]/;

ex2_text.addEventListener("input", () => {
  const phone_number = ex2_text.textContent;
  let valid = true;

  ex2_cont.textContent = "";

  if (phone_number.length != 9) {
    valid = false;
    ex2_cont.textContent += "Długość numeru musi być równa 9\n";
  }
  if (phone_number.test(letterRegEx)) {
    valid = false;
    ex2_cont.textContent += "Numer nie może zawierać liter\n";
  }
  // if (phone_number.test(specialRegEx)) {
  //   valid = false;
  //   ex2_cont.textContent += "Numer nie może zawierać znaków specjalnych";
  // }

  // if (valid) {
  //   ex2_cont.textContent = "Numer telefonu jest poprawny";
  // }
});
