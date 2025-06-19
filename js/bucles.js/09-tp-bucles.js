/**
Crea un script que escriba los números del 1 al 500,
que indique cuáles son múltiplos de 4 y de 9 y
que cada 5 líneas muestre una línea horizontal. 
Por ejemplo :
 */

for (let i = 1; i <= 500; i++) {
  let mensaje = i;

  if (i % 4 === 0) {
    mensaje += " (Múltiplo de 4)";
  }

  if (i % 9 === 0) {
    mensaje += " (Múltiplo de 9)";
  }

  document.writeln(mensaje + "<br>");
  if (i % 5 === 0) {
    document.writeln("<hr>");
  }
}
