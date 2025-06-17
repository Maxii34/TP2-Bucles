/*
4- Realiza un script que pida números hasta que se pulse “cancelar”.
 Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
  Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */

let num = 0;

do {
  let entrada = parseInt(prompt("Ingresa un numero"));

  if (isNaN(entrada)) {
    alert("No valido! ingresar numeritos!");
    continue;
  } else {
    num += entrada;
  }
} while (confirm("Segir?"));

document.writeln(`los numeritos ingresados son ${num}`);
