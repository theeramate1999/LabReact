import React from 'react';
import './App.css';
import WordCard from './WordCard';

import ans1 from './Image/ans1.jpg';
import ans2 from './Image/ans2.jpg';
import ans3 from './Image/ans3.jpg';

var word;
var image;
var numRan = Math.floor(Math.random() * 3)+1;
function refreshPage(){ 
  window.location.reload(); 
}
switch(numRan){

case 1:word = "Thailand";
       image = ans1;
       break;
case 2:word = "Japan";
       image = ans2;
       break;
case 3:word = "SouthKorea";
       image = ans3;
       break;
}
function App() {
 return (
 <div> 
   <h1><center>React Game</center></h1>
   <center><WordCard value={word}/></center>
   <center><button type="button" onClick={ refreshPage }> <span>Next</span> </button> </center>
   <center><img src={image}/></center>
</div>
 );
}
export default App;
