let buttonColours = ["red", "blue", "green", "yellow"],
    gamePattern = [],
    userClickedPattern = [];

$('.btn').on('click', function(){
    let userChosenColour = this.attr(id);
    userClickedPattern.push(userChosenColour);
});

function nextSequence () {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
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

