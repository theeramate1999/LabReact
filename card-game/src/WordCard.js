import React, {useState} from 'react';
import _, { attempt } from 'lodash' ;
import CharacterCard from './CharacterCard';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
    word,
    chars,
    attempt: 1,
    score: 0,
    guess: '',
    completed: false
      }
   }
export default function WordCard(props){
    
    const [state, setState] = useState(prepareStateFromWord(props.value))
    const activationHandler = (c) => {

        console.log(`${c} has been activated.`)
        
        let guess = state.guess + c
        let score = 0
        setState({...state, guess})
            if(guess.length == state.word.length){
                if(guess == state.word){
                    console.log('yeah!')
                    score = score+1
                    console.log(`score :${score} `)
                    setState({...state, guess: '', completed: true})

                }else{
                     console.log('reset')
                     setState({...state, guess: '', attempt: state.attempt + 1})
                     }
                 }
        }
       
    
    return (
        <div>
             <a href="http://localhost:3000/"><botton>Reset</botton></a>
             {
                 
                state.chars.map((c , i)=> 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt = {state.attempt}/>
                )
              }           
        </div>
    )
}