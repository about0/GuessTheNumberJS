/**
 * Created by ZenderR on 1/30/2016.
 */
var target;
var guess_input_text;
var guess_input;
var guesses = 0;
var finished = false;


function do_game(){
    target = Math.floor(Math.random() * 101);

    while (!finished){
        guess_input_text = prompt('I am thinking of a number '+
                                  'in the range 1 to 100. \n\n'+
                                   'What is the number?');
        guess_input = parseInt(guess_input_text);
        guesses++;
        finished = check_guess();
    }
}

function check_guess(){
    if(isNaN(guess_input)){
        alert('Please enter an integer number');
        return false;
    }
    if((guess_input < 1) || (guess_input > 100)){
        alert('Enter the number over 1 and under 100');
        return false;
    }
    if(guess_input > target){
        alert('The number is too large!');
        return false;
    }
    if(guess_input < target){
        alert('The number is too small!');
        return false;
    }
    alert('You got it! The number was ' + target + ' \n\nIt took you ' + guesses + " guesses to got the number!");
return true;
}