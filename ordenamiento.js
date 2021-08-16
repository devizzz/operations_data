

intercambio = (data) => {

    for (let i = 0; i < data.length - 1; i++)
        for (let j = i + 1; j < data.length; j++)
            if (data[i].name > data[j].name) {
                let aux = data[i];
                data[i] = data[j];
                data[i]["index"] = i;
                data[j] = aux;
                data[j]["index"] = j;
            }

    return data;
}

insersion = (data) => {
    for(let index = 1; index < data.length; index ++){
        let valor = data[index];
        let subIndex = index - 1;
        while (subIndex >= 0)
        {
            if(valor.name < data[subIndex].name)
            {
                data[subIndex+1] = data[subIndex];
                data[subIndex+1]["index"] = subIndex+1;
                data[subIndex] = valor;
                data[subIndex]["index"] = subIndex;
                subIndex = subIndex - 1;
            }
            else 
                break;
        }
    }

    return data;
}

quicksort = (data) => {

    if (data.length < 1)
        return [];

    let izquierda = [];
    let derecha = [];
    let pivote = data[0];

    for (let index = 1; index < data.length; index++) {
        if (data[index].name < pivote.name)
            izquierda.push(data[index]);
        else
            derecha.push(data[index]);
    }

    return [].concat(quicksort(izquierda), pivote, quicksort(derecha));
}

module.exports = { intercambio, insersion, quicksort };