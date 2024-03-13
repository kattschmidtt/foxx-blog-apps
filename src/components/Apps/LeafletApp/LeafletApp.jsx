import React, { useEffect, useState, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../../../App.css";
import { Container, Grid } from "@mui/material";

const LeafletComponent = () => {
  const mapContainerRef = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-97.7431);
  const [lat, setLat] = useState(30.2672);
  const [zoom] = useState(2);

  const [data, setData] = useState({
    type: "FeatureCollection",
    features: [],
  });
  const [load, loadData] = useState(true);

  useEffect(() => {
    // Get real life location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        setLng(pos.coords.longitude);
        setLat(pos.coords.latitude);
      })
    } 
    else {
      console.error('idk something went wrong with geolocation');
    }

    const fetchEarthquakeData = async () => {
      const response = await fetch(
        "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
      );
      if (load) {
        const data = await response.json();
        setData(data);
        loadData(false);
      }
    };

    map.current = L.map(mapContainerRef.current).setView([lat, lng], zoom);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
    }).addTo(map.current);

    var earthquakeMarkerOptions = {
      radius: 4,
      fillColor: "#FF0000",
      color: "#FFFFFF",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
  };

    var earthquakeLayer = L.geoJSON(data,{
      pointToLayer: function (feature, latlng) {
        const earthquakeMarker = L.circleMarker(latlng, earthquakeMarkerOptions);
          //popup
          earthquakeMarker.on("mouseover", function (e) {
            this.bindPopup(`
            <strong>${feature.properties.id}</strong><br><strong>Magnitude:</strong><p>${feature.properties.mag}</p><br><strong>Date:</strong>${new Date(feature.properties.time)}`).openPopup();
          });
        
        earthquakeMarker.on("mouseout", function (e) {
          this.closePopup();
        });

        return earthquakeMarker;
    
      }}).addTo(map.current);

    
    // Fetch Earthquake GeoJSON data
    map.current.on('load', fetchEarthquakeData());

    return () => {
      map.current.remove();
      earthquakeLayer.remove();
    };
  }, [lat, lng, zoom, data, load]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item>
          <div className="container map-container" ref={mapContainerRef} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LeafletComponent;