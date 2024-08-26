let Xp = 7500
let nome = "dereguejonhsonn "
let nivel = " "
switch(nivel){
    case Xp < 1000:
    nivel = Ferro
    case Xp > 1001 && Xp <=2000:
    nivel = Bronze
    case Xp > 2001 && Xp <=5000:
    nivel = Prata
    case Xp > 5001 && Xp <=7000:
    nivel = Ouro
    case Xp > 7001 && Xp <=8000:
    nivel = Platina
    case Xp > 8001 && Xp <=9000:
    nivel = Ascendente
    case Xp > 9001 && Xp <=10000:
    nivel = Imortal
    case Xp > 10001:
    nivel = Radiante
    
}
console.log("O Heroi de nome " + nome + "está no nivel" + nivel)
