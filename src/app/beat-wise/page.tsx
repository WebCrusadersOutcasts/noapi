"use client";
import React from 'react';

const CrimeReportsDownload: React.FC = () => {
    const downloadPDF = () => {
        const district = (document.getElementById('district-select') as HTMLSelectElement).value;
        if (district) {
            // Modify the URL to your Flask app's address/port
            window.location.href = `https://tool2-j913.onrender.com/download/${district}`;
        } else {
            alert("Please select a district.");
        }
    };

    return (
        <div>
            <h1>Download Crime Distribution Reports</h1>
            <select id="district-select">
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
            <button onClick={downloadPDF}>Download PDF</button>
        </div>
    );
};

export default CrimeReportsDownload;
