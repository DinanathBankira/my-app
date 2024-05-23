import React, { useState } from 'react'

export default function TextFro() {
const handleUpClick=()=>{
  // console.log("You Clicked handleUpClick");
  let newtext=text.toUpperCase();
  setText(newtext);
}

const handleOnChange=(event)=>{
  // console.log("On Change");
  setText(event.target.value)
}

const[text,setText]=useState('Enter Text Here');
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Some</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} >Cunvert to uppercase</button>
    </div>
  )
}
