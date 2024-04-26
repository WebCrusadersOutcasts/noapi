"use client";
import React, { useState, useEffect } from 'react';

const ModelPredictions: React.FC = () => {
    const [linearPredictions, setLinearPredictions] = useState<string[]>([]);
    const [rfPredictions, setRfPredictions] = useState<string[]>([]);
    const [linearMetrics, setLinearMetrics] = useState<string[]>([]);
    const [rfMetrics, setRfMetrics] = useState<string[]>([]);
    const [plotImage, setPlotImage] = useState<string>('');

    useEffect(() => {
        // Fetch predictions from Flask server
        fetch('https://sbrk-s9hf.onrender.com/predictions')
            .then(response => response.json())
            .then(data => {
                // Update state with fetched data
                setLinearPredictions(data["Linear Regression Predictions"]);
                setRfPredictions(data["Random Forest Regression Predictions"]);
                setLinearMetrics(data["Linear Regression Metrics"]);
                setRfMetrics(data["Random Forest Regression Metrics"]);
            })
            .catch(error => console.error('Error fetching predictions:', error));

        // Fetch plot image from Flask server
        fetch('https://sbrk-s9hf.onrender.com/plot')
            .then(response => response.json())
            .then(data => {
                // Update state with plot image data
                setPlotImage(`data:image/png;base64, ${data.plot_image_base64}`);
            })
            .catch(error => console.error('Error fetching plot image:', error));
    }, []); // Empty dependency array ensures useEffect only runs once

    return (
        <div>
            <h1>Model Predictions</h1>

            <h2>Linear Regression Predictions:</h2>
            <div>{linearPredictions.join(', ')}</div>

            <h2>Random Forest Regression Predictions:</h2>
            <div>{rfPredictions.join(', ')}</div>

            <h2>Linear Regression Metrics:</h2>
            <div>{JSON.stringify(linearMetrics)}</div>

            <h2>Random Forest Regression Metrics:</h2>
            <div>{JSON.stringify(rfMetrics)}</div>

            <h2>Model Comparison Plot:</h2>
            <img src={plotImage} alt="Model Comparison Plot" style={{ width: '80%' }} />
        </div>
    );
};

export default ModelPredictions;
