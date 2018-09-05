//question bank
var questions =[
{
    question: "What is the correct answer?correct B",
    option1: "Answer A",
    option2: "Answer B",
    option3: "Answer C",
    option4: "Answer D",
    answer: "2"
},

{
    question: "What what is the correct answer?correct C",
    option1: "Answer AB",
    option2: "Answer B",
    option3: "Answer C",
    option4: "Answer D",
    answer: "3"
},
{
    question: "What is the correct answer?correct A",
    option1: "Answer AC",
    option2: "Answer B",
    option3: "Answer C",
    option4: "Answer D",
    answer: "1"
},
{
    question: "What is the correct answer?correct B",
    option1: "Answer AD",
    option2: "Answer B",
    option3: "Answer C",
    option4: "Answer D",
    answer: "2"
},
{
    question: "What is the correct answer?correct D",
    option1: "Answer A",
    option2: "Answer BC",
    option3: "Answer C",
    option4: "Answer D",
    answer: "4"
},
{
    question: "What is the correct answer?correct D",
    option1: "Answer A",
    option2: "Answer BD",
    option3: "Answer C",
    option4: "Answer D",
    answer: "4"
},
{
    question: "What is the correct answer?correct B",
    option1: "Answer A",
    option2: "Answer B",
    option3: "Answer CD",
    option4: "Answer D",
    answer: "2"
},
{
    question: "What is the correct answer?correct C",
    option1: "Answer A",
    option2: "Answer B",
    option3: "Answer C",
    option4: "Answer DA",
    answer: "3"
},
{
    question: "What is the correct answer?correct B",
    option1: "Answer A",
    option2: "Answer B",
    option3: "Answer C",
    option4: "Answer DB",
    answer: "2"
},
{
    question: "What is the correct answer?correct A",
    option1: "Answer A",
    option2: "Answer B",
    option3: "Answer C",
    option4: "Answer DD",
    answer: "1"
},
]
//

//timer variables
var counter= 0;
var intervalId;
var timeleft = 30;
var clock;

// question Bank variables and geting element by DOM
var currentQuestion =0;
var score= 0;
let i=0;

var container= document.getElementById('TreviaGame');
var questionEl= document.getElementById('question');
var opt1= document.getElementById('opt1');
var opt2= document.getElementById('opt2');
var opt3= document.getElementById('opt3');
var opt4= document.getElementById('opt4');
var answer= document.getElementById('answer');
var totalQuestion=questions.length;
var nextButton= document.getElementById('nextButton');
var resultCont= document.getElementById('result');
var choice = document.getElementsByClassName('.option');

 //timer is set now 
 
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

   // This function loads Question

function loadQuestion(questionIndex){
    //for( i=0; i<questions.length; i++){
    var q= questions[questionIndex];
    questionEl.textContent=(questionIndex+1)+'.' +q.question;
    
    opt1.textContent=q.option1;
    opt2.textContent=q.option2;
    opt3.textContent=q.option3;
    opt4.textContent=q.option4;
    answer.textContent=q.answer;


//whenever clicked the next question button it loads the next question
    nextButton.addEventListener("click",loadNextQuestion,false);
};



// loads the next question
function loadNextQuestion()
{
   
    var selectedOption=document.querySelectorAll('input[type=radio] [name=option] value:checked');
  
    //each question time is starting from beginning
   timeleft = 30;
   counter = 0;


   //check if question is selected 
    if(!selectedOption){ 
        alert('choose selection');
        return;
    }

    //check if the selected answer is correct

    var answer = selectedOption.value;
            if(questions[currentQuestion].answer==answer){
        
                //increase the score by 10 if the answer is correct

                score +=10;
     
            }
         //increase the question number so allows to recruit the next question

            selectedOption.checked == false;
    
            currentQuestion++;
    
//changes the next button text to finish
    if (currentQuestion==totalQuestion-1){
        nextButton.textContent = 'Finish';

    }
//time counter stops
    if(currentQuestion==totalQuestion){
        
        clearInterval(intervalId);
        timeleft = 0;
        counter = 0;
//big container disappears and result container appears and shows the results
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent= 'Your score :' +score;
        return;
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);

