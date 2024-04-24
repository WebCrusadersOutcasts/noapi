"use client";
import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';


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
        // Initialize Mapbox map
        mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [crimeData[0].Longitude, crimeData[0].Latitude], // Set initial center to first crime location
            zoom: 10 // Adjust zoom level as needed
        });

        // Add crime markers to the map
        crimeData.forEach(location => {
            const popup = new mapboxgl.Popup().setText('Predicted Crime Location');
            new mapboxgl.Marker()
                .setLngLat([location.Longitude, location.Latitude])
                .setPopup(popup)
                .addTo(map);
        });
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
