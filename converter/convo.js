let number = document.getElementById("bin-inp");
let output = document.getElementById("bin-out");
let error = document.querySelector(".error-msg");

//Converting DECIMAL to BINARY

number.addEventListener("input", () => {
  let convert = parseInt(number.value);
  output.value = convert.toString(2);
  error.textContent = "";
});

//Converting BINARY to DECIMAL

output.addEventListener("input", () => {
  let binVal = output.value;

  // Using the BinaryCheck Function to validate before converting

  if (binaryCheck(binVal)) {
    number.value = parseInt(binVal, 2);
    error.textContent = "";
  } else {
    error.textContent =
      "Hey! That's not a Binary Number. Binary is made of '0' & '1's.";
  }

  //Function to check if BINARY or not

  function binaryCheck(num) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] !== "1" && num[i] !== "0") {
        return false;
      }
    }
    return true;
  }
});
