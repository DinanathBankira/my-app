import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was Clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handerOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }

    
    const [text,setText]=useState('Enter text here');
  return (
    <div>
        <h1>{props.heading}</h1>
       <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Some</label>
        <textarea className="form-control" value={text} onChange={handerOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Cunvert to uppercase</button>
    </div>
  )
}
