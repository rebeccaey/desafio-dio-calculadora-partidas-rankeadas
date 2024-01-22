//Criando uma constante chamada read para efetuar leitura dos dados informados via teclado.
const read = require("prompt-sync")();

let vitorias, derrotas;

function setSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

function checkRanking(saldo) {
  if (saldo < 11) {
    return "Ferro";
  }
  if (saldo >= 11 && saldo <= 20) {
    return "Bronze";
  }
  if (saldo >= 21 && saldo <= 50) {
    return "Prata";
  }
  if (saldo >= 51 && saldo <= 80) {
    return "Ouro";
  }
  if (saldo >= 81 && saldo <= 90) {
    return "Diamante";
  }
  if (saldo >= 91 && saldo <= 100) {
    return "Lendário";
  }
  if (saldo >= 101) {
    return "Imortal";
  }
}

console.log("Digite a quantidade de vitórias:");
vitorias = parseInt(read());
console.log("Digite a quantidade de derrotas:");
derrotas = parseInt(read());
console.log("O Herói tem de saldo de " + setSaldo(vitorias, derrotas) + " está no nível de " + checkRanking(setSaldo(vitorias, derrotas)));
