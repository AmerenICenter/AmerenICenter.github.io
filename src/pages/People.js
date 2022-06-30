import styles from './People.module.css';
import { createPersonCard } from '../components/layout/PersonCard';
import { appTeam, dataTeam, iopsTeam, managerTeam } from '../data/team';
import { useEffect } from 'react';

function People() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollUp();
  }, []);

  return (
    <div className={`${styles.main} container`}>
      <h1 className={`${styles.header} ${styles.infoHeader}`}>Who We Are</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <h2 className={`${styles.peopleHeader}`}>Managers</h2>
      <div className={styles.wrapper}>{managerTeam.map(createPersonCard)}</div>
      <h2 className={`${styles.peopleHeader}`}>
        Application Development Interns
      </h2>
      <div className={styles.wrapper}>{appTeam.map(createPersonCard)}</div>
      <h2 className={`${styles.peopleHeader}`}>Data Science Interns</h2>
      <div className={styles.wrapper}>{dataTeam.map(createPersonCard)}</div>
      <h2 className={`${styles.peopleHeader}`}>
        Innovations Operations Interns
      </h2>
      <div className={`${styles.wrapper} ${styles.finalWrapper}`}>
        {iopsTeam.map(createPersonCard)}
      </div>
    </div>
  );
}

export default People;
