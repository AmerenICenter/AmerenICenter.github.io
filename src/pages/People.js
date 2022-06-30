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
        We are a cohort of fourteen interns who work under two full time
        employees to accomplish projects given by Ameren sponsors.
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
