const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["*", "/", "-", "+", "="];
let output = "";

buttons.forEach((button) => {

  button.addEventListener("click", (e) => {
    const btnValue = e.target.value;
    if (btnValue === "=" && output !== "") {
      output = eval(output);
    } else if (btnValue === "RESET") {
      output = "";
    } else if (btnValue === "DEL") {
      output = output.toString().slice(0, -1);
    } else {
      if (output === "" && specialChars.includes(btnValue)) return;
      output += btnValue;
    }
    display.value = output;
  });
});

