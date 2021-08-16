
binario = (objetivo, data) => {
    let epsilon = 0.01;

    let piso = 0;
    let tope = data.length;

    let resultado = Math.round((piso + tope) / 2 - epsilon);

    let name = data[resultado].name;

    while (name !== objetivo) {
        if (name > objetivo)
            tope = data[resultado].index;
        else
            piso = data[resultado].index;

        resultado = Math.round((piso + tope) / 2 - epsilon);
        name = data[resultado].name;
    }

    return resultado;
}

module.exports = { binario };