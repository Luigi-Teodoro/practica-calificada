let cantidadInvertida = parseFloat(prompt("Introduce la cantidad a invertir:"));

let interesAnual = parseFloat(prompt("Introduce el interés anual (en %):"));

let numeroAnios = parseInt(prompt("Introduce el número de años:"));

let capitalFinal = cantidadInvertida * (1 + interesAnual / 100) ** numeroAnios;

alert(`El capital obtenido tras ${numeroAnios} años es: $ ${capitalFinal}`);