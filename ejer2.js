//Verificación de Edad y Ingresos:
//Para ser elegible para un subsidio, debes tener al menos 18 años 
//y tus ingresos mensuales deben estar entre 500€ y 2000€. 
//Escribe un programa que pregunte al usuario su edad y sus ingresos mensuales 
//y muestre por pantalla si el usuario es elegible para el subsidio o no. (10p)

let Edad = prompt("Ingresa tu edad");
if(Edad <18){
    alert("No tienes la edad suficiente para el subsidio")
}else{
    let Ingresos = prompt("ingresa tus ingresos mensuales");
    if(Ingresos >= 500 && Ingresos <= 2000){
        alert("Si es elegible para el subsidio");
    }else {
        alert("Subsidio no aplicable");
    }
}

