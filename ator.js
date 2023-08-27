//código do ator
let yAtor = 373;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 20, 20);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    yAtor += 3;
  }
  }
}

//colisão do ator com os carros
function verificaColisao(){
   //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter) 
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15)
  if (colisao){
    voltaAtorParaPosicaoInicial();
    somDaColisao.play();
    if (pontosMaiorQueZero()){
      meusPontos -= 1;
    }
  }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 373;
}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  text (meusPontos, width/5, 27)
  fill(255, 240, 60)
}

function marcaPontos(){
  if(yAtor < 15){
  meusPontos += 1;
    somDoPonto.play();
  voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}