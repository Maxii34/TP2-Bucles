/**
 * Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
 *  Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

 */

let textoFinal = "";       // Donde se van a ir guardando las cadenas
let primera = true;        // Para no poner guión al principio

while (true) {
  let input = prompt("Escribí algo (hacé clic en 'Cancelar' para terminar):");

  if (input === null) {
    // El usuario tocó "Cancelar"
    break;
  }

  if (primera) {
    textoFinal += input;
    primera = false;
  } else {
    textoFinal += "-" + input;
  }
}

alert("Resultado final: " + textoFinal);
