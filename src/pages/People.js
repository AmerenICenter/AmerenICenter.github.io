import styles from './People.module.css';
import PersonCard from '../components/layout/PersonCard';
import Modal from 'react-modal';
import { appTeam, dataTeam, iopsTeam } from '../data/team';
// import { useState } from 'react';

function createPersonCard(person) {
  console.log(person.links);
  return (
    <PersonCard
      name={person.name}
      major={person.major}
      headshot={person.headshot}
      graduationDate={person.graduationDate}
      biography={person.biography}
      team={person.team}
      links={person.links}
    />
  );
}

function People() {
  return (
    <div className={`${styles.main} container`}>
      <h1 className={`${styles.header} ${styles.infoHeader}`}>Who We Are</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <h1 className={`${styles.header} ${styles.appDevHeader}`}>
        Application Development Interns
      </h1>
      <div className={styles.wrapper}>{appTeam.map(createPersonCard)}</div>
      <h1 className={`${styles.header} ${styles.dataScienceHeader}`}>
        Data Science Interns
      </h1>
      <div className={styles.wrapper}>{dataTeam.map(createPersonCard)}</div>
      <h1 className={`${styles.header} ${styles.iOpsHeader}`}>
        Innovations Operations Interns
      </h1>
      <div className={`${styles.wrapper} ${styles.finalWrapper}`}>
        {iopsTeam.map(createPersonCard)}
      </div>
    </div>
  );
}

export default People;
