var first = document.getElementById("consistent-text");
var second = document.getElementById("customer-oriented-text");
var third = document.getElementById("innovative-text");
var four = document.getElementById("business-oriented-text");
let check = document.querySelectorAll('.checkbox-items');
let lastClicked = check[0];

/* слайдер */

$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed: 5000
    });
  });


/*   меню чекбокс */

for( let i = 0; i < check.length; i++ ){
  check[i].addEventListener('click', function(){
    lastClicked.classList.remove('linear-checkbox');
    this.classList.add('linear-checkbox');
    lastClicked = this; 
  })
}


function consistent() {
    if (first.style.display === "none") {
        first.style.display = "block";
        second.style.display = "none";
        third.style.display = "none";
        four.style.display = "none";

    }else {
        first.style.display = "block";
        second.style.display = "none";
        third.style.display = "none";
        four.style.display = "none";
    }
}



function customer_oriented() {

    if (second.style.display === "none") {
        
        second.style.display = "block"
        first.style.display = "none"
        third.style.display = "none"
        four.style.display = "none";

    }else {
        second.style.display = "block"
        first.style.display = "none"
        third.style.display = "none"
        four.style.display = "none";

    }
}

function innovative() {

    if (third.style.display === "none") {
        third.style.display = "block";
        first.style.display = "none";
        second.style.display = "none";
        four.style.display = "none";
    }
    else {
        third.style.display = "block";
        first.style.display = "none";
        second.style.display = "none";
        four.style.display = "none";
    }
}
function business_oriented() {
    if (four.style.display === "none") {
        four.style.display = "block";
        first.style.display = "none";
        second.style.display = "none";
        third.style.display = "none";

    }
    else {
        four.style.display = "block";
        first.style.display = "none";
        second.style.display = "none";
        third.style.display = "none";

    }
}

/* работа с свг */

$("img.favicon--white").each(function () {
    var $img = $(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(imgURL, function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
            $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
        }
        $img.replaceWith($svg);
    }, "xml");
});

$("img.favicon--blue").each(function () {
    var $img = $(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(imgURL, function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
            $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
        }
        $img.replaceWith($svg);
    }, "xml");
});

$("img.main-section__scroll").each(function () {
    var $img = $(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(imgURL, function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
            $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
        }
        $img.replaceWith($svg);
    }, "xml");
});

/* бургер меню */

let menuBtn = document.querySelector('.burger');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('burger-active');
})
