"use client";
import React, { useState } from 'react';
import Plotly from 'plotly.js-dist';

const CrimeVisualizations: React.FC = () => {
    const [selectedDistrict, setSelectedDistrict] = useState<string>('');

    const generateVisualizations = () => {
        if (selectedDistrict) {
            fetch(`https://tool1-bsoi.onrender.com/crime_visualizations/${selectedDistrict}`)
                .then(response => response.json())
                .then(data => {
                    const crimeMapData = JSON.parse(data.crime_map);
                    const crimeHeatmapData = JSON.parse(data.crime_heatmap);
                    Plotly.newPlot('crime-map', crimeMapData.data, crimeMapData.layout);
                    Plotly.newPlot('crime-heatmap', crimeHeatmapData.data, crimeHeatmapData.layout);
                })
                .catch(error => console.error('Error:', error));
        } else {
            alert("Please select a district.");
        }
    };

    const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDistrict(event.target.value);
    };

    return (
        <div>
            <h1>Crime Visualizations</h1>
            <label htmlFor="district-select">Select District:</label>
            <select id="district-select" value={selectedDistrict} onChange={handleDistrictChange}>
                <option value="">Select a District</option>
                <option value="Bagalkot">Bagalkot</option>
                <option value="Ballari">Ballari</option>
                <option value="Belagavi City">Belagavi City</option>
                <option value="Belagavi Dist">Belagavi Dist</option>
                <option value="Bengaluru City">Bengaluru City</option>
                <option value="Bengaluru Dist">Bengaluru Dist</option>
                <option value="Bidar">Bidar</option>
                <option value="Chamarajanagar">Chamarajanagar</option>
                <option value="Chickballapura">Chickballapura</option>
                <option value="Chikkamagaluru">Chikkamagaluru</option>
                <option value="Chitradurga">Chitradurga</option>
                <option value="CID">CID</option>
                <option value="Coastal Security Police">Coastal Security Police</option>
                <option value="Dakshina Kannada">Dakshina Kannada</option>
                <option value="Davanagere">Davanagere</option>
                <option value="Dharwad">Dharwad</option>
                <option value="Gadag">Gadag</option>
                <option value="Hassan">Hassan</option>
                <option value="Haveri">Haveri</option>
                <option value="Hubballi Dharwad City">Hubballi Dharwad City</option>
                <option value="K.G.F">K.G.F</option>
                <option value="Kalaburagi">Kalaburagi</option>
                <option value="Kalaburagi City">Kalaburagi City</option>
                <option value="Karnataka Railways">Karnataka Railways</option>
                <option value="Kodagu">Kodagu</option>
                <option value="Kolar">Kolar</option>
                <option value="Koppal">Koppal</option>
                <option value="Mandya">Mandya</option>
                <option value="Mangaluru City">Mangaluru City</option>
                <option value="Mysuru City">Mysuru City</option>
                <option value="Mysuru Dist">Mysuru Dist</option>
                <option value="Raichur">Raichur</option>
                <option value="Ramanagara">Ramanagara</option>
                <option value="Shivamogga">Shivamogga</option>
                <option value="Tumakuru">Tumakuru</option>
                <option value="Udupi">Udupi</option>
                <option value="Uttara Kannada">Uttara Kannada</option>
                <option value="Vijayanagara">Vijayanagara</option>
                <option value="Vijayapur">Vijayapur</option>
                <option value="Yadgir">Yadgir</option>
            </select>
            <button onClick={generateVisualizations}>Generate Visualizations</button>

            <div id="crime-map"></div>
            <div id="crime-heatmap"></div>
        </div>
    );
};

export default CrimeVisualizations;