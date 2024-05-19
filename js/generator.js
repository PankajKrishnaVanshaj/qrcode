const generatorDiv = document.querySelector(".generator");
const generatorBtn = document.querySelector(".generator-form button");
const qrInput = document.querySelector(".generator-form input");
const qrImg = document.querySelector(".generator-img img");
const downloadBtn = document.querySelector(".generator-btn .btn-line");

let imgURL = "";

generatorBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue.trim()) return;

  generatorBtn.innerText = "Generating QR Code.....";
  imgURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    qrValue
  )}`;
  qrImg.src = imgURL;

  qrImg.addEventListener("load", () => {
    generatorDiv.classList.add("active");
    generatorBtn.innerText = "Generate QR Code";
  });
});

downloadBtn.addEventListener("click", () => {
  if (!imgURL) return;
  fetchImage(imgURL);
});

function fetchImage(url) {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      let tempFile = URL.createObjectURL(file);
      let fileName = "PK-QR-Code";
      let extension = file.type.split("/")[1];
      download(tempFile, fileName, extension);
    })
    .catch(() => (imgURL = ""));
}

function download(tempFile, fileName, extension) {
  let a = document.createElement("a");
  a.href = tempFile;
  a.download = `${fileName}.${extension}`;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

qrInput.addEventListener("input", () => {
  if (!qrInput.value.trim()) {
    generatorDiv.classList.remove("active");
  }
});
