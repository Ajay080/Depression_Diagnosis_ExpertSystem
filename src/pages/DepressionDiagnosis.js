import React, { useState } from "react";
import './DepressionDiagnosis.css'
const DepressionDiagnosis = () => {
  const [symptoms, setSymptoms] = useState([
    {
      name: "Feeling sad or having a depressed mood",
      bias: 0.4,
      threshold: 4,
    },
    {
      name: "Loss of interest or pleasure in activities once enjoyed",
      bias: 0.2,
      threshold: 4,
    },
    {
      name: "Changes in appetite - weight loss or gain unrelated to dieting",
      bias: 0.6,
      threshold: 4,
    },
    {
      name: "Trouble sleeping or sleeping too much",
      bias: 0.1,
      threshold: 3,
    },
    {
      name: "Loss of energy or increased fatigue",
      bias: 0.1,
      threshold: 3,
    },
    {
      name: "Feeling worthless or guilty",
      bias: 0.6,
      threshold: 1,
    },
    {
      name: "Feeling helpless or hopeless",
      bias: 0.3,
      threshold: 3,
    },
    {
      name: "loss of self confidence",
      bias: 0.8,
      threshold: 3,
    },
    {
      name: "Feeling irritable",
      bias: 0.4,
      threshold: 3,
    },
    {
      name: "Decreased Appetite",
      bias: 0.3,
      threshold: 3,
    },
    {
      name: "Decreased Sex Drive",
      bias: 0.5,
      threshold: 3,
    },
    {
      name: "Feeling Disconnected with Others",
      bias: 0.7,
      threshold: 3,
    },
    {
      name: "Feeling overwhelmed",
      bias: 0.4,
      threshold: 3,
    },
    {
      name: "Unexplained Physical Conditions",
      bias: 1,
      threshold: 3,
    },
    {
      name: "Feeling Anxious",
      bias: 0.5,
      threshold: 3,
    },
    {
      name: "Difficulty Functioning at Work or School",
      bias: 0.8,
      threshold: 4,
    },
    {
      name: "Argument or Fights with better half",
      bias: 0.7,
      threshold: 3,
    },
    {
      name: "Difficulty thinking, concentrating, making decisions",
      bias: 0.3,
      threshold: 5,
    },
    {
      name: "Thoughts of death or suicide",
      bias: 20,
      threshold: 0,
    },
    {
      name: "Thoughts of harming yourself or other",
      bias: 2,
      threshold: 1,
    },

  ]);

  const calculateScore = () => {
    let score = 0;

    for (const symptom of symptoms) {
      if (symptom.rating > symptom.threshold) {
        score += symptom.bias*[symptom.rating-symptom.threshold];
      }
    }

    return score;
  };

  const val= ()=>{
    if(calculateScore()===0){
      return 'You do not have any depression.'
    }
    else if(calculateScore()<=13){
      return 'You are not at all under any condition of experiencing depression However there may be some situatiions where you are feeling bit pressure kindly Avoid that situations'
    }
    else if(calculateScore()>13 && calculateScore()<=22){
      return 'You may be experiencing mild depression, and it is recommended to take self-care measures or consult a healthcare professional'
    }
    else if(calculateScore()>22 && calculateScore()<=35){
      return 'You may be experiencing moderate depression and should consider seeking professional help.'
    }
    else if(calculateScore()> 35){
        return 'You may be experiencing severe depression and should seek professional help immediately.'
    }
  } 

  return (
    <div  className="container">
    <div className="left">
        {symptoms.map((symptom) => (
            <div className="card" key={symptom.name}>
              <div className="cardBody">
                <div className="card-title">
                   <p>{symptom.name}</p>
                </div>
                <div className="card-input">
                <input
                  className
                  type="number"
                  min="0"
                  max="10"
                  value={symptom.rating}
                  onChange={(e) => setSymptoms((prevSymptoms) => {
                    const newSymptoms = [...prevSymptoms];
                    if(e.target.value>10 ){
                        e.target.value=10;
                    }
                    newSymptoms[symptoms.indexOf(symptom)] = {
                      ...symptom,
                      rating: e.target.value,
                    };
                    return newSymptoms;
                  })}
                />
                </div>
              </div>
            </div>
        ))}
      </div>
      <div className="right">
        <h2>Score : {calculateScore()}</h2>
        <hr/>
        <h3>Diagnosis</h3>
        <p>{val()}</p>
      </div>
    </div>
  );
};

export default DepressionDiagnosis;


