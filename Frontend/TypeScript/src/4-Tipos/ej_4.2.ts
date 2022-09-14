function padLeft(value: string, padding: number | string): string {
    // si padding es un numero, return `${Array(padding + 1).join(' ')}${value}`
    // si padding es una cadena, return padding + value
    if(typeof padding === 'number'){
        return `${Array(padding + 1).join(' ')}${value}`;
    }
    if(typeof padding === 'string'){
        return `${padding} ${value}`;
    }
    // No uso else, ya que al transpilar a js podria aceptar cualqueir tipo de dato,
    // por lo que funcionaria de una manera inesperada.
    // Cuando en js se manda un tipo incorrecto, devuelvo una cadena vacia
    return '';
}

console.log('[Ejercicio 4.2]', `
    ${padLeft('', 0)}
    ${padLeft('', '')}
    ${padLeft('', '')}
    ${padLeft('', '')}
    ${padLeft('', '')}
    `);