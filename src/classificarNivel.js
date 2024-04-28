let pName, xp, level

function setName(newName){
    pName = newName

    console.log(`Novo nome do jogador é {${pName}}.`)
}

function setXp(newXp){
    xp = newXp

    console.log(`Novo Xp do jogador {${pName}} é {${xp}}`)
    setLevel()
}

/**
 * Se XP for menor do que 1.000 = Ferro
 * Se XP for entre 1.001 e 2.000 = Bronze
 * Se XP for entre 2.001 e 5.000 = Prata
 * Se XP for entre 5.001 e 7.000 = Ouro
 * Se XP for entre 7.001 e 8.000 = Platina
 * Se XP for entre 8.001 e 9.000 = Ascendente
 * Se XP for entre 9.001 e 10.000= Imortal
 * Se XP for maior ou igual a 10.001 = Radiante
 */
function setLevel(){
    if (xp <= 1000) { level = "Ferro"}
    else if (xp <= 2_000){ level = "Bronze" }
    else if (xp <= 5_000){ level = "Prata" }
    else if (xp <= 7_000){ level = "Ouro" }
    else if (xp <= 8_000){ level = "Platina" }
    else if (xp <= 9_000){ level = "Ascendente" }
    else if (xp <= 10_000){ level = "Imortal" }
    else { level = "Radiante" }
}

function printPlayer(){
    console.log(`O Herói de nome **{${pName}}** está no nível de **{${level}}**`);
}

function testRankPlayer(){
    // guarda o valor de xp antes do teste para poder atribuí-lo novamente no fim do teste
    let tearDownXp = xp

    // Amostra de xp para testes
    let xpList = [12, 1320, 2012, 5200, 7801, 8532, 9432, 10001]

    console.log(`### Testando... ###`)
    setName("Narto")

    let testPattern = `
    Se XP for menor do que 1.000 = Ferro
    Se XP for entre 1.001 e 2.000 = Bronze
    Se XP for entre 2.001 e 5.000 = Prata
    Se XP for entre 5.001 e 7.000 = Ouro
    Se XP for entre 7.001 e 8.000 = Platina
    Se XP for entre 8.001 e 9.000 = Ascendente
    Se XP for entre 9.001 e 10.000= Imortal
    Se XP for maior ou igual a 10.001 = Radiante`

    console.log(testPattern + '\n')
    
    xpList.forEach(ele => {
        console.log(`Test ${ele} >>>`)
        setXp(ele)
        printPlayer()
        console.log('Finishing Test... \n')
    });
    
    console.log(`### Jogador {${pName}} foi testado! ###`)
    xp = tearDownXp
}

setName("Narto")
setXp("100")
printPlayer()

console.log("mar menino")

testRankPlayer()

