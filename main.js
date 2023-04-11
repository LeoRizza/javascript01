function calcularPrecioConRecargo(precio) {
    return precio * 1.75;
}

let sumatoriaPrecios = 0;

while (true) {

    const valor = prompt("Por favor, ingresa precio del juego en $:");


    if (valor === null) {
        break;
    }


    const precio = parseInt(valor);
    const precioConRecargo = calcularPrecioConRecargo(precio);

    sumatoriaPrecios= sumatoriaPrecios + precioConRecargo;


    alert("El precio con impuestos es de $" + precioConRecargo);
}


alert("La sumatoria de todos los juegos ingresados es de $" + sumatoriaPrecios);

