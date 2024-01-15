import { useState } from "react"

const Textform = (props) => {
    let [text, setText] = useState('')
    const clickUpHandler = () => {
        // console.log('click'+text)
        setText('My name is Khan')
        let newText = text.toUpperCase();
        setText(newText)
    }
    const clickLoHandler = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const onChangeHandler = (e) => {
        // console.log('changing')
        setText(e.target.value)//it will enable to write in textarea
    }
    const clickFiHandler = () => {

        let searchText = prompt('Enter the word to find');
        if (searchText) {
            let regex = new RegExp(searchText, 'gi');
            let newText = text.replace(regex, (match) => `<span style="background-color: yellow;">${match}</span>`);
            setText(newText);
        }
    }
    const clickReHandler = () => {
        let findText = prompt('Enter text');
        let replaceText = prompt('Enter replace text');
        if (findText) {
            let regex = new RegExp(findText, 'gi');
            let newText = text.replaceAll(regex, replaceText);
            setText(newText);
        }
    }
    const clickClHandler = () => {
        setText(text = '');
    }
    const copyHandler = () => {
        let newText = document.getElementById('myBox');
        // console.log(newText);
        newText.select();
        navigator.clipboard.writeText(newText.value);

    }
    const removeSpaceHandler = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3 highlight-overlay">
                    <textarea className="form-control" value={text} onChange={onChangeHandler} rows="8" placeholder="Write Something..." id="myBox" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white',color:props.mode==='dark'?'white':'black' }}></textarea>
                    {/* onChange using for enable to write in the textarea*/}

                </div>
                <div>
                    <button className="btn btn-primary me-1" onClick={clickUpHandler}>To Upper case</button>
                    <button className="btn btn-primary me-1" onClick={clickLoHandler}>To lower case</button>
                    <button className="btn btn-primary me-1" onClick={clickFiHandler}>Find Words</button>
                    <button className="btn btn-primary me-1" onClick={clickReHandler}>Replace Words</button>
                    <button className="btn btn-primary me-1" onClick={clickClHandler}>Clear Text</button>
                    <button className="btn btn-primary" onClick={copyHandler}>Copy Text</button>
                    <button className="btn btn-primary ms-1" onClick={removeSpaceHandler}>Remove Space</button>
                </div>
                <div >
                    <h3>Text Summary</h3>
                    <p>{text.split(" ").length} words and {text.length}characters</p>
                    <p>{0.008 * text.split(" ").length} minutes read </p>
                    {/* 125 word takes 1 min so in 1 word 1/125 */}
                    <h3>Preview Text</h3>
                    <div>
                        {text.length>0?text:'Write something to preview...'}
                        
                        
                    </div>

                </div>
            </div>
        </>
    )
}
export default Textform;