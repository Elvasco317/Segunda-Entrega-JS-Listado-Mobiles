const iphone11ProMax = {
    id: 1,
    marca: "Apple",
    modelo: "Iphone 11 PRO MAX",
    precio: 900,
    color: "green-midnigth",
};
const iphone12 = {
    id: 2,
    marca: "Apple",
    modelo: "Iphone 12",
    precio: 1000,
    color: "space-gray",
};
const iphone12Pro = {
    id: 3,
    marca: "Apple",
    modelo: "Iphone 12 PRO",
    precio: 1200,
    color: "purple",
};
const iphone12ProMax = {
    id: 4,
    marca: "Apple",
    modelo: "Iphone 12 PRO MAX",
    precio: 1300,
    color: "blue",
};
const motorolaMotoG = {
    id: 5,
    marca: "Motorola",
    modelo: "Moto G",
    precio: 200,
    color: "black",
};
const samsungJ7 = {
    id: 6,
    marca: "Samsung",
    modelo: " J7 ",
    precio: 100,
    color: "white",
};
const productos = [
    iphone11ProMax,
    iphone12,
    iphone12Pro,
    iphone12ProMax,
    motorolaMotoG,
    samsungJ7,
];

for (const el of productos) {
    el.precio *= 1.21;
}

function sacarIva(parametro) {
    return parametro / 1.21;
}

let opcion = parseInt(
    prompt(
        "Seleccione una opcion:\n1- Productos disponibles\n2- Filtro por precio\n3- Elegir productos\n4- Salir"
    )
);
let suma = 0;
while (opcion != 4) {
    switch (opcion) {
        case 1:
            console.table(productos);
            break;
        case 2:
            let precioMaximo = parseInt(prompt("Ingrese precio MAXIMO a pagar: "));
            if (precioMaximo >= 200) {
                const equiposFiltradosPorPrecio = productos.filter(
                    (el) => el.precio < precioMaximo
                );
                console.table(equiposFiltradosPorPrecio);
            } else {
                console.log("INGRESE UN VALOR MAYOR A 200");
            }
            break;
        case 3:
            let idABuscar = parseInt(
                prompt(
                    "Elija un ID de  modelo de los disponibes, para terminar y ver total compra: "
                )
            );
            while (idABuscar != 7) {
                const buscado = productos.find((modelo) => modelo.id === idABuscar);
                console.log(buscado.modelo + ": $ " + buscado.precio);
                suma += buscado.precio;

                idABuscar = parseInt(
                    prompt(
                        "Elija un ID de  modelo de los disponibes, para terminar y ver total compra 7 equipos: "
                    )
                );
            }
            console.log("\nEl total SIN IVA es: $" + sacarIva(suma));
            console.log("\nEl total +IVA es: $" + suma);
            break;
        default:
            console.log("Default");
    }
    opcion = parseInt(
        prompt(
            "Seleccione una opcion:\n1- Productos disponibles\n2- Filtro por precio\n3- Elegir productos\n4- Salir"
        )
    );
}
