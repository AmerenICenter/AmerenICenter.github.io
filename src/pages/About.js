import styles from './About.module.css';
import React from 'react';
import { useMemo } from 'react';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import MapContainer from './map.js';
// import axios from 'axios';

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }));
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName={styles.map}>
      <Marker position={center}></Marker>
    </GoogleMap>
  );
}

function About() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: '',
  });
  if (!isLoaded) return <div>Loading...</div>;
  // return <Map />;
  return (
    // <Map/>
    <div className='container'>
      <h1 className={styles.heading}> About the Innovation Center </h1>
      <div className={styles.line}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </div>
      <div className={styles.statement}>
        <div>
          The Ameren Innovation Center collaborates with students and faculty
          from the University of Illinois and other companies across multiple
          industries at the Research Park. Their goal is to foster an
          exploratory environment that focuses on innovations to help Ameren
          better meet the future needs of its customers. Opened in 2015, the
          Ameren Innovation Center uses a multi-disciplinary workforce of
          interns and full-timers to leverage the kind of innovative technology
          needed for Ameren Digital to seize business opportunities and bring
          value to customers.
        </div>
      </div>

      <div class={styles.factContainer}>
        <div className={styles.box}>
          <div className={styles.stat}>2015</div>
          <div className={styles.fact}>Founded</div>
        </div>
        <div className={styles.box}>
          <div className={styles.stat}>14</div>
          <div className={styles.fact}>Interns</div>
        </div>
        <div className={styles.box}>
          <div className={styles.stat}>Research Park</div>
          <div className={styles.fact}>Organization</div>
        </div>
      </div>

      <div className={styles.locationContainer}>
        <div className={styles.contact}>
          <h2 className={styles.contactHeader}>Contact Us</h2>
          <ul>
            <li>Head Manager: Joe</li>
            <li>Senior Software Engineer: email-goes-here</li>
            <li>Data Scientist</li>
            <li>Address: 2100 S. First St. Champaign, IL</li>
            <li>Head Manager: Joe</li>
            <li>Senior Software Engineer: email-goes-here</li>
            <li>Data Scientist</li>
            <li>Address: 2100 S. First St. Champaign, IL</li>
          </ul>
        </div>
        <div className={styles.mapContainer}>
          <Map />
        </div>
      </div>
    </div>
  );
}

export default About;
