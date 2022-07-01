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
      {/* <section className={`${styles.landing} landingSection`}>
        <div className={styles.overlay}>
          <div className={styles.intro}>
            <h1 className={`${styles.header} container`}>
              Welcome to the Ameren Innovation Center at Research Park
            </h1>
            <Button action={scrollDown} isLanding={true} text={'Explore'} />
          </div>
        </div>
      </section> */}
      <div className={styles.videoWrapper}>
        <div className={styles.videoOverlay}></div>
        <video src={'videos/windturbine.mp4'} autoPlay loop muted />
        <div className={styles.landingContent}>
          {/* <h1>Welcome</h1>
          <p>to my site.</p> */}
          <h1 className={`${styles.header} container`}>
            Welcome to the Ameren Innovation Center at Research Park
          </h1>
          <Button
            className='explore-btn'
            action={scrollDown}
            isLanding={true}
            text={'Explore'}
          />
        </div>
      </div>
      {/* <div class='video-wrapper'>
        <video src="videos/windturbine.mp4" playsInline autoPlay muted loop>
          <source src='videos/windturbine.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div> */}

      <section className={styles.about} ref={aboutSection}>
        <div className={`${styles.text} container`}>
          <h1 className={styles.aboutHeader}>About Us</h1>
          <p className={styles.bodyText}>
            The Innovation Center (iCenter) is a one-of-a-kind office that
            encourages exploration and creativity. This collaborative
            environment brings together people from all types of majors and
            backgrounds to work on real world projects. In 2015, the iCenter
            opened its doors in the heart of Research Park. Since then, the
            iCenter has worked to tackle projects that range from electric
            vehicle analysis to gas leak detection. By utilizing an avant-garde
            style of internship, the iCenter is able to successfully complete
            over ten projects per summer. Deveolpment is at the core of the
            iCenter and every intern will experience growth in both their
            professional and personal lives. The iCenter works to bring in
            bright students from the University of Illinois and opens the door
            to new and exciting opportunities at Ameren. By granting interns'
            autonomy when coming up with solutions the iCenter can pioneer new
            ways of problem solving.
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
            The Ameren Innovation Center is split up into three teams:
            Application Development, Data Science, and Innovation Operations.
            Every team has their own set of projects and tasks to complete.
            Although they work on different projects, each team works closely
            with one another to accomplish their goals.
          </p>

          <div className={styles.boxes}>
            <div className={styles.box}>
              <div className={styles.boxHeader}>
                <FontAwesomeIcon icon={faCode} /> Application Development
              </div>
              <p>
                The application development team focuses on designing, building,
                and implementing software applications. The team built this
                website from scratch and even created a program that
                automatically generates Python documentation.
              </p>
            </div>

            <div className={styles.box}>
              <div className={styles.boxHeader}>
                <FontAwesomeIcon icon={faDatabase} /> Data Science
              </div>
              <p>
                The Data Science team deals with vast volumes of data using
                modern tools and techniques to find unseen patterns, derive
                meaningful information, and make informed decisions. Some topics
                they explore include Gas Usage Forecasting and how electric
                vehicle charging affects the power grid.
              </p>
            </div>

            <div className={styles.box}>
              <div className={styles.boxHeader}>
                <FontAwesomeIcon icon={faBriefcase} /> Innovations Operations
              </div>
              <p>
                The iOps team leads the internal side of the iCenter and removes
                all barriers that the other teams may face. Marketing the
                iCenter to potential applicants and internal management falls
                under the job description for the iOps team.
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
            <p className={styles.bodyText}>
              We hope to see you join our team one day!
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
