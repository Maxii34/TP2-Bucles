/**
 * 1- Escribir un programa que solicite la edad 
y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
si la edad ingresada no es un número válido indicarlo en un mensaje.
 */

let edad;

do {
  const entrada = prompt("Ingresa tu edad");
  edad = parseInt(entrada);

  if (isNaN(edad)) {
    alert("La edad imgresada no es valida. Intentalo de nuevo.");
  }
} while (isNaN(edad));

if (edad >= 18 && edad <= 100) {
  alert("Ya puedes conducir.");
} else if (edad > 100) {
  alert("Eres muy mayor para conducir.");
} else {
  alert("No eres mayor de edad, para conducir. Vuelve en unos años!");
}
