// [no editar] (pretender que esto proviene de una version externa de la
// biblioteca `foo.d.ts`)
interface Ciudad {
    nombre: string;
}
// [/no editar]

interface Coords{
    latitud: number;
    longitud: number;
}

interface CiudadCoords extends Ciudad {
    coords: Coords;
}

const montreal = {
    coords: {
        latitud: 42.332,
        longitud: -73.324,
    },
    nombre: 'Montreal',
};

const tampa = {
    coords: {
        latitud: 27.9478,
        longitud: -82.4584,
    },
    nombre: 'Tampa',
};

function informacionCiudad(ciudad: CiudadCoords) {
    const coords =
        `(${ciudad.coords.latitud.toFixed(3)}, ${ciudad.coords.longitud.toFixed(3)})`;
    return `${ciudad.nombre.toUpperCase()} se encuentra en ${coords}.`;
}

console.log('[Ejercicio 2.3]',
    `${informacionCiudad(montreal)} \n\n ${informacionCiudad(tampa)}`);