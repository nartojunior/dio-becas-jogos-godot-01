let score, level

/**
 * Se vitórias for menor do que 10 = Ferro
 * Se vitórias for entre 11 e 20 = Bronze
 * Se vitórias for entre 21 e 50 = Prata
 * Se vitórias for entre 51 e 80 = Ouro
 * Se vitórias for entre 81 e 90 = Diamante
 * Se vitórias for entre 91 e 100= Lendário
 * Se vitórias for maior ou igual a 101 = Imortal
 */
function rankPlayer(wins, loses){

    let score = wins - loses 

    if (score <= 10) { level = "Ferro"}
    else if (score <= 20){ level = "Bronze" }
    else if (score <= 50){ level = "Prata" }
    else if (score <= 80){ level = "Ouro" }
    else if (score <= 90){ level = "Diamante" }
    else if (score <= 100){ level = "Lendário" }
    else { level = "Imortal" }

    console.log(`O Herói tem de saldo de **{${score}}** está no nível de **{${level}}**`)
}

function testRankPlayer(){
    // Amostra de xp para testes
    let scoreList = [8, 14, 44, 68, 87, 92, 110]

    console.log(`### Testando... ###`)

    let testPattern = `
    Se vitórias for menor do que 10 = Ferro
    Se vitórias for entre 11 e 20 = Bronze
    Se vitórias for entre 21 e 50 = Prata
    Se vitórias for entre 51 e 80 = Ouro
    Se vitórias for entre 81 e 90 = Diamante
    Se vitórias for entre 91 e 100= Lendário
    Se vitórias for maior ou igual a 101 = Imortal`

    console.log(testPattern + '\n')
    
    scoreList.forEach(ele => {
        console.log(`Test ${ele} >>>`)
        
        rankPlayer(ele, 0)

        console.log('Finishing Test... \n')
    });

    console.log(`### Cálculo de Rank de Jogador foi testado! ###`)
}


rankPlayer(100, 30)

console.log("mar menino")

testRankPlayer()

