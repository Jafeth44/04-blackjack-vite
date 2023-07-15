/**
 * Esta función retorna el valor numérico de una carta seleccionada
 * @param {String} carta ejemplo: string representando 4 de corazónes = '4H'
 * @returns {Number} regresa el valor numérico de la carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}