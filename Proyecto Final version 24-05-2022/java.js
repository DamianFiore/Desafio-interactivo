let total=0;
for (let i=0; i=10; i++){
    let respuesta= prompt("¿Quiere agregar un producto al carrito? (si/no)");
    
    if(respuesta=="si"){
        let producto= parseInt(prompt("Ingrese el valor del producto"));
        total= total + producto;
        alert("El total de su compra es: $" + parseInt(total));
    }
    else{
        break;
    }
}

let respueta2= prompt("¿Posee cupón de descuento?");

if(respueta2=="si"){
    total = total*0.75;
}

let respueta3= prompt("¿Como desea abonar? 1-Efectivo  2-Tarjeta  3-Mercado Pago");

switch(respueta3){
    case "1":
        alert("Eligio pago en efectivo");
        alert("El total a pagar es: $" + parseInt(total));
    break;

    case "2":
        alert("Eligio pago con tarjeta");
        let cuotas=prompt("¿En cuantas cuotas lo abonara?");
        switch(cuotas){
            case "1":
                alert("Total a pagar por mes: $" + parseInt(total));
            break;
            case "6":
                total=(total*1.075)/6;
                alert("Total a pagar por mes: $" + parseInt(total));
            break;
            case "12":
                total=(total*1.14)/12;
                alert("Total a pagar por mes: $" + parseInt(total));
            break;
        }
    break;

    case "3":
        alert("Eligio pago con Mercado Pago");
        alert("El total a pagar es: $" + parseInt(total));
    break;

    default:

    break;
}

