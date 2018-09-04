var questions =[
{
    question1: "What is the correct answer?correct B",
    option1: "Answer A",
    option2: "Answer B",
    option3: "Answer C",
    option4: "Answer D",
    answer: "2"
},

{
    question2: "What what is the correct answer?correct C",
    option1: "Answer AB",
    option2: "Answer B",
    option3: "Answer C",
    option4: "Answer D",
    answer: "3"
},
{
    question3: "What is the correct answer?correct A",
    option1: "Answer AC",
    option2: "Answer B",
    option3: "Answer C",
    option4: "Answer D",
    answer: "1"
},
{
    question4: "What is the correct answer?correct B",
    option1: "Answer AD",
    option2: "Answer B",
    option3: "Answer C",
    option4: "Answer D",
    answer: "2"
},
{
    question5: "What is the correct answer?correct D",
    option1: "Answer A",
    option2: "Answer B",
    option3: "Answer C",
    option4: "Answer D",
    answer: "4"
},
{
    question6: "What is the correct answer?correct D",
    option1: "Answer A",
    option2: "Answer B",
    option3: "Answer C",
    option4: "Answer D",
    answer: "4"
},
{
    question7: "What is the correct answer?correct B",
    option1: "Answer A",
    option2: "Answer B",
    option3: "Answer C",
    option4: "Answer D",
    answer: "2"
},
{
    question8: "What is the correct answer?correct C",
    option1: "Answer A",
    option2: "Answer B",
    option3: "Answer C",
    option4: "Answer D",
    answer: "3"
},
{
    question9: "What is the correct answer?correct B",
    option1: "Answer A",
    option2: "Answer B",
    option3: "Answer C",
    option4: "Answer D",
    answer: "2"
},
{
    question10: "What is the correct answer?correct A",
    option1: "Answer A",
    option2: "Answer B",
    option3: "Answer C",
    option4: "Answer D",
    answer: "1"
},
]
//

//timer variables
var counter= 0;
var intervalId;
var timeleft = 30;
var clock;

// question Bank variables
var currentQuestion =0;
var score= 0;
let i=1;
//var wrong = 0;
//var questionIndex = questions.question;


var container= document.getElementById('TreviaGame');
var questionEl= document.getElementById('question');
var opt1= document.getElementById('opt1');
var opt2= document.getElementById('opt2');
var opt3= document.getElementById('opt3');
var opt4= document.getElementById('opt4');
var totalQuestion=questions.length;
var nextButton= document.getElementById('nextButton');
var resultCont= document.getElementById('result');
var choice = document.getElementsByClassName('.option');

 //function timeconverter() {
    var min = Math.floor(timeleft/60);
    var sec = timeleft % 60;

    if (sec < 10) {
        sec = "0" + sec;
      }

    if (min === 0) {
        min = "00";
      }

    else if (min < 10) {
        min = "0" + min;
      }

    // return min + ":" + sec;
     clock = min + ":" + sec;
     console.log(clock);
     

    intervalId= setInterval(increment, 1000);

function increment(){
   
    counter ++;

    if (counter === timeleft){

        clearInterval(intervalId);
        //counter = 0;
        
    }

    $("#timer").html("Time Left :" +"00:" +(timeleft -counter));
    console.log(timeleft -counter);
}

   // loadQuestion()

function loadQuestion(questionIndex){
    //for( i=1; i<questions.length; i++)
    var q= questions[questionIndex];
    questionEl.textContent=(questionIndex+ 1)+'.' +q.question+(questionIndex+ 1);
    //questionEl.textContent=q.question1;
    opt1.textContent=q.option1;
    opt2.textContent=q.option2;
    opt3.textContent=q.option3;
    opt4.textContent=q.option4;

    //console.log(questions.option1);
    // <!DOCTYPE html>
    // <html>
    // <body>
    
    // <h2>JavaScript addEventListener()</h2>
    
    // <p>This example uses the addEventListener() method to add many events on the same button.</p>
    
    // <button id="myBtn">Try it</button>
    
    // <p id="demo"></p>
    
    // <script>
    // var x = document.getElementById("myBtn");
    // x.addEventListener("mouseover", myFunction);
    // x.addEventListener("click", mySecondFunction);
    // x.addEventListener("mouseout", myThirdFunction);
    

    // function mySecondFunction() {
    //     document.getElementById("demo").innerHTML += "Clicked!<br>";
    // }
  
    // </script>
    
    // </body>
    // </html>
};
nextButton.addEventListener("click",loadNextQuestion,false);

// selectedOption.addEventListener("click",selectedOption);
// function values(){
//     document.getElementsByTagName("value").innerHTML = value;
//}

function loadNextQuestion()
{
    var selectedOption=document.querySelectorAll('input[type=radio]:checked');

    // var choice = document.getElementsByClassName('option');
   
    
    if(!selectedOption){ 
        alert('choose selection')
        return;
    }

    var answer = selectedOption.value;
            if(questions[currentQuestion].answer==answer){
        
                score +=10;
            }
    
    selectedOption.checked == false;
  
    currentQuestion ++;
    if (currentQuestion==totalQuestion-1){
        nextButton.textContent = 'Finish';

    }

    if(currentQuestion==totalQuestion){

        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent= 'Your score :' +score;
        return;
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);


//question.html(question 1);
//console.log(questions.option1);