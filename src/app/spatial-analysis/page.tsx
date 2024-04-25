"use client";
import React, { useEffect, useState } from 'react';

const ModelPredictions: React.FC = () => {
    const [predictions, setPredictions] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch predictions from Flask API
        fetch('https://sbrk.onrender.com/predictions')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch predictions');
                }
                return response.json();
            })
            .then(data => {
                setPredictions(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Model Predictions</h1>
            <div id="predictions">
                <h2>Linear Regression Predictions:</h2>
                <p>{predictions && predictions["Linear Regression Predictions"]}</p>
                <h2>Random Forest Regression Predictions:</h2>
                <p>{predictions && predictions["Random Forest Regression Predictions"]}</p>
                <h2>Linear Regression Metrics:</h2>
                <p>MSE: {predictions && predictions["Linear Regression Metrics"]?.MSE}<br />R²: {predictions && predictions["Linear Regression Metrics"]?.["R²"]}</p>
                <h2>Random Forest Regression Metrics:</h2>
                <p>MSE: {predictions && predictions["Random Forest Regression Metrics"]?.MSE}<br />R²: {predictions && predictions["Random Forest Regression Metrics"]?.["R²"]}</p>
            </div>
        </div>
    );
};

export default ModelPredictions;
