import { useMemo } from 'react';
import styles from './Map.module.css';
import { GoogleMap, Marker } from '@react-google-maps/api';

function Map() {
  const x = 40.089525303273504;
  const y = -88.24029044949108;
  const zoom = 13;

  const center = useMemo(() => ({ lat: x, lng: y }), []);
  return (
    <GoogleMap zoom={zoom} center={center} mapContainerClassName={styles.map}>
      <Marker position={center}></Marker>
    </GoogleMap>
  );
}

export default Map;
