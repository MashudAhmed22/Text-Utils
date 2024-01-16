import React, { useState } from 'react'

export default function About(props) {
    const [btnText,setBtnText] = useState({
        color:'black',
        backgroundColor:`${props.mode==='light'?'gray':'gray'}`
    });
    const [toggleColor, settoggleColor] = useState('Enable Dark mode');
    const toggleStyle=()=>{
        if(btnText.color==='black'){
            setBtnText({
                color:'white',
                backgroundColor:'black',
                
            })
            settoggleColor('Enable Light  Mode')
            
        }
        else{
            setBtnText({
                color:'black',
                backgroundColor:'gray',
                border:'2px solid white'
            })
            settoggleColor('Enable dark mode')
            
        }
    }

    return (
        <div className='container'>
            <div className="accordion" id="accordionExample" style={btnText}>
            <h1 style={{color:props.mode==='light'?'dark':'white'}}>About Us</h1>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" style={btnText} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           Details Of Company
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={btnText}>
                            <strong>This is the first item's accordion body.</strong> though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={btnText} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Social Media
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={btnText}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={btnText} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Contact
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={btnText}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            <button type="button" onClick={toggleStyle} className='btn btn-primary mt-2'>{toggleColor}</button>
            </div>

        </div>
    )
}
