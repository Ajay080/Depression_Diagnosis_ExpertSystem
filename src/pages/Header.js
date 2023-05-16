import React from 'react'
import './Header.css'
import depre from './Img/depre.jpg';

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
                <p> The user need to answer the below questions politely
                    in the range between 0-10. While user is answering, simultaneous
                    report is generated which calculates the score of the depression.
                    This score will compare to some predefined threshold and based on that
                    The system will respond with Diagnosis and Advice.
                </p>

            </div>
            <div className="Header-right">
                <img src={depre} alt="Depression"/>
            </div>
        </div>
    </div>
  )
}

export default Header