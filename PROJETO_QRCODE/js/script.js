const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = container.querySelector("#qr-form input");
const qrCodeImg = container.querySelector("#qr-code img");

// Eventos
//criando a função
function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return; //se nao tiver valor, retornar

  qrCodeBtn.innerHTML = "Gerando código...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerHTML = "Código criado.";
  });
}

//criando evendo para acionar a função
qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});

//criando evendo para gerar quando pressiona ENTER
qrCodeInput.addEventListener("keydown", (e) => {
  //Verifica se a tecla pressionada foi o ENTER
  if (e.code === "Enter") {
    generateQrCode();
  }
});

//limpar area do qr code
qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerHTML = "Gerar Qr Code";
  }
});
