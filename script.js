/* O jogador dois é o impar e o jogador um é o par*/



var nomeJogadorUm = "Nick"// prompt("Qual o nome do primeiro jogador?");
var nomeJogadorDois = "Davi"//prompt("Qual o nome do segundo jogador?");
var contador = 1;
var rodada = document.getElementById('JogadorDaVez');
rodada.innerHTML = nomeJogadorUm;
var listaTile = document.getElementsByClassName('tile');
var circle = 'url("img/circulo.png")';
var x = 'url("img/x.png")'
var jogadorVencedor = document.getElementById('jogadorVencedor')
var velha = true;
var j1 = document.getElementById('j1');
var j2 = document.getElementById('j2');
var pontuacaoJogadorUm = 0;
var pontuacaoJogadorDois = 0
var tempoInicial;
var idTempo = document.getElementById('tempoPartida');
Idtempo = 0;
var idRecorde = document.getElementById('tempoRecorde');
var timeRecorde = "";
var estrela = document.getElementsByClassName('estrela');
console.log(estrela[0])
console.log(estrela[1])



function reiniciar() {

  tempoInicial = new Date();
  apagarLayout()
  iniciarPartida()

}

function digitar(pontuacaoJogadorUm, pontuacaoJogadorDois) {
  j1.innerText = `${nomeJogadorUm}: ${pontuacaoJogadorUm}`
  j2.innerText = `${nomeJogadorDois}: ${pontuacaoJogadorDois}`
}

function apagarLayout() {
  for (var i = 0; i <= 8; i++) {
    listaTile[i].style.backgroundImage = "";
    jogadorVencedor.innerHTML = "";
    rodada.innerHTML = "";
  }
}

function removedor(parametro) {
  parametro.classList.remove('orange');
  parametro.removeAttribute('onclick');
}

function iniciarPartida() {
  tempoInicial = new Date();
  digitar(pontuacaoJogadorUm, pontuacaoJogadorDois)
  for (var i = 0; i <= 8; i++) {
    listaTile[i].setAttribute('onclick', 'selecionarCasa(event)');
    listaTile[i].classList.add('orange');
  }
  contador = 1
}

function trancar() {
  for (var i = 0; i <= 8; i++) {
    listaTile[i].removeAttribute('onclick');
    listaTile[i].classList.remove('orange');
  }
}

function finalizarCronometro(indice) {
  var tempoFinal = new Date();
  var calcularTempo = Math.round((tempoFinal - tempoInicial) / 1000)
  idTempo.innerText = `${calcularTempo} segundos `;
  if (velha == false) {
    if (timeRecorde == "") {
      timeRecorde = calcularTempo;
      idRecorde.innerText = `${calcularTempo} segundos`;
      estrela[0].style.visibility = "hidden";
      estrela[1].style.visibility = "hidden";
      estrela[indice].style.visibility = "visible";
    } else {
      if (calcularTempo < timeRecorde) {
        timeRecorde = calcularTempo;
        idRecorde.innerText = `${calcularTempo} segundos`;
        estrela[0].style.visibility = "hidden";
        estrela[1].style.visibility = "hidden";
        estrela[indice].style.visibility = "visible";


      }
    }
  }




}

function selecionarCasa(event) {
  var evento = event.target;

  if (contador % 2 == 0) {
    rodada.innerHTML = nomeJogadorUm;
    evento.style.backgroundImage = 'url("img/circulo.png")';
  }
  else {
    rodada.innerHTML = nomeJogadorDois;
    evento.style.backgroundImage = 'url("img/x.png")';

  }

  removedor(evento);
  contador++;


  if (listaTile[0].style.backgroundImage == circle && listaTile[1].style.backgroundImage == circle && listaTile[2].style.backgroundImage == circle || listaTile[3].style.backgroundImage == circle && listaTile[4].style.backgroundImage == circle && listaTile[5].style.backgroundImage == circle || listaTile[6].style.backgroundImage == circle && listaTile[7].style.backgroundImage == circle && listaTile[8].style.backgroundImage == circle || listaTile[0].style.backgroundImage == circle && listaTile[4].style.backgroundImage == circle && listaTile[8].style.backgroundImage == circle || listaTile[2].style.backgroundImage == circle && listaTile[4].style.backgroundImage == circle && listaTile[6].style.backgroundImage == circle || listaTile[0].style.backgroundImage == circle && listaTile[3].style.backgroundImage == circle && listaTile[6].style.backgroundImage == circle || listaTile[1].style.backgroundImage == circle && listaTile[4].style.backgroundImage == circle && listaTile[7].style.backgroundImage == circle || listaTile[2].style.backgroundImage == circle && listaTile[5].style.backgroundImage == circle && listaTile[8].style.backgroundImage == circle) {
    trancar();
    rodada.innerHTML = "";
    jogadorVencedor.innerHTML = `Jogador vencedor ${nomeJogadorDois}`;
    velha = false;
    pontuacaoJogadorDois++;
    if (contador <= 9) {
      pontuacaoJogadorDois = pontuacaoJogadorDois + 2
    }
    digitar(pontuacaoJogadorUm, pontuacaoJogadorDois)
    finalizarCronometro(1);

  }
  else if (listaTile[0].style.backgroundImage == x && listaTile[1].style.backgroundImage == x && listaTile[2].style.backgroundImage == x || listaTile[3].style.backgroundImage == x && listaTile[4].style.backgroundImage == x && listaTile[5].style.backgroundImage == x || listaTile[6].style.backgroundImage == x && listaTile[7].style.backgroundImage == x && listaTile[8].style.backgroundImage == x || listaTile[0].style.backgroundImage == x && listaTile[4].style.backgroundImage == x && listaTile[8].style.backgroundImage == x || listaTile[2].style.backgroundImage == x && listaTile[4].style.backgroundImage == x && listaTile[6].style.backgroundImage == x || listaTile[0].style.backgroundImage == x && listaTile[3].style.backgroundImage == x && listaTile[6].style.backgroundImage == x || listaTile[1].style.backgroundImage == x && listaTile[4].style.backgroundImage == x && listaTile[7].style.backgroundImage == x || listaTile[2].style.backgroundImage == x && listaTile[5].style.backgroundImage == x && listaTile[8].style.backgroundImage == x
  ) {
    trancar();
    rodada.innerHTML = "";
    jogadorVencedor.innerHTML = `Jogador vencedor ${nomeJogadorUm}`
    velha = false;
    pontuacaoJogadorUm++;
    if (contador <= 9) {
      pontuacaoJogadorUm = pontuacaoJogadorUm + 2
    }

    digitar(pontuacaoJogadorUm, pontuacaoJogadorDois)
    finalizarCronometro(0);
  }
  else if (velha == true && contador > 9) {
    jogadorVencedor.innerHTML = "Deu velha!"
    finalizarCronometro();

  }


}






