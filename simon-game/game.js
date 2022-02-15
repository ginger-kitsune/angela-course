let buttonColours = ["red", "blue", "green", "yellow"],
    gamePattern = [],
    userClickedPattern = [];

let started = false,
    level = 0;

$(document).on('touchstart keydown', function() {
    if(!started) {
        $('#level-title').text("Level " + level);
        nextSequence();
        started = true;
    }
});

$('.btn').on('click', function(){
    let userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log('success');
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");
        playSound('wrong');
        $('body').addClass('game-over');
        setTimeout(function () {
            $('body').removeClass('game-over');
        }, 200);
        $('#level-title').text("Game Over, Press Any Key or tap to Restart");
        startOver();
    }
}

function nextSequence () {
    userClickedPattern = [];
    level++;
    $('#level-title').text("Level " + level);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    var audioUser = new Audio("sounds/" + name + ".mp3");
    audioUser.play();
}

function animatePress(currentColour) {
    $('#'+ currentColour).addClass('pressed');

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}