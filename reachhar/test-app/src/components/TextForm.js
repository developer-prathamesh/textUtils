import React,{useState} from 'react';


function TextForm({heading,mode,showAlert}) {
    const [text,setText] = useState('enter text here');
    const handleClick=()=>{
        console.log('clicked')
        let newText = text.toUpperCase()
        setText(newText)
        showAlert("Converted to Uppercase","success")
    }
    
    const handleLClick=()=>{
        console.log('clicked')
        let newText = text.toLowerCase()
        setText(newText)
        showAlert("Converted to Lower case","success")
    }
    const colorChange=()=>{
        // setText(newColor)
        
    
    }
    const clearText=()=>{
        let newText1 = ' '
        setText(newText1)
        showAlert("cleared","success")
    }
    const handleOnChange=(e)=>{
        console.log('clicked')
        setText(e.target.value)
    }
    
    // setText("hello")
    return(
        <div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label" style={divStyle}>{heading}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange} value={text} style={{backgroundColor:mode==='dark'?'#212529':'white',color:mode==='dark'?'white':'black'}}></textarea>
                    <button type="button" className="btn btn-primary my-2" onClick={handleClick}>Convert Up</button>
                    <button type="button" className="btn btn-primary mx-3 my-2" onClick={handleLClick}>Convert Low</button>
                    <button type="button" className="btn btn-primary mx-3 my-2" onClick={clearText}>Clear</button>
                    <button type="button" className="btn btn-primary mx-3 my-2" onClick={colorChange}>Change</button>
                </div>  
            </div>
            <div className="container my-2">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something"}</p>
            </div>
        </div>
    )
}


const newColor = {
    // color:'green',
    fontSize:'23px'
}


const divStyle = {
    fontWeight: 600,
    fontSize:'24px'
}

export default TextForm;
