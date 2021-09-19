let randomNumber = Math.floor(Math.random() * 11);
var result = document.getElementById("resultado");
let i = 3;

function Chutar() {
  let chute = parseInt(document.getElementById("valor").value);

  if (chute > 10 || chute < 0) return (result.innerHTML = "Valor inválido");

  if (chute === randomNumber) {
    i = 3;
    return (result.innerHTML = "Acertou. Mizerávi!");
  } else {
    i--;
    if (i > 1)
      return (result.innerHTML = `Eroooou!<br>Restam ${i} tentativas!`);
    if (i == 1) return (result.innerHTML = `Eroooou!<br>Última tentativa!`);
    i = 3;
    return (result.innerHTML = `GAME OVER <br> Tente Novamente.`);
  }
}