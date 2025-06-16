/**
 * Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
 *  Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

 */

let textoFinal = "";     
let primera = true;      

while (true) {
  let input = prompt("Escribí algo (hacé clic en 'Cancelar' para terminar):");

  if (input === null) {
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
