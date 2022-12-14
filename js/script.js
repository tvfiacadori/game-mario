const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const jump = () => {
  mario.classList.add('jump');


  setTimeout(( ) => {
  
  mario.classList.remove('jump');
  }, 500);
             
 }

 const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  //console.log(pipePosition);

  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' , '');


  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 90) {
    
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './img/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';
    gameOver()
    
    clearInterval(loop);

    //console.log(loop);
  }

 }, 10);

document.addEventListener('keydown', jump);

function gameOver(){
  let gameboard = document.querySelector(".game-board")
  let gameOver = document.createElement('div')
  gameOver.classList.add("gameOver")

  gameboard.appendChild(gameOver)
}