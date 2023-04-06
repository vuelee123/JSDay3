// Rock, Paper, Scissors

const Hand= ['rock', 'paper', 'scissors'];

const playerOne = {Name:"Lee" , getHand: getHand}
const playerTwo = {Name:"Afif", getHand: getHand}

function getHand(){
    return Hand[parseInt(Math.random()*10)%3];
}
console.log(getHand)

function playRound(playerOne,playerTwo){
    let player1 = playerOne.getHand();
    let player2 = playerTwo.getHand();

    console.log(playerOne.Name,player1 );
    console.log(playerTwo.Name,player2);

    if (player1 === player2) {
        console.log("it's a tie");
        return null;
    }else if (player1 === "rock" && player2 === "scissors") {
        console.log( "Rock wins!");
        return playerOne;
    }else if (player1 === "scissors" && player2 === "paper"){
        console.log("Scissor wins!");
        return playerOne;
    }else if (player1 === "rock" && player2 === "rock"){
        console.log("it's a tie!");
        return playerOne;
    }else if (player1 === "scissors" && player2 === "rock"){
        console.log("Scissors wins!");
        return playerTwo;
    }else if (player1 === "paper" && player2 === "scissors"){
        console.log("Paper wins");
        return playerTwo;
    }else if (player1 === "rock" && player2 === "paper"){
        console.log("Rock wins!");
        return playerTwo;
    }
}

const playUntill=5;
let player1Wins= 0;
let player2Wins= 0;

function playGame(playerOne, playerTwo,playUntill=5){
    let game = playRound(playerOne, playerTwo)
    if(game === playerOne){
        player1Wins+=1;
        console.log('Lee'+player1Wins)
        console.log('Afif'+player2Wins)
    }else if (game == playerTwo){
        player2Wins+=1;
        console.log('Lee'+player1Wins)
        console.log('Afif'+player2Wins)
    }
    if (player1Wins == playUntill || player2Wins == playUntill){
    return [game]

    }
    return playGame(playerOne,playerTwo)
}


console.log(playGame(playerOne, playerTwo, playUntill))







