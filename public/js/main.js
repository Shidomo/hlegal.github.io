var first = document.getElementById("consistent-text");
var second = document.getElementById("customer-oriented-text");
var third = document.getElementById("innovative-text");
var four = document.getElementById("business-oriented-text");
let check = document.querySelectorAll('.checkbox-items');
let lastClicked = check[0];


$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed: 5000
    });
  });



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

