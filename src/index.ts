let base: number = Number(prompt("Ingrese la base"));
let exponente: number = Number(prompt("Ingrese el exponente"));

function resultadoPotencia(base: number, exponente: number): number {
  let resultado: number = 1;
  if (exponente === 0) {
    return 1;
  } else {
    for (let i: number = 1; i <= exponente; i++) {
      resultado *= base;
    }
  }
  return resultado;
}

if (exponente >= 0) {
  console.log("El resultado es:", resultadoPotencia (base, exponente));
} else {
  console.log("ERROR: El exponente es menor a cero");
}
