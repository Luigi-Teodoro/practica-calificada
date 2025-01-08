//Escribe un programa que pregunte al usuario el total de su compra y 
//si tiene un código de descuento. Si el código es "DESCUENTO10", se aplicará 
//un 10% de descuento. Si el código es "DESCUENTO20", 
//se aplicará un 20% de descuento. Muestra el total después de aplicar 
//el descuento, si corresponde, y un mensaje si el código no es válido. (10p)
let compra = parseFloat(prompt("Ingrese el monto total de su compra: "));
let descuento = confirm("¿Tiene código de descuento?");
let montoDescuento = 0;
let total = compra; 

if (descuento) {
    let codigo = prompt("Ingrese su código");
    if (codigo === "DESCUENTO10") {
        montoDescuento = compra * 0.1; 
        total = compra - montoDescuento; 
        alert(
            "El código usado es DESCUENTO10" + "\n" +
            "Importe de compra: " + compra + "\n" +
            "Monto de descuento: " + montoDescuento + "\n" +
            "Total con descuento: " + total
        );
    }if(codigo === "DESCUENTO20"){
        montoDescuento = compra * 0.2; 
        total = compra - montoDescuento; 
        alert(
            "El código usado es DESCUENTO20" + "\n" +
            "Importe de compra: " + compra + "\n" +
            "Monto de descuento: " + montoDescuento + "\n" +
            "Total con descuento: " + total
        );
    } else {
        alert(
            "Código de descuento inválido.\n" +
            "Importe de compra: " + compra + "\n" +
            "Total: " + total
        );
    }
} else {
    alert(
        "No se aplicó ningún descuento.\n" +
        "Importe de compra: " + compra + "\n" +
        "Total: " + total
    );
}
