const fileName = document.getElementById("fileName");
fileName.textContent = "Nenhum áudio selecionado";

function openFileDialog() {
  const fileInput = document.getElementById("fileInput");
  fileInput.click();
}

function updateFileName() {
  const fileInput = document.getElementById("fileInput");
  const fileName = document.getElementById("fileName");

  if (fileInput.files.length > 0) {
    fileName.textContent = fileInput.files[0].name;
  } else {
    fileName.textContent = "Nenhum áudio selecionado";
  }
}
