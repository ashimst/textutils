import React,{useState} from 'react'
//import PropTypes from 'prop-types'
export default function Textform(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to uppercase","success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleLoClick=()=>{
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase","success")
    }
    const [text,setText]=useState('enter the text');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#10294C':'white'}} >
      <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control"  style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'grey':'white'}} id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
        <div className="container my-3">
          <h1>Details of your text</h1>
          <p><b>characters:{text.length}</b></p>
          <p>words:{text.split(" ").length}</p>
          <p>preview:{text.length>0?text:'enter something to preview'}</p>
        </div>
    </div>

    </>
  )
}
