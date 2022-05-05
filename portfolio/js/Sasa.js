
var navbarscroll = document.getElementById('navbar-area');
var aa = document.getElementsByClassName('a');
var toggler = document.getElementsByClassName('toggler-icon');
var ss = document.getElementById('s');
var btn = document.getElementById('navbar-btn');


var drow = document.getElementsByClassName('ss')[0];
var responsive = document.querySelector('#phon > ul');
var toggler = document.getElementsByClassName("toggler-icon");

drow.onclick = function () {

  document.getElementById("toggler-icon1").classList.toggle("one");
  document.getElementById("toggler-icon2").classList.toggle("tow");
  document.getElementById("toggler-icon3").classList.toggle("there");

  if (responsive.offsetHeight == 0) {
    responsive.style.maxHeight = responsive.scrollHeight + "px";
    responsive.style.paddingTop = "18px";
  } else {
    responsive.style.maxHeight = 0;
    responsive.style.paddingTop = 0;
  }
}

var progress = document.getElementsByClassName("progress-line");
var percent = document.getElementsByClassName("counter");

window.onscroll = function () {



  if (window.scrollY >= 520) {
    progress[0].style.width = "85%";
    increaseNUmber(percent[0]);
    progress[1].style.width = "90%";
    increaseNUmber(percent[1]);
    progress[2].style.width = "80%";
    increaseNUmber(percent[2]);
    progress[3].style.width = "70%";
    increaseNUmber(percent[3]);

  }


  for (var a of toggler) {
    for (var i of aa) {
      if (window.scrollY >= 30 && window.minWidth <= 992 || window.minWidth <= 992) {
        aa.color = "black";
      }

      if (window.scrollY >= 30) {
        navbarscroll.style.transition = "all .3s"
        navbarscroll.style.boxShadow = "0px 0px 29px 0px rgba(134, 134, 134, 0.25)";
        navbarscroll.style.zIndex = "9999";
        navbarscroll.style.height = "90px";
        navbarscroll.style.top = "0px"
        navbarscroll.style.position = "fixed";
        i.style.transition = "all .5s"
        a.style.transition = "all .5s"
      }
      else {
        navbarscroll.style.boxShadow = "0px 0px 29px 0px rgba(134, 134, 134, 0.25)";
        navbarscroll.style.height = "100px";
        navbarscroll.style.position = "absolute";
      }
    }
  }

}

ev = new Event("scroll");
window.dispatchEvent(ev);

function increaseNUmber(num) {

  if (num.getAttribute("data-fired") != "1") {
    num.setAttribute("data-fired", "1");
    num.innerText = 0;

    let time = 2000;
    let count = num.innerText.match(/[0-9]+/);

    let speed = count / time;

    let s = setInterval(function () {
      num.innerText = +num.innerText + 1;
      if (+num.innerText >= +num.getAttribute("data-percent")) {
        clearInterval(s);
      }
    }, speed);
  }
}



$(window).load(function () {
  $(".loading-overflow div").fadeOut(2000, function () {
    $("body").css("overflow", "auto")
    $(this).parent().fadeOut(1000, function () {
      $(this).remove();

    });

  });


});
