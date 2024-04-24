"use client";
import React, { useEffect, useState } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const CrimeMap: React.FC = () => {
    const [crimeData, setCrimeData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('API ENDPOINT');
                const data = await response.json();
                setCrimeData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (crimeData.length > 0) {
            plotMap();
        }
    }, [crimeData]);

    const plotMap = () => {
        const crimeLocations = crimeData.filter(location => location.Type === 'Predicted Crime Location');
        const policeStations = crimeData.filter(location => location.Type === 'Police Station');

        const crimeMarkers = crimeLocations.map(location => L.marker([location.Latitude, location.Longitude]).bindPopup('Predicted Crime Location'));
        const policeMarkers = policeStations.map(location => L.marker([location.Latitude, location.Longitude]).bindPopup('Police Station'));

        const map = L.map('map').setView([crimeLocations[0].Latitude, crimeLocations[0].Longitude], 10);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        const crimeLayer = L.layerGroup(crimeMarkers);
        const policeLayer = L.layerGroup(policeMarkers);

        const overlayMaps = {
            "Predicted Crime Locations": crimeLayer,
            "Police Stations": policeLayer
        };

        L.control.layers(null, overlayMaps).addTo(map);
    };

    return (
        <div>
            <div id="map" style={{ width: '100%', height: '600px' }}></div>
            <div id="json-data" style={{ marginTop: '20px' }}>
                <pre>{JSON.stringify(crimeData, null, 2)}</pre>
            </div>
        </div>
    );
};

export default CrimeMap;
