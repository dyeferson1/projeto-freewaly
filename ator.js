//codigos do ator
yAtor = 366; 
xAtor = 100

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown (UP_ARROW)){
    yAtor -= 3; 
  } 
  if (keyIsDown (DOWN_ARROW)){
    yAtor += 3;
  }
}