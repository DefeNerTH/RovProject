var Interval = setInterval(countdown,1000)
var counter = 0;
var time = BuffTime.abysal;
$('#timer').text(toSec(time));

function zero(s){
    if(s < 10){
        return '0' + s;
    }else{
        return s;
    }
}

function toSec(s){
    var min = Math.floor(s / 60);
    var sec = s % 60;
    return min + ':' + zero(sec);
}

function countdown(){
    counter++;
    $('#timer').text(toSec(time - counter))
    if(counter == time){
        clearInterval(Interval);
        counter = 0;
        $('#timer').hide();
        $('.bg').hide();
    }
}

$('.bg').css('background-image','url(assets/img/abysal.png)')