score = 0;
cross =  true;

document.onkeydown = function(e){
   console.log(e.keyCode)
   if (e.keyCode == 38) {

     mc = document.querySelector('.prince');
   mc.classList.add('playerAni')

  
   setTimeout(() => {
      mc.classList.remove('playerAni')
   }, 700);
   }
   
   if (e.keyCode == 39){
      mc = document.querySelector('.prince');
      playerX = parseInt(window.getComputedStyle(mc , null).getPropertyValue('left'));
      mc.style.left = playerX + 112 + 'px'
   }
   if (e.keyCode == 37){
      mc = document.querySelector('.prince');
      playerX = parseInt(window.getComputedStyle(mc , null).getPropertyValue('left'));
      mc.style.left = playerX - 112 + 'px'
   }
  
 
   

}

setInterval(() => {
   mc = document.querySelector('.prince');
   obstacle =  document.querySelector('.books');
   gameOver = document.querySelector('.gameOver');
  
   scorecont = document.querySelector('.scorecont');
   mx = parseInt(window.getComputedStyle(mc , null).getPropertyValue('left'));
   my = parseInt(window.getComputedStyle(mc , null).getPropertyValue('top'));

   ox = parseInt(window.getComputedStyle(obstacle , null).getPropertyValue('left'))
   oy = parseInt(window.getComputedStyle(obstacle , null).getPropertyValue('top'));

   diffX = Math.abs(mx - ox) ;
diffY = Math.abs( my - oy );




if (diffX < 80 && diffY < 180) {
   gameOver.style.visibility = 'visible';
   scorecont.style.visibility = 'visible';
   obstacle.classList.remove('obsanimation')
   mc.classList.remove('playerAni');

}
else if(diffX <90 && cross){
   score+= 1;
   cross = false;
   updateScore(score);
   setTimeout(() => {
      cross = true;
   }, 1000);
}
}, 100);


function updateScore(score){
   scorecont.innerHTML = "Your Score :" + '' + score
}