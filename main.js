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

console.log("snack 1---------------------------------------------------------------------------------------------------------------");
console.log(getHeaviestBike());
alert(getHeaviestBike())
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




function assignRandomPoints() {
    for (let i = 0; i < soccerTeams.length; i++) {
        soccerTeams[i].punti = Math.floor(Math.random() * 30)
    }
}

function assignRandomPenalties() {
    for (let i = 0; i < soccerTeams.length; i++) {
        soccerTeams[i]["falli subiti"] = Math.floor(Math.random() * 10)
    }
}

function shortenSoccerTeamParameters() {
    const shorterSoccerTeams = []
    for (let i = 0; i < soccerTeams.length; i++) {
        const { punti, ...rest } = soccerTeams[i];
        shorterSoccerTeams.push(rest)
    }

    return shorterSoccerTeams
}




