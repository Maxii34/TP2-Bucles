/*
Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
*/

// Pedir nombres y edades
// Nombre y edad uno
let nombre1 = prompt("Ingresa el primer nombre:");
let edad1 = parseInt(prompt(`Ingresa la edad de ${nombre1}:`));

// Nombre y edad dos
let nombre2 = prompt("Ingresa el segundo nombre:");
let edad2 = parseInt(prompt(`Ingresa la edad de ${nombre2}:`));

// Nombre y edad tres
let nombre3 = prompt("Ingresa el tercer nombre:");
let edad3 = parseInt(prompt(`Ingresa la edad de ${nombre3}:`));

let mayorEdad = Math.max(edad1, edad2, edad3);
let nombreMayor = "";

if (mayorEdad === edad1) {
  nombreMayor = nombre1;
} else if (mayorEdad === edad2) {
  nombreMayor = nombre2;
} else {
  nombreMayor = nombre3;
}

alert(`La persona de mayor edad es ${nombreMayor} con ${mayorEdad} años.`);
