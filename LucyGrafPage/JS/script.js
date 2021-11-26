// MENU BLOCK FUNCTION HIDDEN
var menuBlock = document.getElementById('menu-block');
window.addEventListener("scroll", bringmenu);

function bringmenu() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        menuBlock.style.left = "-100%";
        menuBlock.style.animation = "hideMenuBlock 0.2s ease"
    } else {
        menuBlock.style.left = "-5%";
        menuBlock.style.animation = "showMenuBlock 0.4s ease-out";
    }
}
// BURGER MENU
function otworz(){
  var x = document.getElementById("mobilemenu");
  
  
     if(x.style.display == "none"){
      x.style.display = "block";
      
  }else{
      x.style.display = "none";
      
  }
}

function menuClick(){
  var lineOne = document.getElementById('hamburger-line0');
   var lineTwo = document.getElementById('hamburger-line1');
   var lineThree = document.getElementById('hamburger-line2');

   if((lineOne.style.display == 'none')|| (lineTwo.style.transform == ' translate(-5px,35px) rotate(-45deg)') || (lineThree.style.transform == 'translate(-5px,0px) rotate(45deg)')|| (otworz())){
      
      otworz();           
       lineOne.style.display = 'block';
       lineOne.style.animation = 'opacity-transfrom-revers 1s';
       lineTwo.style.transform = ' translate(0px,0px) rotate(0deg)';
       lineTwo.style.animation = 'replay-rotate-one 1s';
       lineThree.style.transform = 'translate(0px,0px) rotate(0deg)';
       lineThree.style.animation = 'replay-rotate-two 1s';
   }else{

       lineOne.style.display = 'none';
       lineOne.style.animation = 'opacity-transfrom 1.5s';
       lineTwo.style.transform = ' translate(-5px,10px) rotate(-45deg)';
       lineTwo.style.animation = 'rotate-one 1s';
      lineThree.style.transform = 'translate(-5px,-10px) rotate(45deg)';
       lineThree.style.animation = 'rotate-two 1s';
   }
}


