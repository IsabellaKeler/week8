function check(){

    player1 = document.getElementById("1p").value;
    player2 = document.getElementById("2p").value;

    console.log(player1);
    console.log(player2);

    if (player1 == "s" && player2 == "s"){    //Scissors
        alert(" Draw, try it again");
    }
    else if (player1 == "s" && player2 == "r"){ //Scissors vs Rock
        alert(" Player 2 you win !!");
    }
    else if (player1 == "s" && player2 == "p"){//Scissors vs Paper
        alert(" Player 1 you win !!");
    }
    else if (player1 == "r" && player2 == "s"){//Rock vs Scissors 
        alert(" Player 1 you win !!");
    }
    else if (player1 == "r" && player2 == "p"){//Rock vs Paper 
        alert(" Player 2 you win !!");
    }
    else if (player1 == "r" && player2 == "r"){//Rock
        alert(" Draw, try it again");
    }
    else if (player1 == "p" && player2 == "p"){//Paper
        alert(" Draw, try it again");
    }
    else if (player1 == "p" && player2 == "s"){//Paper vs Scissors 
        alert(" Player 2 you win !!");
    }
    else if (player1 == "p" && player2 == "r"){//Paper vs Rock
        alert(" Player 1 you win !!");
    }
    else {
        alert ("INVALID")
    }

    document.getElementById("check").innerHTML = check;

    p1 = document.getElementById("1p").value = "";
    p2 = document.getElementById("2p").value = "";
}