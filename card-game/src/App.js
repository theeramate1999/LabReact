import React from 'react';
import './App.css';
import WordCard from './WordCard';

import ans1 from './Image/ans1.jpg';
import ans2 from './Image/ans2.jpg';
import ans3 from './Image/ans3.jpg';
import ans4 from './Image/ans4.jpg';
import ans5 from './Image/ans5.jpg';
import ans6 from './Image/ans6.jpg';
import ans7 from './Image/ans7.jpg';
import ans8 from './Image/ans8.jpg';
import ans9 from './Image/ans9.jpg';
import ans10 from './Image/ans10.jpg';


var word;
var image;
var numRan = Math.floor(Math.random() * 10)+1;
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
case 4:word = "Germany";
       image = ans4;
       break;
case 5:word = "Laos";
       image = ans5;
       break;
case 6:word = "Russia";
       image = ans6;
       break;
case 7:word = "China";
       image = ans7;
       break;
case 8:word = "America";
       image = ans8;
       break;
case 9:word = "Brazil";
       image = ans9;
       break;
case 10:word = "India";
       image = ans10;
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
