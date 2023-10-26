let random_num = Math.floor(Math.random() * 20) + 1;
let score = 20;
const startAgain = document.getElementById('again-btn');
let highscore=0;

const checkValue = () => {
    let input_val = document.getElementById('num').value;

    if (input_val == random_num) {
        score = score - 1;
        document.getElementById("writehere").innerHTML = "Game Completed Successfully";
        document.getElementById('score').innerHTML = `Score : ${score}`;
        document.getElementById('hiddenNum').innerHTML = `${random_num}`;
        document.getElementsByTagName('body')[0].style.backgroundColor = 'green';
        if (score > highscore) {
            highscore = score;
        }
        document.getElementById('highScore').innerHTML = `Highscore : ${highscore}`;
    }
    else if (input_val > random_num) {
        document.getElementById("writehere").innerHTML = "Entered number is big";
        score = score - 1;
        document.getElementById('score').innerHTML = `Score : ${score}`;
    }
    else if (input_val < random_num) {
        document.getElementById("writehere").innerHTML = "Entered number is small";
        score = score - 1;
        document.getElementById('score').innerHTML = `Score : ${score}`;
    }

    if(input_val == ''){
        document.getElementById("writehere").innerHTML = "Please enter the number";
    }

    document.getElementById('score').innerHTML = `Score : ${score}`;

    if (score <= 0) {
        document.getElementById("writehere").innerHTML = "You Lost The Game";
        document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
    }
}


const startNewGame = () => {
    random_num = Math.floor(Math.random() * 20) + 1;
    score = 20;
    document.getElementById("writehere").innerHTML = "Please check your number";
    document.getElementById('score').innerHTML = `Score : ${score}`;
    document.getElementById('hiddenNum').innerHTML = "?";
    document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
}