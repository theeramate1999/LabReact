import React, {useState} from 'react';
import _, { attempt } from 'lodash' ;
import CharacterCard from './CharacterCard';
var ans;
var temp;
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
    word,
    chars,
    attempt: 0,
    guess: '',
    completed: false
      }
   }

export default function WordCard(props){
    
    const [state, setState] = useState(prepareStateFromWord(props.value))
    ans = state.guess;
    temp = state.attempt;
    const activationHandler = (c) => {

        console.log(`${c} has been activated.`)
        
        
        let guess = state.guess + c
        
        setState({...state, guess})
            if(guess.length == state.word.length){
                if(guess == state.word){
                    console.log('yeah!')
                    setState({...state, guess: '', completed: true})

                }else{
                     console.log('reset')
                     state.attempt += 1;
                     setState({...state, guess: '', attempt: state.attempt})
                     }
                 }
        
        }
       
    
    return (
        <div>
             <div className= "h1">Ans:{ans} </div>
             {
                 
                state.chars.map((c , i)=> 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt = {state.attempt}/>
                )
                 
              }  
              <div className= "temp">Round:{temp} </div>         
        </div>
    )
}