import React, {useEffect, useState, useRef} from "react";
import { Container, Grid } from "@mui/material";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { environment } from "../../../env.js";
import '../../../App.css';


mapboxgl.accessToken = environment.mapbox.accessToken;

const MapboxComponent = () => {
  const mapContainerRef = useRef(null);
  const map = useRef(null);

  const [lng, setLng] = useState(-97.7431);
  const [lat, setLat] = useState(30.2672);
  const [zoom] = useState(10);

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

    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.current.on("load", () => {
      map.current.resize();

      map.current.addSource('earthquakes', {
        type: 'geojson',
        data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson'
      });

      map.current.addLayer({
        'id': 'earthquakes-layer',
        'type': 'circle',
        'source': 'earthquakes',
        'paint': {
          'circle-radius': 4,
          'circle-stroke-width': 2,
          'circle-color': 'red',
          'circle-stroke-color': 'white'
        }
      });


      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });

      map.current.on('mouseenter', 'earthquakes-layer', e => {
        map.current.getCanvas().style.cursor = 'pointer';

        //console.dir(e);

        const cords = e.features[0].geometry.coordinates.slice();
        const properties = e.features[0].properties;
        //console.log(cords);
        //console.log(properties);

        const popupHtml = `<strong>${properties.id}</strong><br><strong>Magnitude:</strong><p>${properties.mag}</p><br><strong>Date:</strong>${new Date(properties.time)}`

        while (Math.abs(e.lngLat.lng - cords[0]) > 180) {
          cords[0] += e.lngLat.lng > cords[0] ? 360 : -360;
        }

        popup.setLngLat(cords).setHTML(popupHtml).addTo(map.current);
      });

      map.current.on('mouseleave', 'earthquakes-layer', () => {
        map.current.getCanvas().style.cursor = '';
        popup.remove();
      });
    });

    return () => map.current.remove();
  },[lng, lat, zoom]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item>
          <div className="container map-container" ref={mapContainerRef}/> 
        </Grid>
      </Grid>
    </Container>
       
  )
};

export default MapboxComponent;