"use client";
import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const CrimeVisualizationDashboard: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');

  const updateVisualizations = () => {
    const district = selectedDistrict;
    if (!district) {
      return;
    }

    fetch(`https://tool1-1-f4w9.onrender.com/crime_visualizations/${district}`)
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          alert(data.message);
          return;
        }
        // Assuming the JSON object has properties 'crime_map' and 'crime_heatmap' with Plotly JSON data
        // You can directly use 'Plot' component from 'react-plotly.js' to render the plots
      })
      .catch(error => {
        console.error('Error loading the data:', error);
        alert('Failed to load data.');
      });
  };

  return (
    <div>
      <h1>Crime Visualization Dashboard</h1>
      <label htmlFor="districtSelect">Choose a district:</label>
      <select
        id="districtSelect"
        onChange={(e) => setSelectedDistrict(e.target.value)}
      >
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
      <div id="map-container" style={{ width: '1000px', height: '800px' }}></div>
      <div id="heatmap-container" style={{ width: '1000px', height: '800px' }}></div>
    </div>
  );
};

export default CrimeVisualizationDashboard;
