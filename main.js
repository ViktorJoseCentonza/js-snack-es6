//snack 1

const bikeList = [
    {
        nome: 'bmx1',
        peso: 12,
    },
    {
        nome: 'bmx2',
        peso: 2,
    },
    {
        nome: 'bmx3',
        peso: 3,
    },
    {
        nome: 'bmx4',
        peso: 0,
    },
    {
        nome: 'bmx5',
        peso: 5,
    },
    {
        nome: 'bmx6',
        peso: 6,
    },
    {
        nome: 'bmx7',
        peso: 7,
    },
    {
        nome: 'bmx8',
        peso: 10,
    },
]

function getHeaviestBike() {
    let heaviestBike = [];
    for (let i = 0; i < bikeList.length; i++) {
        if (heaviestBike == 0 || bikeList[i].peso < heaviestBike.peso) {
            heaviestBike = bikeList[i]
        }
    }

    return heaviestBike
}


console.log(getHeaviestBike());
