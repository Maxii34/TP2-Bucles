//13- Realiza un script que pida un texto y lo muestre en mayúsculas.

let nombre = prompt("Ingresa un texto");
let nombreMayuscula = nombre.toUpperCase();

document.writeln(`Tu nombre en mayúsculas es: <p class="btn bg-dark m-2 text-light">${nombreMayuscula}</p>`);
