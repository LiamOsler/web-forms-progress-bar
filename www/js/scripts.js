var curProgress = 0;

var x = 0;
function createAccount1(){
    x=0;
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
}



var c = document.getElementById('progressCanvas')
var ctx = c.getContext("2d");
var width = c.width;
var height= c.height;


ctx.fillStyle = "#00695f";
setInterval(function(){ 
    ctx.clearRect(0,0, width, height);
    
    if(curProgress==1){
        if(x>width/(8)){
            x = width/(8);
        }
        ctx.beginPath();
        ctx.rect(0, 0, x, 200);
        ctx.fill();
    }

    if(curProgress==2){
        if(x>(width/(8))*2){
            x = width/(8)*2;
        }
        ctx.beginPath();
        ctx.rect(0, 0, x, 200);
        ctx.fill();
    }

    if(curProgress==3){
        if(x>(width/(8))*3){
            x = width/(8)*3;
        }
        ctx.beginPath();
        ctx.rect(0, 0, x, 200);
        ctx.fill();
    }

    
    if(curProgress==4){
        if(x>(width/(8))*4){
            x = width/(8)*4;
        }
        ctx.beginPath();
        ctx.rect(0, 0, x, 200);
        ctx.fill();
    }

    if(curProgress==5){
        if(x>(width/(8))*5){
            x = width/(8)*5;
        }
        ctx.beginPath();
        ctx.rect(0, 0, x, 200);
        ctx.fill();
    }

    if(curProgress==6){
        if(x>(width/(8))*6){
            x = width/(8)*6;
        }
        ctx.beginPath();
        ctx.rect(0, 0, x, 200);
        ctx.fill();
    }

    if(curProgress==7){
        if(x>(width/(8))*7){
            x = width/(8)*7;
        }
        ctx.beginPath();
        ctx.rect(0, 0, x, 200);
        ctx.fill();
    }
    
    if(curProgress==7){
        if(x>(width/(8))*7){
            x = width/(8)*7;
        }
        ctx.beginPath();
        ctx.rect(0, 0, x, 200);
        ctx.fill();
    }
    
    if(curProgress>7){
        if(x>width){
            x = width;
        }
        ctx.beginPath();
        ctx.rect(0, 0, x, 200);
        ctx.fill();
    }


    x++;
}, 25);