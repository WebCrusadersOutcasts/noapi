"use client";
import React from 'react';

const CrimeAnalysisReport: React.FC = () => {
    const generateReport = () => {
        fetch('https://tool4-acsg.onrender.com/generate_report')
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    setMessage(data.message);
                } else if (data.error) {
                    setMessage(`Error: ${data.error}`);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setMessage('An error occurred while generating the report.');
            });
    };

    const [message, setMessage] = React.useState<string>('');

    return (
        <div>
            <h1>Crime Analysis Report Generator</h1>
            <button onClick={generateReport}>Generate Report</button>
            <p>{message}</p>
        </div>
    );
};

export default CrimeAnalysisReport;
