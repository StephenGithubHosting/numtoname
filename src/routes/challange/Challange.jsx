import React, { useEffect, useState } from 'react'
import './challange.css'
const Challange = () => {
  
  const [number, setNumber] = useState(0);
  const [doneState, setDoneState] = useState(false);
  const [questionNumbers, setQuestionNumbers] = useState(5);
  const [decider, setDecider] = useState(false);
  let questions = [];


  if (number >= 5){
    setDoneState(true);
  }

  const fnAddNumber = () => {
    setNumber(number + 1);
  }

  

  console.log(number);
  
  const names = [
    'Gabby',
    'John',
    'Doe',
    'Jane',
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank'
  ];

  const generateRandomQuestionAlphabetToNumbers = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    let num = '';
    const conversions = randomName.split('');
    for (let x = 0; x < conversions.length; x++) {
      const charCode = conversions[x].toLowerCase().charCodeAt(0) - 86;
      num = num + `${charCode}`;
    }
  }



  console.log(generateRandomQuestionAlphabetToNumbers())

  
  
  return (
    <>
        <div className="challange_body">
          {
          !doneState ? (
          <>
          <h2>Hello! Welcome to the challange.. It's been a pleasure to.. uhh yeah..</h2>



          </>
        ) 
        : (
        <>
            <h2>Congratulations! You've beaten the game!</h2>
            <button>Go home</button>
        
        </>
        )
      }
          


        </div>
        
    </>
  )
}

export default Challange