 import './App.css';
import Navbar from './componemts/Navbar';
import TextForm from './componemts/TextForm';
import { useState} from 'react';

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode = () => {
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title="TextUtils - Light Mode"
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      document.title="TextUtils - Dark Mode"
    } 
  }

  return (
    <>
        <Navbar mode={mode} toggleMode={toggleMode} title="Textutils" about="About Us" />
        <TextForm mode={mode} toggleMode={toggleMode} heading="Enter Your Text Below" />
    </>
  );
}

export default App;
