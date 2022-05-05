var navbarscroll=document.getElementById('navbar-area');
var aa = document.getElementsByClassName('a');
var toggler = document.getElementsByClassName('toggler-icon');
var ss = document.getElementById('s');
var btn = document.getElementById('navbar-btn');
window.onscroll=function () {


  for(var a of toggler) {
    for(var i of aa) {
  if (window.scrollY>=30 && window.minWidth <= 992 || window.minWidth <= 992) {
      aa.color = "black";
    }


  if (window.scrollY>=30) {
    navbarscroll.style.transition = "all .3s"
    navbarscroll.style.backgroundImage  = "linear-gradient(95deg, #5533ff 40%,#25ddf5 100%)";
    navbarscroll.style.boxShadow="0 0 7px 1px rgba(0,0,0,.1)";
    navbarscroll.style.zIndex="9999";
    navbarscroll.style.height="90px";
    navbarscroll.style.top="0px"
    navbarscroll.style.paddingTop="6px"
    navbarscroll.style.position="fixed";
    i.style.transition = "all .5s"
    a.style.transition = "all .5s"
}
  else {
    navbarscroll.style.backgroundColor="transparent";
    navbarscroll.style.backgroundImage="unset";
    navbarscroll.style.boxShadow="0 0 0px 0px rgba(0,0,0,0)";
    navbarscroll.style.height="100px";
    navbarscroll.style.position="absolute";
    i.style.color="#fff"
    btn.style.backgroundColor="#fff";
    btn.style.color="#0067f4";
    a.style.backgroundColor="#fff";
  }
}
}
}

var drow = document.getElementsByClassName('ss')[0];
var responsive = document.querySelector('#phon > ul');
var toggler = document.getElementsByClassName("toggler-icon");

drow.onclick = function() {

  document.getElementById("toggler-icon1").classList.toggle("one");
  document.getElementById("toggler-icon2").classList.toggle("tow");
  document.getElementById("toggler-icon3").classList.toggle("there");

  if(responsive.offsetHeight == 0) {
    responsive.style.maxHeight = responsive.scrollHeight + "px";
    responsive.style.paddingTop = "18px";
  } else {
    responsive.style.maxHeight = 0;
    responsive.style.paddingTop = 0;
  }

}
