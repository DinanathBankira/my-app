import React, { useState } from 'react'

export default function TextFro(props) {

const handleOnClick=()=>{
  // console.log("Cliked on handleOnClick"+text);
  let newText=text.toUpperCase();
  setText(newText);
}

const handleOnChange=(event)=>{
  // console.log("Clicked on Changeed");
  setText(event.target.value);
}

  const [text,setText]=useState('Enter Your textg hear'); //main Topic
  return (
    <div>
      <h1>{props.heading}</h1>
       <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Some</label>
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnClick}>Cunvert to uppercase</button>
    </div>
  )
}
