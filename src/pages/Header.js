import React from 'react'
import './Header.css'
import depre from './depre.jpg';

const Header = () => {
  return (
    <div className="Header">
        <div className="Header-body">
            <div className="Header-left">
                <h1>Expert System for Depression Diagnosis</h1>
                <p> This is a Rule Based Expert system for the Diagnosis of
                    Depression.
                </p>
                <h3>How to use it ?</h3>
                <p> The user need to answer the given 15 question politel
                    in the range between 0-10. While user is answering, simultaneously 
                    report is generated which calculte the score of the depression.
                    This score will compared to some predefined threshold and based on that
                    The system will respond with Diagnosis and advice.
                </p>

            </div>
            <div className="Header-right">
                <img src={depre}/>
            </div>
        </div>
    </div>
  )
}

export default Header