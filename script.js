var jogador=10, pc=150;

console.log(jogador, pc)



console.log('aleatorio:', pc)


// tesoura  1
// Spock    2
// Papel    3
// Lagarto  4
// Pedra    5


function tesoura() {

    jogador = 1;


    pc=Math.floor(Math.random() * 5) + 1 
    console.log('Jogador:', jogador)
    console.log('aleatorio:', pc)


    if (jogador == pc) {
        console.log('EMPATE')
    } else{

        switch (pc) {
            case 2:
                console.log('Spock derrete tesoura')
                break;
            case 3:
                console.log('Tesoura corta papel')
                break;
            case 4:
                console.log('Tesoura decapita lagarto')
                break;
            case 5:
                console.log('Pedra amassa tesoura')  
                break;
            default:
                mostraDia.innerHTML = `dia FAKE du dale` 
                break;
        } 
    }
}








function spock() {

    jogador = 2;

    pc=Math.floor(Math.random() * 5) + 1 
    console.log('Jogador:', jogador)
    console.log('aleatorio:', pc)


    if (jogador == pc) {
        console.log('EMPATE')
    } else{

        switch (pc) {
            case 1:
                console.log('Spock derrete tesoura')
                break;
            case 3:
                console.log('Papel refuta Spock')
                break;
            case 4:
                console.log('Lagarto envenena Spock')
                break;
            case 5:
                console.log('Spock vaporiza pedra') 
                break;
            default:
                mostraDia.innerHTML = `dia FAKE du dale` 
                break;
        } 
    }
}









function papel() {

    jogador = 3;

    pc=Math.floor(Math.random() * 5) + 1 
    console.log('Jogador:', jogador)
    console.log('aleatorio:', pc)


    if (jogador == pc) {
        console.log('EMPATE')
    } else{

        switch (pc) {
            case 1:
                console.log('Tesoura corta papel')
                break;
            case 2:
                console.log('Papel refuta Spock')
                break;
            case 4:
                console.log('Lagarto come papel')
                break;
            case 5:
                console.log('Papel cobre pedra') 
                break;
            default:
                mostraDia.innerHTML = `dia FAKE du dale` 
                break;
        } 
    }
}









function lagarto() {

    jogador = 4;

    pc=Math.floor(Math.random() * 5) + 1 
    console.log('Jogador:', jogador)
    console.log('aleatorio:', pc)


    if (jogador == pc) {
        console.log('EMPATE')
    } else{

        switch (pc) {
            case 1:
                console.log('Tesoura decapita lagarto')
                break;
            case 2:
                console.log('Lagarto envenena Spock')
                break;
            case 3:
                console.log('Lagarto come papel')
                break;
            case 5:
                console.log('Pedra esmaga lagarto')
                break;
            default:
                mostraDia.innerHTML = `dia FAKE du dale` 
                break;
        } 
    }
}



function pedra() {

    jogador = 5;

    pc=Math.floor(Math.random() * 5) + 1 
    console.log('Jogador:', jogador)
    console.log('aleatorio:', pc)


    if (jogador == pc) {
        console.log('EMPATE')
    } else{

        switch (pc) {
            case 1:
                console.log('Pedra amassa tesoura')
                break;
            case 2:
                console.log('Spock vaporiza pedra')
                break;
            case 3:
                console.log('Papel cobre pedra')
                break;
            case 4:
                console.log('Pedra esmaga lagarto')
                break;
            default:
                mostraDia.innerHTML = `dia FAKE du dale` 
                break;
        } 
    }
}



