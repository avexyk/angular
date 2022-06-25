
/*
    ===== Código de TypeScript =====
*/

// <T> es para especificar un generico, del tipo que se mande
function queTipoSoy<T>( argumento: T ) {
    return argumento;
}

let soyString = queTipoSoy( 'Hola Mundo' );
let soyNumero = queTipoSoy( 11 );
let soyArreglo = queTipoSoy( [1,2,3,4,5,6,7,8,9] );

// Expecificacion del tipo de argumento
let soyExplicito = queTipoSoy<number>( 100 );


