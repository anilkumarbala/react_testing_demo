import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ buttonColor , setButtonColor ]=useState('red');
  const [ disabled , setdisabled ]=useState(false);
  const newButtonColor=buttonColor==='red'?'blue':'red';

  return (
    <div>
      <button style={{backgroundColor: buttonColor}}
      onClick={()=>setButtonColor(newButtonColor)}
      disabled={disabled}
      >
        Change to {newButtonColor}
      </button> 
      <input type='checkbox'
      id="disable-button-checkbox"
      defaultChecked={disabled}
      onChange={(e)=>setdisabled(e.target.checked)}
      
      />
    </div>
   
  );
}

export default App;
