let peso=parseFloat(prompt("Ingrese su peso (kg):"));
let altura=parseFloat(prompt("Ingres su altura (mt):"));

let altura_elevada = altura * altura;    

let imc= peso / altura_elevada;

console.log("Su imc seria de " ,imc);

if(imc<18.5){
    console.log("Bajo peso");
}else if(imc>=18.5 && imc<=24.9){
    console.log("Peso normal")
}else if(imc>=25.0 && imc<=29.9){
    console.log("Sobrepeso")
}else if(imc>=30.0 && imc<=34.9){
    console.log("Obesidad grado 1 Leve")
}else if(imc>=35.0 && imc<=39.9){
    console.log("Obesidad grado 2 moderada")
}else if(imc>=40.0){
    console.log("Obesidad grado 3 morbida")
}else{
    console.log("Error")
}