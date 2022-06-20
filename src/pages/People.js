import styles from './People.module.css';
// import archit from './images/data/archit.jpeg'
// import david from './images/data/david-an.jpeg'


function People() {
  return  (
    <div> 
      <h1 className={styles.title}>Teams</h1>
        <h2 className={styles.team}>Application Development</h2>
          <ul className={styles.list}>
            <li>Edward Tomlins</li>
            <li>Emily Ho</li>
            <li>Jacom Chang</li>
            <li>William Tegge</li>
            <li>Zakaria-Ramdan Sadoun</li>
          </ul>
        <h2 className={styles.team}>Data Science</h2>
          <ul className={styles.list}>
            <li>Archit Myadam</li>
            <li>David An</li>
            <li>Jash Parekh</li>
            <li>Myles Ream</li>
            <li>Xander Pero</li>
          </ul>
        <h2 className={styles.team}>Innovation Operations</h2>
          <ul className={styles.list}>
            <li>George Atkins</li>
            <li>Jack Aubry</li>
            <li>Katie Kabbes</li>
            <li>Ritika Patel</li>
          </ul>
    </div>
  );
}

export default People;
