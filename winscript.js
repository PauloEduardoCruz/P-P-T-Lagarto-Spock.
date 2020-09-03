var jogador=10, pc=150, pontos=0;
console.log("pontos: ", pontos)

var rst=0;
var msg = window.document.getElementById('grid-msg')
var pts = window.document.getElementById('quadrado-score')
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

        document.getElementById('b1').style.border = "5px solid #5ba700";
        document.getElementById('b2').style.border = "5px solid #dd405d";

        pc = Math.floor(Math.random() * 5) + 1
        console.log('Jogador:', jogador)
        console.log('aleatorio:', pc)

        switch (pc) {
            case 1:
                document.getElementById('segunda').src = "images/icon-scissors.svg";
                break;
            case 2:
                document.getElementById('segunda').src = "images/icon-spock.svg";
                break;
            case 3:
                document.getElementById('segunda').src = "images/icon-paper.svg";
                break;
            case 4:
                document.getElementById('segunda').src = "images/icon-lizard.svg";
                break;
            case 5:
                document.getElementById('segunda').src = "images/icon-rock.svg";
                break;
        }

        rst = 0;
        if (jogador == pc) {
            console.log('EMPATE')
            msg.innerHTML = `EMPATE`
        } else {
            rst = 7;
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

        document.getElementById('b2').style.boxShadow = "0px 0px 20px 0px #00000080";
        document.getElementById('b1').style.boxShadow = "0px 0px 0px 1px #fff, 0px 0px 20px 0px #00000080";
        
        if(rst==7){
            pontos++
        }

        if(rst==1){
            //Perde recebe isso
            document.getElementById('b1').style.boxShadow = "0px 0px 20px 0px #00000080";
            //ganha recebe isso
            document.getElementById('b2').style.boxShadow = "0px 0px 0px 1px #fff, 0px 0px 20px 0px #00000080";
            pontos--
        }

        if (jogador == pc) {
            document.getElementById('b1').style.boxShadow = "0px 0px 20px 0px #00000080";
            document.getElementById('b2').style.boxShadow = "0px 0px 20px 0px #00000080";
        }
        //mudando pontos
        console.log("pontos: ", pontos)
        pts.innerHTML = `${pontos}`
    }











//////////////////////////////////////////////////////////////////////////////////////// SEGUNDO
    if (jogador == 2) {

        document.getElementById('primeiro').src = "images/icon-spock.svg";

        document.getElementById('b1').style.border = "5px solid #5ba700";
        document.getElementById('b2').style.border = "5px solid #dd405d";

        pc = Math.floor(Math.random() * 5) + 1
        console.log('Jogador:', jogador)
        console.log('aleatorio:', pc)

        switch (pc) {
            case 1:
                document.getElementById('segunda').src = "images/icon-scissors.svg";
                break;
            case 2:
                document.getElementById('segunda').src = "images/icon-spock.svg";
                break;
            case 3:
                document.getElementById('segunda').src = "images/icon-paper.svg";
                break;
            case 4:
                document.getElementById('segunda').src = "images/icon-lizard.svg";
                break;
            case 5:
                document.getElementById('segunda').src = "images/icon-rock.svg";
                break;
        }

        rst = 0;
        if (jogador == pc) {
            console.log('EMPATE')
            msg.innerHTML = `EMPATE`
        } else {
            rst = 7;
            switch (pc) {
                case 1:
                    console.log('Spock derrete tesoura')
                    msg.innerHTML = `Spock derrete tesoura`
                    break;
                case 3:
                    console.log('Papel refuta Spock')
                    msg.innerHTML = `Papel refuta Spock`
                    rst = 1;
                    break;
                case 4:
                    console.log('Lagarto envenena Spock')
                    msg.innerHTML = `Lagarto envenena Spock`
                    rst = 1;
                    break;
                case 5:
                    console.log('Spock vaporiza pedra')
                    msg.innerHTML = `Spock vaporiza pedra`
                    break;
            }
        }

        document.getElementById('b2').style.boxShadow = "0px 0px 20px 0px #00000080";
        document.getElementById('b1').style.boxShadow = "0px 0px 0px 1px #fff, 0px 0px 20px 0px #00000080";
        
        if(rst==7){
            pontos++
        }

        if(rst==1){
            //Perde recebe isso
            document.getElementById('b1').style.boxShadow = "0px 0px 20px 0px #00000080";
            //ganha recebe isso
            document.getElementById('b2').style.boxShadow = "0px 0px 0px 1px #fff, 0px 0px 20px 0px #00000080";
            pontos--
        }

        if (jogador == pc) {
            document.getElementById('b1').style.boxShadow = "0px 0px 20px 0px #00000080";
            document.getElementById('b2').style.boxShadow = "0px 0px 20px 0px #00000080";
        }

        //mudando pontos
        console.log("pontos: ", pontos)
        pts.innerHTML = `${pontos}`
    }











//////////////////////////////////////////////////////////////////////////////////////// TERCEIRO
    if (jogador == 3) {

        document.getElementById('primeiro').src = "images/icon-paper.svg";

        document.getElementById('b1').style.border = "5px solid #5ba700";
        document.getElementById('b2').style.border = "5px solid #dd405d";

        pc = Math.floor(Math.random() * 5) + 1
        console.log('Jogador:', jogador)
        console.log('aleatorio:', pc)

        switch (pc) {
            case 1:
                document.getElementById('segunda').src = "images/icon-scissors.svg";
                break;
            case 2:
                document.getElementById('segunda').src = "images/icon-spock.svg";
                break;
            case 3:
                document.getElementById('segunda').src = "images/icon-paper.svg";
                break;
            case 4:
                document.getElementById('segunda').src = "images/icon-lizard.svg";
                break;
            case 5:
                document.getElementById('segunda').src = "images/icon-rock.svg";
                break;
        }

        rst = 0;
        if (jogador == pc) {
            console.log('EMPATE')
            msg.innerHTML = `EMPATE`
        } else {
            rst = 7;
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

        document.getElementById('b2').style.boxShadow = "0px 0px 20px 0px #00000080";
        document.getElementById('b1').style.boxShadow = "0px 0px 0px 1px #fff, 0px 0px 20px 0px #00000080";
        
        if(rst==7){
            pontos++
        }

        if(rst==1){
            //Perde recebe isso
            document.getElementById('b1').style.boxShadow = "0px 0px 20px 0px #00000080";
            //ganha recebe isso
            document.getElementById('b2').style.boxShadow = "0px 0px 0px 1px #fff, 0px 0px 20px 0px #00000080";
            pontos--
        }

        if (jogador == pc) {
            document.getElementById('b1').style.boxShadow = "0px 0px 20px 0px #00000080";
            document.getElementById('b2').style.boxShadow = "0px 0px 20px 0px #00000080";
        }
        //mudando pontos
        console.log("pontos: ", pontos)
        pts.innerHTML = `${pontos}`
    }











//////////////////////////////////////////////////////////////////////////////////////// QUARTO
    if (jogador == 4) {

        document.getElementById('primeiro').src = "images/icon-lizard.svg";

        document.getElementById('b1').style.border = "5px solid #5ba700";
        document.getElementById('b2').style.border = "5px solid #dd405d";

        pc = Math.floor(Math.random() * 5) + 1
        console.log('Jogador:', jogador)
        console.log('aleatorio:', pc)

        switch (pc) {
            case 1:
                document.getElementById('segunda').src = "images/icon-scissors.svg";
                break;
            case 2:
                document.getElementById('segunda').src = "images/icon-spock.svg";
                break;
            case 3:
                document.getElementById('segunda').src = "images/icon-paper.svg";
                break;
            case 4:
                document.getElementById('segunda').src = "images/icon-lizard.svg";
                break;
            case 5:
                document.getElementById('segunda').src = "images/icon-rock.svg";
                break;
        }

        rst = 0;
        if (jogador == pc) {
            console.log('EMPATE')
            msg.innerHTML = `EMPATE`
        } else {
            rst = 7;
            switch (pc) {
                case 1:
                    console.log('Tesoura decapita lagarto')
                    msg.innerHTML = `Tesoura decapita lagarto`
                    rst = 1;
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
                    rst = 1;
                    break;
            }
        }

        document.getElementById('b2').style.boxShadow = "0px 0px 20px 0px #00000080";
        document.getElementById('b1').style.boxShadow = "0px 0px 0px 1px #fff, 0px 0px 20px 0px #00000080";
        
        if(rst==7){
            pontos++
        }

        if(rst==1){
            //Perde recebe isso
            document.getElementById('b1').style.boxShadow = "0px 0px 20px 0px #00000080";
            //ganha recebe isso
            document.getElementById('b2').style.boxShadow = "0px 0px 0px 1px #fff, 0px 0px 20px 0px #00000080";
            pontos--
        }

        if (jogador == pc) {
            document.getElementById('b1').style.boxShadow = "0px 0px 20px 0px #00000080";
            document.getElementById('b2').style.boxShadow = "0px 0px 20px 0px #00000080";
        }
        //mudando pontos
        console.log("pontos: ", pontos)
        pts.innerHTML = `${pontos}`
    }











//////////////////////////////////////////////////////////////////////////////////////// QUINTO
    if (jogador == 5) {

        document.getElementById('primeiro').src = "images/icon-rock.svg";

        document.getElementById('b1').style.border = "5px solid #5ba700";
        document.getElementById('b2').style.border = "5px solid #dd405d";



        pc = Math.floor(Math.random() * 5) + 1
        console.log('Jogador:', jogador)
        console.log('aleatorio:', pc)

        //estética
        switch (pc) {
            case 1:
                document.getElementById('segunda').src = "images/icon-scissors.svg";
                break;
            case 2:
                document.getElementById('segunda').src = "images/icon-spock.svg";
                break;
            case 3:
                document.getElementById('segunda').src = "images/icon-paper.svg";
                break;
            case 4:
                document.getElementById('segunda').src = "images/icon-lizard.svg";
                break;
            case 5:
                document.getElementById('segunda').src = "images/icon-rock.svg";
                break;
        }

        rst = 0;
        if (jogador == pc) {
            console.log('EMPATE')
            msg.innerHTML = `EMPATE`
        } else {
            rst = 7;
            switch (pc) {
                case 1:
                    console.log('Pedra amassa tesoura')
                    msg.innerHTML = `Pedra amassa tesoura`
                    break;
                case 2:
                    console.log('Spock vaporiza pedra')
                    msg.innerHTML = `Spock vaporiza pedra`
                    rst = 1;
                    break;
                case 3:
                    console.log('Papel cobre pedra')
                    msg.innerHTML = `Papel cobre pedra`
                    rst = 1;
                    break;
                case 4:
                    console.log('Pedra esmaga lagarto')
                    msg.innerHTML = `Pedra esmaga lagarto`
                    break;
            }
        }


        document.getElementById('b2').style.boxShadow = "0px 0px 20px 0px #00000080";
        document.getElementById('b1').style.boxShadow = "0px 0px 0px 1px #fff, 0px 0px 20px 0px #00000080";
        
        if(rst==7){
            pontos++
        }

        if(rst==1){
            //Perde recebe isso
            document.getElementById('b1').style.boxShadow = "0px 0px 20px 0px #00000080";
            //ganha recebe isso
            document.getElementById('b2').style.boxShadow = "0px 0px 0px 1px #fff, 0px 0px 20px 0px #00000080";
            pontos--
        }

        if (jogador == pc) {
            document.getElementById('b1').style.boxShadow = "0px 0px 20px 0px #00000080";
            document.getElementById('b2').style.boxShadow = "0px 0px 20px 0px #00000080";
        }
        //mudando pontos
        console.log("pontos: ", pontos)
        pts.innerHTML = `${pontos}`

    }
}
//ESSE ULTIMO FECHA A BIG FUNCTION
