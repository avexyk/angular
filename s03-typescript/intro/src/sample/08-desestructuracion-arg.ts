
/*
    ===== Código de TypeScript =====
*/

interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150,
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350,
}

// Recibe por parametro una coleccion de tipo Producto[]
function calculaISV( productos: Producto[] ):[number, number] {
    let total = 0;

    // Cuando es un elemento se usa la interfaz sin arreglo
    // productos.forEach( ( producto: Producto ) => {
    //     total += producto.precio;
    // })

    // Desestruturacion
    productos.forEach( ( { precio } ) => {
        total += precio;
    })

    // return total * 0.15;

    return [total, total * 0.15]
    
}

const articulos = [ telefono, tableta ];

// const isv = calculaISV( articulos );
const [total, isv] = calculaISV( articulos );

// console.log( 'ISV:', isv );
console.log( 'Total:', total );
console.log( 'ISV:', isv );