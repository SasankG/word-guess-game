var words =["wilt", "water", "flow", "code", "easy", "redundant", "polyglot", "javascript", "hangman"];

var winCounter = 0;
var lossCounter = 0;

//Making blanks appear for word    
var randomWord = words [Math.floor (Math.random() * words.length)];

var letterBlanks = [];
for (var i=0; i < randomWord.length; i++){
        letterBlanks.push("_");
    }
document.getElementById("showWord").innerHTML = letterBlanks.join(" ");

//wrong list and counter
var wrongList = [];
var wrongCounter = 0;

var remainingLetters = randomWord.length;

//lose game function - WORKING, local storage NOT WORKING
function loseGame(){
    if (wrongCounter==8){
        document.location.reload();
        localStorage.getItem("lossCOunter");
        document.getElementById("loss").innerHTML=lossCounter;
    }
}
//win game function - WORKING, local storage NOT WORKING
function winGame(){
    document.location.reload();
    localStorage.getItem("winCounter");
    document.getElementById("win").innerHTML=winCounter;
}
//Letter Guessing - WORKING
document.onkeyup = function letterGuess(){
    var guessLetter = event.key.toLowerCase();
    console.log(guessLetter); 
    var found = false;
    for (var i =0; i < randomWord.length; i++){
         if (guessLetter === randomWord[i]){
             letterBlanks[i] = guessLetter;
             document.getElementById("showWord").innerHTML = letterBlanks.join(" ");
             found = true;
             remainingLetters--;
             document.getElementById("lives").innerHTML=(remainingLetters);
             console.log(letterBlanks);
             console.log(randomWord);
         }
        
    }
       //Win statement - WORKING
       if (remainingLetters === 0){
           document.getElementById("win").innerHTML = ("You  win! The word was: " + randomWord + " New word coming in 10 seconds!");
           winCounter++;
           localStorage.setItem("winCounter", winCounter);
           setTimeout(winGame, 10000);
      }
      //wrong counter - WORKING
       if (found==false){
           wrongCounter++;
           wrongList.push(guessLetter)
           document.getElementById("wrongGuess").innerHTML = wrongCounter +"    "+ wrongList;
           
       }
        // loss statement - WORKING
        if(wrongCounter == 8){
         document.getElementById("loss").innerHTML = ("You lost the word was: " + randomWord + " Try again in 10 seconds!");
         lossCounter++;
         localStorage.setItem("lossCounter", lossCounter);
         setTimeout(loseGame, 10000);
    }
}
