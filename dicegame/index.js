

document.querySelector('button').addEventListener('click', rollDice)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var diceRolls = 0
var player1Score = 0
var player2Score = 0

function rollDice(){
  var num1 = getRandomInt(5) + 1
  var num2 = getRandomInt(5) + 1

  player1Score = player1Score + num1
  player2Score = player2Score + num2

  document.querySelector('#total-total').textContent = 'Total: ' +  (player1Score + player2Score)

  document.querySelector('#player-1-Score').textContent = 'Player 1 Score: ' + player1Score

  document.querySelector('#player-2-Score').textContent = 'Player 2 Score: ' + player2Score

  diceRolls += 1

  if(num1 == 2){
    document.querySelector('#die-1').src = 'https://cdn.emojidex.com/emoji/seal/die_face_2.png?1422536672';
    document.querySelector('#die-1-header').textContent = '2'
  }else if(num1 == 3){
    document.querySelector('#die-1').src = 'https://cdn.emojidex.com/emoji/seal/die_face_3.png?1422536679';
    document.querySelector('#die-1-header').textContent = '3'
  } else if(num1 == 4){
    document.querySelector('#die-1').src = 'https://cdn.emojidex.com/emoji/seal/die_face_4.png?1422536687';
    document.querySelector('#die-1-header').textContent = '4'
  }else if(num1 == 5){
    document.querySelector('#die-1').src = 'https://cdn.emojidex.com/emoji/seal/die_face_5.png?1422536693';
    document.querySelector('#die-1-header').textContent = '5'
  }else if(num1 == 6){
    document.querySelector('#die-1').src = 'https://cdn.emojidex.com/emoji/seal/die_face_6.png?1422536701';
    document.querySelector('#die-1-header').textContent = '6'
  }
  else if(num1 == 1){
    document.querySelector('#die-1').src = 'https://cdn.emojidex.com/emoji/seal/die_face_1.png?1422536664';
    document.querySelector('#die-1-header').textContent = '1'
  }

  if(num2 == 2){
    document.querySelector('#die-2').src = 'https://cdn.emojidex.com/emoji/seal/die_face_2.png?1422536672';
    document.querySelector('#die-2-header').textContent = '2'
  }else if(num2 == 3){
    document.querySelector('#die-2').src = 'https://cdn.emojidex.com/emoji/seal/die_face_3.png?1422536679';
    document.querySelector('#die-2-header').textContent = '3'
  } else if(num2 == 4){
    document.querySelector('#die-2').src = 'https://cdn.emojidex.com/emoji/seal/die_face_4.png?1422536687';
    document.querySelector('#die-2-header').textContent = '4'
  }else if(num2 == 5){
    document.querySelector('#die-2').src = 'https://cdn.emojidex.com/emoji/seal/die_face_5.png?1422536693';
    document.querySelector('#die-2-header').textContent = '5'
  }else if(num2 == 6){
    document.querySelector('#die-2').src = 'https://cdn.emojidex.com/emoji/seal/die_face_6.png?1422536701';
    document.querySelector('#die-2-header').textContent = '6'
  }
  else if(num2 == 1){
    document.querySelector('#die-2').src = 'https://cdn.emojidex.com/emoji/seal/die_face_1.png?1422536664';
    document.querySelector('#die-2-header').textContent = '1'
  }

  if(diceRolls == 5){
    if(player1Score > player2Score){
      alert('Player One Wins with a score of ' + player1Score)
    }
    else if(player1Score < player2Score){
      alert('Player 2 wins with a score of ' + player2Score)
    } else if(player1Score == player2Score){
      alert("It's a tie, play again")
    }
    
    diceRolls = 0
    player1Score = 0
    player2Score = 0
  }
}
