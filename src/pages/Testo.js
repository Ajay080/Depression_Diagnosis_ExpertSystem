import React, { useState } from "react";
import { tf } from "tensorflow";

const Testo = () => {
  const [symptoms, setSymptoms] = useState([
    {
      name: "Feeling sad or having a depressed mood",
      bias: 1,
      threshold: 5,
    },
    {
      name: "Loss of interest or pleasure in activities once enjoyed",
      bias: 1,
      threshold: 5,
    },
    {
      name: "Changes in appetite - weight loss or gain unrelated to dieting",
      bias: 1,
      threshold: 5,
    },
    {
      name: "Trouble sleeping or sleeping too much",
      bias: 1,
      threshold: 5,
    },
    {
      name: "Loss of energy or increased fatigue",
      bias: 1,
      threshold: 5,
    },
    {
      name: "Feeling worthless or guilty",
      bias: 1,
      threshold: 5,
    },
    {
      name: "Difficulty thinking, concentrating, making decisions",
      bias: 1,
      threshold: 5,
    },
    {
      name: "Thoughts of death or suicide",
      bias: 1,
      threshold: 5,
    },
 ]);

  const calculateScore = () => {
    let score = 0;

    for (const symptom of symptoms) {
      if (symptom.rating > symptom.threshold) {
        score += symptom.bias;
      }
    }

    return score;
  };

  const [model, setModel] = useState(null);

  const trainModel = async () => {
    const data = tf.data.fromTensors(symptoms).batch(1);
    const labels = tf.data.fromTensors(symptoms.bias).batch(1);

    model = await tf.keras.models.Sequential([
      tf.keras.layers.Dense({
        inputShape: [symptoms.length],
        units: 10,
        activation: "relu",
      }),
      tf.keras.layers.Dense({
        units: 1,
        activation: "sigmoid",
      }),
    ]).compile({
      loss: "binary_crossentropy",
      optimizer: "adam",
      metrics: ["accuracy"],
    });

    await model.fit(data, labels);
  };

  const predict = async () => {
    const input = tf.data.fromTensors([symptoms]).batch(1);
    const prediction = await model.predict(input);

    return prediction;
  };

  return (
    <div>
      <h1>Depression Diagnosis</h1>

      <ul>
        {symptoms.map((symptom) => (
          <li key={symptom.name}>
            {symptom.name}
            <input
              type="number"
              min="0"
              max="10"
              value={symptom.rating}
              onChange={(e) => setSymptoms((prevSymptoms) => {
                const newSymptoms = [...prevSymptoms];
                newSymptoms[symptoms.indexOf(symptom)] = {
                  ...symptom,
                  rating: e.target.value,
                };
                return newSymptoms;
              })}
            />
          </li>
        ))}
      </ul>

      <h2>Score</h2>
      <p>{calculateScore()}</p>

      <h3>Prediction</h3>
      <p>{predict()}</p>

      <button onClick={trainModel}>Train Model</button>
    </div>
  );
};

export default Testo;
