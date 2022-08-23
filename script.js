let body = document.getElementById("gradientBg");
let input1 = document.getElementsByClassName("colorInput1")[0];
let input2 = document.getElementsByClassName("colorInput2")[0];
let h3 = document.getElementsByTagName("h3")[0];

const pickGradient = () => {
  body.style.background =
    "linear-gradient(to right, " + input1.value + ", " + input2.value;

  h3.textContent = body.style.background + ";";
};

input1.addEventListener("input", pickGradient);
input2.addEventListener("input", pickGradient);
