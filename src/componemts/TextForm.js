import React from 'react'
import { useState } from 'react';
export default function TextForm(props) {
  const [text,setText]=useState('');
  const  handleUpClick = () =>{
     let newText=text.toUpperCase();
    setText(newText) 
  }

  const handleClearText = () => {
    setText("");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) =>{
    setText(event.target.value); 
  }
  const handleCopy = () => {
    var text= document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value); 
  }
  const handleExSpaces = () => {
    let nextText = text.split(/[ ]+/);
    setText(nextText.join(" "));

  }
   
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading}</h1>
      <div className=" my-3"> 
        <textarea className="form-control " value={text} onChange={handleOnChange}   id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'white':'grey' , color: props.mode==='dark'?'white':'black'}} ></textarea>
      </div>
      <button  className= {`btn btn-outline-${props.mode==='dark'?'info':'dark'} mx-2`}  onClick={handleClearText}>Clear text</button>
      <button  className= {`btn btn-outline-${props.mode==='dark'?'info':'dark'} mx-2`} onClick={handleUpClick}>Convert to UpperCase</button>
      <button  className= {`btn btn-outline-${props.mode==='dark'?'info':'dark'} mx-2`} onClick={handleLoClick}>Convert to LowerCase</button>
      <button  className= {`btn btn-outline-${props.mode==='dark'?'info':'dark'} mx-2`} onClick={handleCopy}>Copy Text</button>
      <button  className= {`btn btn-outline-${props.mode==='dark'?'info':'dark'} mx-2`} onClick={handleExSpaces}>Remove Extra Spaces</button>
    </div>
    <div className={`container my-3 text-${props.mode==='dark'?'light':'dark'}` }>
      <h1>Text Summary</h1>
      <h6>{text.split(" ").length}{" "}Words And {text.length}{" "} Characters</h6>
      <h6>{0.008 * text.split(" ").length}{" "}Minutes Reads</h6>
      <h3>Preview</h3>
      <p>{text.length===0?'Enter Your Text to Preview here':text}</p>
    </div>
    </>
  );
}

