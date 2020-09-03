var jogador=10, pc=150;

var rst=0;
var msg = window.document.getElementById('grid-msg')
// tesoura  1
// Spock    2
// Papel    3
// Lagarto  4
// Pedra    5

function tesoura() {
    jogador = 1;
    console.log(jogador)  
}

function spock() {
    jogador = 2;
    console.log(jogador)
}

function papel() {
    jogador = 3;
    console.log(jogador)
}

function lagarto() {
    jogador = 4;
    console.log(jogador)
}

function pedra() {
    jogador = 5;
    console.log(jogador)
}











//////////////////////////////////////////////////////////////////////////////////////// PRIMEIRO
function bigF() {
    if (jogador == 1) {

        document.getElementById('b1').style.border = "10px solid #eca922";

        pc = Math.floor(Math.random() * 5) + 1
        console.log('Jogador:', jogador)
        console.log('aleatorio:', pc)

        switch (pc) {
            case 1:
                document.getElementById('segunda').src = "images/icon-scissors.svg";
                document.getElementById('b2').style.border = "10px solid #eca922";
                break;
            case 2:
                document.getElementById('segunda').src = "images/icon-spock.svg";
                document.getElementById('b2').style.border = "10px solid #52bed1";
                break;
            case 3:
                document.getElementById('segunda').src = "images/icon-paper.svg";
                document.getElementById('b2').style.border = "10px solid #5671f5";
                break;
            case 4:
                document.getElementById('segunda').src = "images/icon-lizard.svg";
                document.getElementById('b2').style.border = "10px solid #8c5de5";
                break;
            case 5:
                document.getElementById('segunda').src = "images/icon-rock.svg";
                document.getElementById('b2').style.border = "10px solid #dd405d";
                break;
        }

        if (jogador == pc) {
            console.log('EMPATE')
            msg.innerHTML = `EMPATE`
        } else {
            switch (pc) {
                case 2:
                    console.log('Spock derrete tesoura')
                    msg.innerHTML = `Spock derrete tesoura`
                    rst = 1;
                    break;
                case 3:
                    console.log('Tesoura corta papel')
                    msg.innerHTML = `Tesoura corta papel`
                    break;
                case 4:
                    console.log('Tesoura decapita lagarto')
                    msg.innerHTML = `Tesoura decapita lagarto`
                    break;
                case 5:
                    console.log('Pedra amassa tesoura')
                    msg.innerHTML = `Pedra amassa tesoura`
                    rst = 1;
                    break;
            }
        }

        /*  
            if(rst==1){
                var res = window.document.getElementById('texto-win')
                res.innerHTML = `YOU LOSE`  
            }
    
            if (jogador == pc) {
                var res = window.document.getElementById('texto-win')
                res.innerHTML = `DRAW` 
            }
        */
    }











//////////////////////////////////////////////////////////////////////////////////////// SEGUNDO
    if (jogador == 2) {

        document.getElementById('primeiro').src = "images/icon-spock.svg";
        document.getElementById('b1').style.border = "10px solid #52bed1";

        pc = Math.floor(Math.random() * 5) + 1
        console.log('Jogador:', jogador)
        console.log('aleatorio:', pc)

        switch (pc) {
            case 1:
                document.getElementById('segunda').src = "images/icon-scissors.svg";
                document.getElementById('b2').style.border = "10px solid #eca922";
                break;
            case 2:
                document.getElementById('segunda').src = "images/icon-spock.svg";
                document.getElementById('b2').style.border = "10px solid #52bed1";
                break;
            case 3:
                document.getElementById('segunda').src = "images/icon-paper.svg";
                document.getElementById('b2').style.border = "10px solid #5671f5";
                break;
            case 4:
                document.getElementById('segunda').src = "images/icon-lizard.svg";
                document.getElementById('b2').style.border = "10px solid #8c5de5";
                break;
            case 5:
                document.getElementById('segunda').src = "images/icon-rock.svg";
                document.getElementById('b2').style.border = "10px solid #dd405d";
                break;
        }

        if (jogador == pc) {
            console.log('EMPATE')
            msg.innerHTML = `EMPATE`
        } else {
            switch (pc) {
                case 1:
                    console.log('Spock derrete tesoura')
                    msg.innerHTML = `Spock derrete tesoura`
                    break;
                case 3:
                    console.log('Papel refuta Spock')
                    msg.innerHTML = `Papel refuta Spock`
                    //rst = 1;
                    break;
                case 4:
                    console.log('Lagarto envenena Spock')
                    msg.innerHTML = `Lagarto envenena Spock`
                    //rst = 1;
                    break;
                case 5:
                    console.log('Spock vaporiza pedra')
                    msg.innerHTML = `Spock vaporiza pedra`
                    break;
            }
        }

        /*  
            if(rst==1){
                var res = window.document.getElementById('texto-win')
                res.innerHTML = `YOU LOSE`  
            }
        
            if (jogador == pc) {
                var res = window.document.getElementById('texto-win')
                res.innerHTML = `DRAW` 
            }
        */
    }











//////////////////////////////////////////////////////////////////////////////////////// TERCEIRO
    if (jogador == 3) {

        document.getElementById('primeiro').src = "images/icon-paper.svg";
        document.getElementById('b1').style.border = "10px solid #5671f5";

        pc = Math.floor(Math.random() * 5) + 1
        console.log('Jogador:', jogador)
        console.log('aleatorio:', pc)

        switch (pc) {
            case 1:
                document.getElementById('segunda').src = "images/icon-scissors.svg";
                document.getElementById('b2').style.border = "10px solid #eca922";
                break;
            case 2:
                document.getElementById('segunda').src = "images/icon-spock.svg";
                document.getElementById('b2').style.border = "10px solid #52bed1";
                break;
            case 3:
                document.getElementById('segunda').src = "images/icon-paper.svg";
                document.getElementById('b2').style.border = "10px solid #5671f5";
                break;
            case 4:
                document.getElementById('segunda').src = "images/icon-lizard.svg";
                document.getElementById('b2').style.border = "10px solid #8c5de5";
                break;
            case 5:
                document.getElementById('segunda').src = "images/icon-rock.svg";
                document.getElementById('b2').style.border = "10px solid #dd405d";
                break;
        }

        if (jogador == pc) {
            console.log('EMPATE')
            msg.innerHTML = `EMPATE`
        } else {
            switch (pc) {
                case 1:
                    console.log('Tesoura corta papel')
                    msg.innerHTML = `Tesoura corta papel`
                    rst = 1;
                    break;
                case 2:
                    console.log('Papel refuta Spock')
                    msg.innerHTML = `Papel refuta Spock`
                    break;
                case 4:
                    console.log('Lagarto come papel')
                    msg.innerHTML = `Lagarto come papel`
                    rst = 1;
                    break;
                case 5:
                    console.log('Papel cobre pedra')
                    msg.innerHTML = `Papel cobre pedra`
                    break;
            }
        }

        /*
            if(rst==1){
                var res = window.document.getElementById('texto-win')
                res.innerHTML = `YOU LOSE`  
            }
        
            if (jogador == pc) {
                var res = window.document.getElementById('texto-win')
                res.innerHTML = `DRAW` 
            }
        */
    }











//////////////////////////////////////////////////////////////////////////////////////// QUARTO
    if (jogador == 4) {

        document.getElementById('primeiro').src = "images/icon-lizard.svg";
        document.getElementById('b1').style.border = "10px solid #8c5de5";

        pc = Math.floor(Math.random() * 5) + 1
        console.log('Jogador:', jogador)
        console.log('aleatorio:', pc)

        switch (pc) {
            case 1:
                document.getElementById('segunda').src = "images/icon-scissors.svg";
                document.getElementById('b2').style.border = "10px solid #eca922";
                break;
            case 2:
                document.getElementById('segunda').src = "images/icon-spock.svg";
                document.getElementById('b2').style.border = "10px solid #52bed1";
                break;
            case 3:
                document.getElementById('segunda').src = "images/icon-paper.svg";
                document.getElementById('b2').style.border = "10px solid #5671f5";
                break;
            case 4:
                document.getElementById('segunda').src = "images/icon-lizard.svg";
                document.getElementById('b2').style.border = "10px solid #8c5de5";
                break;
            case 5:
                document.getElementById('segunda').src = "images/icon-rock.svg";
                document.getElementById('b2').style.border = "10px solid #dd405d";
                break;
        }

        if (jogador == pc) {
            console.log('EMPATE')
            msg.innerHTML = `EMPATE`
        } else {
            switch (pc) {
                case 1:
                    console.log('Tesoura decapita lagarto')
                    msg.innerHTML = `Tesoura decapita lagarto`
                    //rst = 1;
                    break;
                case 2:
                    console.log('Lagarto envenena Spock')
                    msg.innerHTML = `Lagarto envenena Spock`
                    break;
                case 3:
                    console.log('Lagarto come papel')
                    msg.innerHTML = `Lagarto come papel`
                    break;
                case 5:
                    console.log('Pedra esmaga lagarto')
                    msg.innerHTML = `Pedra esmaga lagarto`
                    //rst = 1;
                    break;
            }
        }

        /*
        if(rst==1){
            var res = window.document.getElementById('texto-win')
            res.innerHTML = `YOU LOSE`  
        }
    
        if (jogador == pc) {
            var res = window.document.getElementById('texto-win')
            res.innerHTML = `DRAW` 
        }
        */
    }











//////////////////////////////////////////////////////////////////////////////////////// QUINTO
    if (jogador == 5) {

        document.getElementById('primeiro').src = "images/icon-rock.svg";
        document.getElementById('b1').style.border = "10px solid #dd405d";

        pc = Math.floor(Math.random() * 5) + 1
        console.log('Jogador:', jogador)
        console.log('aleatorio:', pc)

        //estética
        switch (pc) {
            case 1:
                document.getElementById('segunda').src = "images/icon-scissors.svg";
                document.getElementById('b2').style.border = "10px solid #eca922";
                break;
            case 2:
                document.getElementById('segunda').src = "images/icon-spock.svg";
                document.getElementById('b2').style.border = "10px solid #52bed1";
                break;
            case 3:
                document.getElementById('segunda').src = "images/icon-paper.svg";
                document.getElementById('b2').style.border = "10px solid #5671f5";
                break;
            case 4:
                document.getElementById('segunda').src = "images/icon-lizard.svg";
                document.getElementById('b2').style.border = "10px solid #8c5de5";
                break;
            case 5:
                document.getElementById('segunda').src = "images/icon-rock.svg";
                document.getElementById('b2').style.border = "10px solid #dd405d";
                break;
        }

        if (jogador == pc) {
            console.log('EMPATE')
            msg.innerHTML = `EMPATE`
        } else {
            switch (pc) {
                case 1:
                    console.log('Pedra amassa tesoura')
                    msg.innerHTML = `Pedra amassa tesoura`
                    break;
                case 2:
                    console.log('Spock vaporiza pedra')
                    msg.innerHTML = `Spock vaporiza pedra`
                    //rst = 1;
                    break;
                case 3:
                    console.log('Papel cobre pedra')
                    msg.innerHTML = `Papel cobre pedra`
                    //rst = 1;
                    break;
                case 4:
                    console.log('Pedra esmaga lagarto')
                    msg.innerHTML = `Pedra esmaga lagarto`
                    break;
            }
        }

        /*
        if(rst==1){
            var res = window.document.getElementById('texto-win')
            res.innerHTML = `YOU LOSE`  
        }

        if (jogador == pc) {
            var res = window.document.getElementById('texto-win')
            res.innerHTML = `DRAW` 
        }
        */

    }
}
//ESSE ULTIMO FECHA A BIG FUNCTION
