
let a =0;
function increment(){
    a=a+1;
    document.getElementById('counter').innerHTML = a;
    updateColor()

}

function decrement(){
    a= a - 1;
    document.getElementById('counter').innerHTML = a;
    updateColor()

}

function reset(){
  a=0;
     document.getElementById('counter').innerHTML = a;    
    updateColor()
    }

function updateColor(){
    if(a === 0)
    document.getElementById('counter').style.color = "black";
else if(a>0)
    document.getElementById('counter').style.color = "green";
else
    document.getElementById('counter').style.color = "red";


}

let decreaseButton = document.getElementById('DecButton');
let increaseButton = document.getElementById('IncreaseButton');
let resetButton = document.getElementById('resetButton');

decreaseButton.addEventListener("click",decrement);
increaseButton.addEventListener("click",increment);
resetButton.addEventListener("click",reset);



