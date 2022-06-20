import styles from './About.module.css';
import React from 'react';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapContainer from './map.js';

function About() {
  return (
    <div>
      <h1 className={styles.heading}> About the Innovation Center </h1>
      <div className={styles.statement}>
        <div>
          {' '}
          The Ameren Innovation Center collaborates with students and faculty
          from the University of Illinois and other companies across multiple
          industries at the Research Park. Their goal is to foster an
          exploratory environment that focuses on innovations to help Ameren
          better meet the future needs of its customers. Opened in 2015, the
          Ameren Innovation Center uses a multi-disciplinary workforce of
          interns and full-timers to leverage the kind of innovative technology
          needed for Ameren Digital to seize business opportunities and bring
          value to customers.{' '}
        </div>
      </div>

      <div class={styles.container}>
        <div className={styles.box}>
          <h2> Founded in 2015 </h2>
        </div>
        <div className={styles.box}>
          <h2> 14 Interns </h2>
        </div>
        <div className={styles.box}>
          <h2> Research Park UIUC </h2>
        </div>
      </div>

      <div className={styles.contact}>
        <h2> Contact us to get in touch! </h2>
        <div> 2100 S. First St. Champaign, IL</div>
        <div> Kevin Ficek: KFicek@ameren.com </div>
        <div> James Kabbes: JKabbes@ameren.com </div>
      </div>
    </div>
  );
}

export default About;
