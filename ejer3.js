//Los tramos del IVA en un país son los siguientes:
//Básico: 10%
//Reducido: 5%
//Superreducido: 2%
//Escribe un programa que pregunte al usuario el importe de una 
// compra y el tipo de IVA aplicado (básico, reducido, superreducido) y
//  muestre por pantalla el total con IVA incluido. (10p)
let Importe = parseFloat(prompt("Ingresa el importe de la compra"));
let IVA = 0;
let Total = 0;
if(Importe > 100 ){
    IVA = Importe * 0.1;
    Total = Importe + IVA;
    alert(
        "El IVA aplicado es el Basico" + "\n" +
        "Importe de compra: " + Importe+ "\n" +
        "IVA (10%): " + IVA + "\n" +
        "Total: " + Total
    );
}else if(Importe >= 20 && Importe <= 100){
    IVA = Importe * 0.05;
    Total = Importe + IVA;
    alert(
        "El IVA aplicado es el Reducido" + "\n" +
        "Importe de compra: " + Importe+ "\n" +
        "IVA (5%): " + IVA + "\n" +
        "Total: " + Total
    );
}else{
    IVA = Importe * 0.02;
    Total = Importe + IVA;
    alert(
        "El IVA aplicado es el SuperReducido" + "\n" +
        "Importe de compra: " + Importe+ "\n" +
        "IVA (2%): " + IVA + "\n" +
        "Total: " + Total
    );
}
