import { Producto, calculaISV } from './08-desestructuracion-arg';

/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
    {
        desc: 'Tel A',
        precio: 120,
    },
    {
        desc: 'Tel B',
        precio: 170,
    }
];

const [total, isv] = calculaISV( carritoCompras );

console.log( 'Total', total );
console.log( 'ISV', isv );