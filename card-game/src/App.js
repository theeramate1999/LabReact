import React from 'react';
import './App.css';
import WordCard from './WordCard';


const word = "Hello";
const word2 = "Prayut";
const number = Math.floor(Math.random() * 10);
function App() {
 return (
 <div> 
   <h1><center>React Game</center></h1>
   <p><tr>hint! : computer Engineering use to print after learn new language</tr></p>
   <WordCard value={word}/>
   <WordCard value={word2}/>
</div>
 );
}
export default App;
