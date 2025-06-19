/*
Haz un script que escriba una pirámide inversa
de los números del 1 al número que indique el usuario (no mayor de 50)
de la siguiente forma : (suponiendo que indica 30).
*/

let num = parseInt(prompt("Ingresa un número no mayor al 50"));

if (isNaN(num) || num < 1 || num > 50) {
  alert("Número inválido. Debe estar entre 1 y 50.");
} else {
  for (let i = num; i >= 1; i--) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
      linea += i;
    }
    document.writeln(linea + "<br>");
  }
}
