    /* OPCOES DO PLAYER E O INIMIGO ANTES DA PARTIDA*/
let opcaoPlayer = '';
let opcaoEnemy;

let rounds = 1;

    /* MARCAM OS PONTOS AINDA NO JAVASCRIPT*/
let pontosEnemy = 0;
let pontosPlayer = 0;

    /* VARIAVEIS PARA SET INTERVAL */
let pontuacaoPlayer;
let pontuacaoEnemy;

    /* BOTÃO QUE INICIA AS CONTAS*/
let playBtt = document.querySelector('.playBtt');

let _playerImg = document.querySelector('.srcPlayer');
let _enemyImg = document.querySelector('.srcEnemy');



    /* AQUI ATUALIZA A CADA 300MS A PONTUAÇÃO NA TELA*/
pontuacaoPlayer = setInterval((i) => {
    let pontosHTML;
    i = pontosPlayer;
    pontosHTML = document.querySelector('.playerPoints').textContent = i;
}, 300);

pontuacaoEnemy = setInterval((i) => {
    let pontosHTML;
    i = pontosEnemy;
    pontosHTML = document.querySelector('.enemyPoints').textContent = i;
}, 300);


    /* QUANDO O PLAYER APERTAR NO BOTÃO: */
playBtt.addEventListener('click', ()=>{
    /* SÃO 3 ROUNDS, QUANDO ACABAREM O RESULTADO É DADO */
    if(rounds <= 3){
        if(opcaoPlayer !== ''){
            enemy();
            gameChoices();
            rounds += 1;
        }else{
            window.alert('Selecione o que você vai jogar');
        }
    /* AQUI CHAMA A FUNCAO FINAL E REINICIA O JOGO */
    }else{
        endGame();
    }  
});



    /* A OPÇÃO DO INIMIGO É ALEATÓRIA E VAI DE 0 A 2 */
function enemy(){
    opcaoEnemy = Math.floor(Math.random() * 3);
    if(opcaoEnemy == 0){
        _enemyImg.classList.add('pedra');
        _enemyImg.classList.remove('papel');
        _enemyImg.classList.remove('tesoura');
    }
    if(opcaoEnemy == 1){
        _enemyImg.classList.remove('pedra');
        _enemyImg.classList.add('papel');
        _enemyImg.classList.remove('tesoura');
    }
    if(opcaoEnemy == 2){
        _enemyImg.classList.remove('pedra');
        _enemyImg.classList.remove('papel');
        _enemyImg.classList.add('tesoura');
    }

    console.log('opcao do Inimigo: '+opcaoEnemy);
}
    /* A OPÇÃO QUE O PLAYER SELECIONA TAMBÉM DE 0 A 2 */
function choicePlayer(c){
    opcaoPlayer = c;
    if(opcaoPlayer == '0'){
        _playerImg.classList.add('pedra');
        _playerImg.classList.remove('papel');
        _playerImg.classList.remove('tesoura');
    }
    if(opcaoPlayer == '1'){
        _playerImg.classList.remove('pedra');
        _playerImg.classList.add('papel');
        _playerImg.classList.remove('tesoura');
    }
    if(opcaoPlayer == '2'){
        _playerImg.classList.remove('pedra');
        _playerImg.classList.remove('papel');
        _playerImg.classList.add('tesoura');
    }
    console.log('opcao do player: '+opcaoPlayer);
}


    /* AQUI RODA O JOGO, OPCÕES DE EMPATE, PERDA E GANHO */
function gameChoices(){

    switch(opcaoEnemy){
        case 0:
            if(opcaoPlayer == '0'){
                console.log('empate: pedra / pedra');
                window.alert('empate! jogue novamente');
                rounds -= 1;
            }
            if(opcaoPlayer == '1'){
                console.log('ganhou: pedra / papel');
                window.alert('você ganhou 1 ponto');
                pontosPlayer += 1;
            }
            if(opcaoPlayer == '2'){
                console.log('perdeu: pedra / tesoura');
                window.alert('o inimigo marcou 1 ponto');
                pontosEnemy += 1;
            }
        break;
        case 1:
            if(opcaoPlayer == '0'){
                console.log('perdeu: papel / pedra');
                window.alert('o inimigo marcou 1 ponto');
                pontosEnemy += 1;
            }
            if(opcaoPlayer == '1'){
                console.log('empate: papel / papel');
                window.alert('empate! jogue novamente');
                rounds -= 1;
            }
            if(opcaoPlayer == '2'){
                console.log('ganhou: papel / tesoura');
                window.alert('você ganhou 1 ponto');
                pontosPlayer += 1;
            }
        break;
        case 2:
            if(opcaoPlayer == '0'){
                console.log('ganhou: tesoura / pedra');
                window.alert('você ganhou 1 ponto');
                pontosPlayer += 1;
            }
            if(opcaoPlayer == '1'){
                console.log('perdeu: tesoura / papel');
                window.alert('o inimigo marcou 1 ponto');
                pontosEnemy += 1;
            }
            if(opcaoPlayer == '2'){
                console.log('empate: tesoura / tesoura');
                window.alert('empate! jogue novamente');
                rounds -= 1;
            }
        break;
    }

}


    /* FINAL DO JOGO, OS 3 ROUNDS SE PASSARAM */

function endGame(){
    /* CASO O INIMIGO GANHE */
    if(pontosEnemy > pontosPlayer){
        window.alert('Você perdeu, troxa');
        console.log(rounds, 'Player: '+pontosPlayer+'  Inimigo: '+pontosEnemy);
        rounds = 1;
        pontosEnemy = 0;
        pontosPlayer = 0;
    }
    /* CASO O PLAYER GANHE */
    if(pontosEnemy < pontosPlayer){
        window.alert('Você ganhou campeão!!!');

        opcaoPlayer = '';

        _enemyImg.classList.remove('pedra');
        _enemyImg.classList.remove('papel');
        _enemyImg.classList.remove('tesoura');

        _playerImg.classList.remove('pedra');
        _playerImg.classList.remove('papel');
        _playerImg.classList.remove('tesoura');

        console.log(rounds, 'Player: '+pontosPlayer+'  Inimigo: '+pontosEnemy);
        rounds = 1;
        pontosEnemy = 0;
        pontosPlayer = 0;
    }
    /* CASO EMPATE, O JOGO CONTINUA */
    if(pontosEnemy === pontosPlayer && rounds > 1){
        window.alert('EMPATE JOGA DENOVO');
    }
}