document.querySelector("#textWithLF").addEventListener("input", () => {
  document.getElementById('textNonLF').value = document.getElementById('textWithLF').value.replaceAll('\r', '').replaceAll('\n', ' ');
});

document.querySelector("#copy").addEventListener("click", () => {
  navigator.clipboard.writeText(document.getElementById('textNonLF').value);
});

document.querySelector("#select-all").addEventListener("click", () => {
  document.form.textNonLF.focus();
  document.form.textNonLF.select();
});

document.querySelector("#delete").addEventListener("click", () => {
  document.getElementById('textWithLF').value = '';
});

document.querySelector("#focus").addEventListener("click", () => {
  document.getElementById('textWithLF').focus();
});

document.querySelector("html").addEventListener("keydown", (e) => {
  if(e.ctrlKey || e.metaKey){
    switch(e.code){
      case 'KeyA':
        document.querySelector("#select-all").click();
        break;
      case 'KeyC':
        document.querySelector("#copy").click();
        break;
      case 'KeyK':
        document.querySelector("#delete").click();
        break;
      case 'Semicolon':
        document.querySelector("#focus").click();
        break;
      default:
        break;
    }
  }
});
