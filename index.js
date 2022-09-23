function porcentaje (num1, metododepago, tipo){
    switch(metododepago){
        case "point":
            switch(tipo){
                case "debito":
                    return (num1*3.15/100);

                case "credito":
                    return (num1*6.39/100);
            }

        case "qr":
            switch(tipo){
                case "debito":
                    return (num1*0.99/100);

                case "credito":
                    return (num1*6.39/100);
            }
            
        case "link":
            switch(tipo){
                case "debito":
                    return (num1*5.99/100);

                case "credito":
                    return (num1*6.50/100);
            }


        default:
            return "Operacion no disponible"
    }
}

class Producto {
    constructor(id, nombre, precio){
        this.id =id;
        this.nombre = nombre;
        this.precio = precio;
    }
}


let productos = [];
productos.push(new Producto(productos.length + 1, "Musculosa Miami Heat", 8000));
productos.push(new Producto(productos.length + 1, "Short Lakers", 7500));
productos.push(new Producto(productos.length + 1, "Musculosa Denver - Campazzo", 11000));
productos.push(new Producto(productos.length + 1, "Camiseta Seleccion Argentina", 5000 ));
productos.push(new Producto(productos.length + 1, "Buzo Cavaliers", 12000));
console.log(productos);
 
let preciosActualizados = productos.map(producto => {
    return {
        nombre: producto.nombre,
        precio: producto.precio + porcentaje(producto.precio, "qr", "debito")
    };
})

console.log(preciosActualizados);


    productos.forEach(producto => {
    let item = document.createElement("div");
    item.innerHTML =  `
    <h3>Id: ${producto.id}</h3>
    <p>Producto: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
    `;
    contenedor.append(item);
})
