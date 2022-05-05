
var filters = document.querySelectorAll(".filter");
for(button of filters) {
  button.onclick = function() {
    for(elm of this.parentElement.parentElement.parentElement.querySelectorAll("[data-dist]")) {
      if(this.getAttribute("data-target") == "all" || elm.getAttribute("data-dist").replace(/\s/g, "").split(",").indexOf(this.getAttribute("data-target")) != -1) {
        elm.classList.add("item-appeared");
      } else {
        elm.classList.remove("item-appeared");
      }
    }
  }

  if(button.getAttribute("data-target") == "all") {
    button.click();
  }
}


var navbarscroll=document.getElementById('navbar-area');
var aa = document.getElementsByClassName('a');
var toggler = document.getElementsByClassName('toggler-icon');
var ss = document.getElementById('s');
var btn = document.getElementById('navbar-btn');
window.onscroll=function () {


  for(var a of toggler) {
    for(var i of aa) {
  if (window.scrollY>=20 && window.minWidth <= 992 || window.minWidth <= 992) {
      aa.color = "black";
    }


  if (window.scrollY>=20) {
    navbarscroll.style.transition = "all .3s"
    navbarscroll.style.backgroundColor="#fff";
    navbarscroll.style.height="90px";
    navbarscroll.style.top="0px"
    navbarscroll.style.paddingTop="6px"
    navbarscroll.style.position="fixed";
    i.style.transition = "all .5s"
    i.style.color = "black";
    ss.src = "./images/logo-2.svg";
    btn.style.transition = "all .5s"
    btn.style.backgroundColor="#0067f4";
    btn.style.color="#fff";
    a.style.backgroundColor="black";
    a.style.transition = "all .5s"


}
  else {
    navbarscroll.style.backgroundColor="transparent";
    navbarscroll.style.height="100px";
    navbarscroll.style.position="absolute";
    i.style.color="#fff"
    ss.src = "./images/logo (1).svg";
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

var cards =document.getElementsByClassName('card-header');

for(var i of cards) {
  i.onclick = function (){
    let p = this.parentElement.querySelector(".collapse > p");
    if(getComputedStyle(p).maxHeight == "0px"){
      p.style.maxHeight = p.scrollHeight + "px";
    } else {
      p.style.maxHeight = "0px";
    }
  }

}

var swiper = new Swiper('.swiper-containe', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


var cards =document.querySelectorAll('.card-header > a');

for (var i of cards) {
  i.onclick =function () {
    let p = this.parentElement.nextElementSibling.querySelector('p')

    if (getComputedStyle(p).maxHeight=="0px") {
        p.style.maxHeight = p.scrollHeight + "px";
    }else {
      p.style.maxHeight = "0px";
    }
    return false;

  }
}
