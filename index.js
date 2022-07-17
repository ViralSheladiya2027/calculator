let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = '';


for (let item of buttons){
      item.addEventListener("click", (e) => {
buttonText = e.target.innerText;
console.log("button is " , buttonText);

if(buttonText == 'x'){
    buttonText ='*';
    screenValue += buttonText;
    screen.value = screenValue;
}
else if(buttonText =='C'){
    screenValue = '';
    screen.value = screenValue;
}
else if(buttonText == '÷'){
    buttonText ='/';
    screenValue += buttonText;
    screen.value = screenValue;
}
else if(buttonText == '⌫'){
  var remove = screen.value;
  remove= remove.slice(0,-1);
 screen.value = remove;
 screenValue += buttonText;
    screenValue = '';
}
else if(buttonText == "="){
    screenValue= eval(screenValue);
    screen.value = screenValue;
}
else{
    screenValue+=buttonText;
    screen.value = screenValue;
}
    });
};

