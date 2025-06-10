import React from 'react'
import { useEffect, useRef, useState } from 'react';
import './home.css';
const Home = () => {
    const [alphabet, setAlphabet] = useState('??????????abcdefghijklmnopqrstuvwxyz');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const numRef = useRef();
    const strRef = useRef();
    let naem = '';
    //  1711121235 == GABBY
    const decoder = (num) => {
        if (num.length === 0 || !Number(num)) {
            numRef.current.value = '';
            return;
        }
        console.log(num);
        let decoded = '';
        
        for (let x = 0; x < num.length; x += 2) {
            const index = parseInt(num.slice(x, x + 2)) - 1;
            if (alphabet[index] === '00') {
                decoded += ' ';
            } else if (alphabet[index] === undefined) {
                decoded += ` `;
            } else {
                decoded += alphabet[index];
            }
        }
        
        setName(decoded);
        strRef.current.value = decoded;
    };
    
    const encoder = (str) => {
        let tempNum = '';
        strRef.current.value = str.toLowerCase();
        if (str.length === 0) {
            setNumber('');
            numRef.current.value = '';
            return;
        }
        
        if (str.match(/[0-9]/g)) {
            strRef.current.value = '';
            numRef.current.value = '';
        } else {
            str = str.toLowerCase();
            for (let x = 0; x < str.length; x++) {
                if (str.charCodeAt(x) - 86 <= 0) {
                    tempNum += '00';
                } else {
                    tempNum += str.charCodeAt(x) - 86;
                }
                numRef.current.value = tempNum;
                
            }
        }
    };
    
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (numRef.current.value == ''){
                strRef.current.value = '';
                
            }
        }
    });
    
    return (
        <>
          {/* <h2>string:</h2>
      <input type="text" name="" id="" onChange={(e) => changer(e)}/> */}
          <div className="introduction">
              <h1>Have you ever <i>wondered</i>, that you could <i>convert</i> Texts into Numbers??</h1>
          </div>
          <div className="wrapper_converters">
          <div className="converters">
            <div className="main">
              <div className="number">
                  <h2>Number:</h2>
                  <input type="text" name="" id="" onChange={(e) => decoder(e.target.value)} ref={numRef} />
              </div>
              <h2>To </h2>
              <div className="alphabet">
                  <h2>Alphabet:</h2>
                  <input type="text" name="" id="" onChange={(e) => encoder(e.target.value)} ref={strRef} />
              </div>
            </div>
            <div className="desc">
              <p>Tip : Press backspace twice to clear all conversions.</p>
            </div>
          </div>
          </div>
          <div className="wrapper-formula">
            <div className="formula">
                <div className="title_formula">
                <h1>The Alphabetic Convertion Formula </h1>
                </div>
                <div className="wrapper-intro-formula">
                <div className="intro_formula">
                    <p>

                      So, you've got a secret message you wanna share with your friend, but you want to keep it on the down low. No problem! You can use a special code to scramble the letters. It's pretty simple, really. You take each letter and swap it out for a number - A is 1, B is 2, and so on. Then, you add 10 to each number, just to give it a little extra security. Like, A (1) becomes 11, B (2) becomes 12, and so on. It's like a fun little puzzle!

                      When you're ready to send the message, you just string all these codes together. It's like a secret language that only your friend knows how to decipher. They'll need to know the trick to decoding it, or they'll be totally lost. But don't worry, it's not rocket science - just a simple code that's easy to crack once you know the key.
                        
                      To decode the message, your friend just breaks it down into 2-digit chunks, subtracts 10 from each one, and then converts the numbers back to letters. Voilà! The secret message is revealed. It's like a little game you can play with your friends, and it's a great way to keep your messages private. Plus, it's a fun way to learn about coding and decoding
                      <br />
                      Example : <span className="example">Stephen</span>
                      <br />
                      Result : <span className="result">1711121235</span>
                    </p>
                </div>
                </div>
                <div className="developers_section">

                <h1>For the developers..</h1>
                <p>you just..</p>
                <div className="numdecode">
                <h2>Number Encoding & Decoding (placing)</h2>
                <span className="formula-text">
                <h2>[placeAt(n) + 10] for encoding</h2>
                <h2>alphabet[placeAt(n) - 10] for decoding</h2>
                </span>
                </div>

                <div className="alphadecode">
                <h2>Alphabet Decoding & Encoding</h2>
              <span className="formula-text">
                  <h2>[string].charCodeAt(n) - 86 for encoding</h2>
                  <h2>alphabetVar[s.charCodeAt(n)] for decoding</h2>
              </span>
                </div>
                <div className="legend_info">
                <h2>Legend (Definition) : </h2>
                <div className="commands">
                <p>n = single alphabet (letter; a, b, c, ...)</p>
                <p>placeAt(<i>alphabet</i> | <i>n</i>) = function for finding the number placing at the letter</p>
                <p>(e.g a = 1; b = 2; ...etc)</p>
                <p>[string].charCodeAt(<i>alphabet</i> | <i>n</i>) = javascript's native build in key mapper</p>
                <p>** in this case we use lowercase charCodeAt - 86 | (97 - 11)</p>
                <p>alphabet[] = alphabet array</p>
                <p>And '00' means a blank-space = [' ']</p>
                </div>
                </div>
                </div>

                {/*  */}
            </div>
          </div>
          <div className="inform">
          <div className="title-information">
              <h1>Alphabet to Number Helpers :</h1>
          </div>
          <div className="wrapper-main-formula">
          <div className="main-formula">
            <p>placeAt(n) + 10</p>
            <i>and</i>
            <p>alphabet[placeAt(n) - 10]</p>
          </div>
          </div>
          <div className="wrapper-information">
              <div className="information">
                <div className="letters">
                  {alphabet.replace('?', '').split('').map((letter, index) => {

                      return (
                          letter == "?" ? null :
                              <div key={index} className="letter">
                                  <h2>{letter} = {` ${index + 2}`}</h2>
                              </div>
                      )
                  }
                  )}
                </div>
                  <div className="addedInfo">
                      <h1 className='title'>The "Mainstring" House Rules:</h1>
                      <h2>Alphabets <span>MUST</span> be at lowercase<span>.</span></h2>
                      <h2>Alphabets <span>CAN NOT</span> contain numbers.</h2>
                      <h2>Other non alphabetic characters (? , ! and others..) are <span>NOT</span> allowed. (result = <span>nothing</span>)</h2>
                      <h2>And if it doesn't match the character lists it will output : <span>?</span>;</h2>
                      <h2>Also if the character number is more than 36 it will output <span>(nothing)</span></h2>
                      <h3>* like literally a blank space.</h3>
                  </div>
              </div>
          </div>
          </div>
          <div className="wrapper-challange">
              <div className="challange">
                  <h1>Up for a challange?</h1>
                  <h2>Try converting this SECRET number into a readable text!</h2>
                  <button>Play</button>
              </div>
          </div>
          <div className="credits">
              <a href="https://stepwebdev.netlify.app">Created by stepwebdev, 2020 - 2025.</a>
          </div>
          <div className="webversion">
              <p>ver : 0.189fkG97v</p>
          </div>
      </>
  )
}

export default Home