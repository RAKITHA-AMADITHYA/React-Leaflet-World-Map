import React from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import { statesData } from './data';
 import { sriLankaStatesData } from './components/SriLankadata.jsx';
// import { distric } from './components/Distric';

import './App.css';

const center = [7.8731, 80.7718];

export default function App() {
  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ width: '100vw', height: '100vh' }}
    >
      <TileLayer
        url='https://api.maptiler.com/maps/topo-v2/{z}/{x}/{y}.png?key=AC2Jn63Rtn9hCtyiSz9q'
       
      />
      {sriLankaStatesData.features.map((state ) => {
        const coordinates = state.geometry.coordinates[0].map((item) => [
          item[1],
          item[0],
        ]);

        return (
          <Polygon 
            pathOptions={{
               fillColor: 'transparent',
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: '#FAEF9B',
            }}
            positions={coordinates}
            eventHandlers={{
              mouseover:(e)=>{
                const layer =e.target;
                layer.setStyle({
                 fillOpacity :0.20,
                 weight:1,
                 dashArray:"100",
                 fillColor:'blue',
                 
                })
              },
              mouseout:(e)=>{
                const layer =e.target;
                layer.setStyle({
                 fillOpacity :0.7,
                 weight:2,
                 dashArray:"3",
                 color:'#FAEF9B',
                 fillColor:'transparent'
                })
              },
              click :(e)=>{
                    
              }
            }}
          />
        );
      })}
    </MapContainer>
  );
}
