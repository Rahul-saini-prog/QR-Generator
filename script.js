const container = document.querySelector(".container");
let qrInput = container.querySelector(".form input");
let generateBtn = container.querySelector(".form button");
let qrImg = container.querySelector(".qr-code img");

let preValue = "";

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value.trim();
  if (!qrValue || preValue === qrValue) {
    alert("Please Enter a valid url");
  } else {
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

    qrImg.addEventListener("load", () => {
      container.classList.add("active");
      generateBtn.innerText = "Generated QR Code";
    });
  }
});

 qrInput.addEventListener("keyup", () => {
  if (!qrInput.value.trim()) {
    container.classList.remove("active");
     preValue = "";
   }
});
