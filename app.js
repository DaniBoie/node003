const inquirer = require('inquirer')

let count = 0
let win = 0
let loss = 0
let tie = 0
let respOptions = ['rock', 'paper', 'scissors']

function won(){
  win++
  console.log(`You won! Wins: ${win}`)
}
function lost() {
  loss++
  console.log(`You Lost! Losses: ${loss}`)
}
function tied(){
  tie++
  console.log(`You tied! Ties: ${tie}`)
}

const compThrow = (response) => {
  let compResponse = respOptions[Math.floor(Math.random() * 3)]
  console.log(`You chose ${response}. Your opponent chose ${compResponse}.`)

  switch (response) {
    case 'rock':
      if (compResponse === 'rock') {
        tied()
      } else if (compResponse === 'paper') {
        lost()
      } else if (compResponse === 'scissors') {
        won()
      }
      break;
    case 'paper':
      if (compResponse === 'rock') {
        won()
      } else if (compResponse === 'paper') {
        tied()
      } else if (compResponse === 'scissors') {
        lost()
      }
      break;
    case 'scissors':
      if (compResponse === 'rock') {
        lost()
      } else if (compResponse === 'paper') {
        won()
      } else if (compResponse === 'scissors') {
        tied()
      }
      break;
  }
}

function question() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'Pick your weapon',
        choices: ['rock', 'paper', 'scissors']
      }
    ])
    .then(res => {
      count++
      if (count < 5) {
        compThrow(res.choice)
        question()
      } else if (count = 5) {
        console.log(`
        Your Final Score!
        Wins: ${win}
        Losses: ${loss}
        Ties:${tie}
        `)
      }
    })
    .catch(err => console.log(err))
}

question()