// MENU BLOCK FUNCTION HIDDEN
var buttonUp = document.getElementById('button-Up');
var menuBlock = document.getElementById('menu-block');
window.addEventListener("scroll", bringmenu);

function bringmenu() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        buttonUp.style.display = "block";
        menuBlock.style.left = "-100%";
        menuBlock.style.animation = "hideMenuBlock 0.2s ease"
    } else {
        buttonUp.style.display = "none";
        menuBlock.style.left = "-5%";
        menuBlock.style.animation = "showMenuBlock 0.4s ease-out";
    }
}
// BURGER MENU
// function otworz(){
//   var x = document.getElementById("mobilemenu");
  
  
//      if(x.style.display == "none"){
//       x.style.display = "block";
      
//   }else{
//       x.style.display = "none";
      
//   }
// }
// CONTACT SCRIPT MENU
function menuClick(){
  var lineOne = document.getElementById('hamburger-line0');
   var lineTwo = document.getElementById('hamburger-line1');
   var lineThree = document.getElementById('hamburger-line2');

   if((lineOne.style.display == 'none')|| (lineTwo.style.transform == ' translate(-5px,35px) rotate(-45deg)') || (lineThree.style.transform == 'translate(-5px,0px) rotate(45deg)')){   
    miniActiveBlock();
      lineOne.style.display = 'block';
       lineOne.style.animation = 'opacity-transfrom-revers 1s';
       lineTwo.style.transform = ' translate(0px,0px) rotate(0deg)';
       lineTwo.style.animation = 'replay-rotate-one 1s';
       lineThree.style.transform = 'translate(0px,0px) rotate(0deg)';
       lineThree.style.animation = 'replay-rotate-two 1s';
   }else{
    miniActiveBlock();
    
   }
}

function miniActiveBlock(){
var animateBlockMenu = document.getElementById('blockmobile');
    if(animateBlockMenu.style.right == '10%'){
        animateBlockMenu.style.right = '-100%';
        animateBlockMenu.style.display = 'none';
        animateBlockMenu.style.animation = 'miniMenuHidden 1s linear';
    }else {
        animateBlockMenu.style.right = "0%";
        animateBlockMenu.style.display = "block";
        animateBlockMenu.style.animation = 'miniMenu 1s ease';

    }
}

//  ------------------------------------

