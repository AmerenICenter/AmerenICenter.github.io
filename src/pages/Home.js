import React, { useRef, useEffect } from 'react';
import styles from './Home.module.css';
import {
  faDatabase,
  faBriefcase,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/items/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
  const aboutSection = useRef(null);

  const scrollDown = () => {
    window.scrollTo({
      top: aboutSection.current.offsetTop,
      behavior: 'smooth',
    });
  };

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

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
    <>
      <section className={`${styles.landing} landingSection`}>
        <div className={styles.overlay}>
          <div className={styles.intro}>
            <h1 className={`${styles.header} container`}>
              Welcome to the Ameren Innovation Center at Research Park
            </h1>
            <Button action={scrollDown} isLanding={true} text={'Explore'} />
          </div>
        </div>
      </section>
      {/* <video autoplay loop muted>
        <source src='video.mp4' type='video/mp4'></source>
      </video> */}

      <section className={styles.about} ref={aboutSection}>
        <div className={`${styles.text} container`}>
          <h1 className={styles.aboutHeader}>About Us</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className={styles.buttonContainer}>
            <Button text={'Read More'} action={() => routeChange('about')} />
          </div>
        </div>
      </section>
      <section className={styles.team}>
        <div className={`${styles.teamContainer} container`}>
          <h1 className={styles.teamTitle}>Meet the Team</h1>
          <p className={styles.teamText}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>

          <div className={styles.boxes}>
            <div className={styles.box}>
              <div className={styles.boxHeader}>
                <FontAwesomeIcon icon={faCode} /> Application Development
              </div>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className={styles.box}>
              <div className={styles.boxHeader}>
                <FontAwesomeIcon icon={faDatabase} /> Data Science
              </div>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className={styles.box}>
              <div className={styles.boxHeader}>
                <FontAwesomeIcon icon={faBriefcase} /> Innovations Operations
              </div>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className={`${styles.buttons} ${styles.buttonContainer}`}>
            <Button
              text={'View Projects'}
              action={() => routeChange('projects')}
            />
            <Button
              text={'Meet the Interns'}
              action={() => routeChange('people')}
            />
          </div>
        </div>
      </section>
      <section>
        <div className={styles.about}>
          <div className={styles.text}>
            <h1 className={`${styles.interestedHeader} header`}>Interested?</h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
            <div className={`${styles.buttons} ${styles.buttonContainer}`}>
              <Button text={'Events'} action={() => routeChange('events')} />
              <Button text={'Join Us'} action={() => routeChange('joinus')} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
