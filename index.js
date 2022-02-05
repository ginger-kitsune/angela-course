let randomNumber1 = Math.floor((Math.random() * 6)) + 1,
    randomNumber2 = Math.floor((Math.random() * 6)) + 1,
    firstPlayer = document.querySelector('.img1'),
    secondPlayer = document.querySelector('.img2'),
    playTitle = document.querySelector("h1");


    firstPlayer.src = "/images/dice" + randomNumber1 + ".png";
    secondPlayer.src = "/images/dice" + randomNumber2 + ".png";

    if (randomNumber1 === randomNumber2) {
        playTitle.textContent = 'Draw!';
    } else if (randomNumber1 > randomNumber2) {
        playTitle.textContent = 'Player 1 Wins!';
    } else {
        playTitle.textContent = 'Player 2 Wins!';
    }
