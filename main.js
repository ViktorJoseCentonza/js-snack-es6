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

function getLightestBike() {
    let lightestBike = [];
    for (let i = 0; i < bikeList.length; i++) {
        if (lightestBike == 0 || bikeList[i].peso < lightestBike.peso) {
            lightestBike = bikeList[i]
        }
    }

    return lightestBike.nome
}

console.log("snack 1---------------------------------------------------------------------------------------------------------------");
console.log(`${getLightestBike()} is the lightest bike`);
alert(`${getLightestBike()} is the lightest bike`)
console.log("snack 2---------------------------------------------------------------------------------------------------------------");


//snack 2

/*Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const soccerTeams = [
    {
        nome: "squadra1",
        punti: 0,
        'falli subiti': 0,
    },
    {
        nome: "squadra2",
        punti: 0,
        'falli subiti': 0,
    },
    {
        nome: "squadra3",
        punti: 0,
        'falli subiti': 0,
    },
    {
        nome: "squadra4",
        punti: 0,
        'falli subiti': 0,
    },
    {
        nome: "squadra5",
        punti: 0,
        'falli subiti': 0,
    },
    {
        nome: "squadra6",
        punti: 0,
        'falli subiti': 0,
    },
    {
        nome: "squadra7",
        punti: 0,
        'falli subiti': 0,
    },

]

assignRandomPoints()
assignRandomPenalties()

console.log(`this is the full soccerteam parameters`);
console.log(soccerTeams);

console.log(`this is the shortened soccerteam parameters`);
console.log(shortenSoccerTeamParameters());



//generate random points for everyteam
function assignRandomPoints() {
    for (let i = 0; i < soccerTeams.length; i++) {
        soccerTeams[i].punti = Math.floor(Math.random() * 30)
    }
}
//generate random penalties for everyteam
function assignRandomPenalties() {
    for (let i = 0; i < soccerTeams.length; i++) {
        soccerTeams[i]["falli subiti"] = Math.floor(Math.random() * 10)
    }
}
//create new array without the punti parameter
function shortenSoccerTeamParameters() {
    const shorterSoccerTeams = []
    for (let i = 0; i < soccerTeams.length; i++) {
        const { punti, ...rest } = soccerTeams[i]; //removes punti and keeps the other params in "rest"
        shorterSoccerTeams.push(rest)   //push "rest" into second array
    }

    return shorterSoccerTeams
}




array1 = [
    {
        nome: "primo",
        punti: 10,
        falli: 2,
    },
    {
        nome: "primo",
        punti: 10,
        falli: 2,
    },
    {
        nome: "primo",
        punti: 10,
        falli: 2,
    },
]
console.log(array1);

array2 = array1
console.log(array2);

for (let i = 0; i < array2.length; i++) {
    delete array2[i].punti
}
console.log(array2); 