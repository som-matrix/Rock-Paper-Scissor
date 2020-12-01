'use strict';
//DOM varriables
const choices = ["paper","scissors","rock"];
const buttons = document.querySelectorAll('.btn');
const score = document.querySelector('.score');
const ruleButton = document.querySelector('.rules')
const ruleContent = document.querySelector('.rule');
const closeButton = document.querySelector('.close');
const message = document.querySelector('.middle-message');
const mainDisplay = document.querySelector('.main-display');
const subDisplay = document.querySelector('.sub-display');
const playButton = document.querySelector('.play');
const userPick = document.getElementById('user-pick');
const housePick = document.getElementById('house-pick');
const subButtons = document.querySelectorAll('.sub-display .btn');
let scores = 0;
console.log(subButtons);
//Adding Event Listners for Rule Button
function openRule(){
    ruleContent.style.display = 'block';
}
function closeRule(){
    ruleContent.style.display = 'none';
}
ruleButton.addEventListener('click',openRule);
closeButton.addEventListener('click',closeRule);

// For UserChoice Button
let userChoice = undefined;
    
buttons.forEach(button=>{
     button.addEventListener('click',()=>{
        userChoice = button.getAttribute("data-choice");
        mainDisplay.style.display = 'none';
        subDisplay.style.display ='flex';
        getWinner();
     });  
});   



playButton.addEventListener('click',()=>{
    mainDisplay.style.display = 'flex';
    subDisplay.style.display ='none';
});
//For House Choices
function getRandomChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}
//Update Score
function updateScore(value){
    
    scores+=value;

  score.textContent = scores;
}
//Match with UserChoice and HouseChoice and Descide the winner
function getWinner(){
    const houseChoices = getRandomChoice();

    //Update the selection
    playerUpdate(userPick,userChoice);
    playerUpdate(housePick,houseChoices);
    if(userChoice === houseChoices){
        message.textContent = 'Drawn';

    } else if((userChoice === 'paper' && houseChoices === 'rock' )
     || 
    (userChoice === 'rock' && houseChoices === 'scissors') 
     ||
     (userChoice === 'scissors' && houseChoices === 'paper')){
         message.textContent ='You won';
         updateScore(1);
         
    } 
    else{
        message.textContent="You Lose";
        updateScore(-1);
    } 
    
}
getWinner();

//Pick the selected Player
function playerUpdate(selectElement,choice){
    selectElement.classList.remove('btn-paper');
    selectElement.classList.remove('btn-scissors');
    selectElement.classList.remove('btn-rock');
    //update the images
    let img = selectElement.querySelector('img');
    selectElement.classList.add(`btn-${choice}`);
    img.src = `/images/icon-${choice}.svg`;
    img.alt = choice;
  
}
  //reset the buttons