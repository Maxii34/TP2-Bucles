/*
 Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/

const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

let dni;

do {
  dni = prompt("Ingresá un número de DNI (entre 0 y 99.999.999):");

  if (dni === null) break;

  if (isNaN(dni) || dni < 0 || dni > 99999999) {
    alert("⚠️ Valor inválido. Ingresá un número entre 0 y 99.999.999.");
    continue;
  }

  dni = parseInt(dni);
  const resto = dni % 23;
  const letra = letras[resto];

  alert(`✅ El DNI ${dni} tiene la letra: ${letra}`);
} while (true);
