var curProgress = 0;

function createAccount1(){
    curProgress = 1;
    document.getElementById("login-1").style.display = "none";
    document.getElementById("login-2").style.display = "block";
}

function createAccount2(){
    curProgress = 2;
    document.getElementById("login-2").style.display = "none";
    document.getElementById("login-3").style.display = "block";
}

function createAccount3(){
    curProgress = 3;
    document.getElementById("login-3").style.display = "none";
    document.getElementById("login-4").style.display = "block";
}

function createAccount4(){
    curProgress = 4;
    document.getElementById("login-4").style.display = "none";
    document.getElementById("login-5").style.display = "block";
}

function createAccount5(){
    curProgress = 5;
    document.getElementById("login-5").style.display = "none";
    document.getElementById("login-6").style.display = "block";
}

function createAccount6(){
    curProgress = 6;
    document.getElementById("login-6").style.display = "none";
    document.getElementById("login-7").style.display = "block";
}

function createAccount7(){
    curProgress = 7;
    document.getElementById("login-7").style.display = "none";
    document.getElementById("login-8").style.display = "block";
}

function createAccount8(){
    curProgress = 8;
    document.getElementById("login-9").style.display = "none";
    document.getElementById("login-10").style.display = "block";
}



var c = document.getElementById('progressCanvas')
var ctx = c.getContext("2d");

ctx.fillStyle = "#f73378";

ctx.beginPath();
ctx.rect(0, 0, 50, 50);
ctx.fill();