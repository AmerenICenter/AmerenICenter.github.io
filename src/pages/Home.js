import React, { Fragment } from 'react';
import styles from './Home.module.css';
import {
  faDatabase,
  faBriefcase,
  faCode,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
  return (
    <Fragment>
      <section className={`${styles.landing} landingSection`}>
        <div className={styles.overlay}>
          <div className={styles.intro}>
            <h1 className={styles.header}>
              Welcome to the Ameren Innovation Center at Research Park
            </h1>
            <button href='/#' className={`${styles.explore} scrollDown`}>
              Explore <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </div>
        </div>
      </section>
      {/* <div class='container'> */}
      <section className={styles.about}>
        {/* <div className={`${styles.about} container`}> */}
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
          <div>
            <button>Read More</button>
          </div>
        </div>
        {/* </div> */}
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
            specimen book.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h2>
                <FontAwesomeIcon icon={faCode} /> Application Development
              </h2>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className={styles.box}>
              <h2>
                <FontAwesomeIcon icon={faDatabase} /> Data Science
              </h2>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className={styles.box}>
              <h2>
                <FontAwesomeIcon icon={faBriefcase} /> Innovations Operations
              </h2>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.about}>
          <div className={styles.text}>
            <h1>Interested?</h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div>
              <button>Join Us</button>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}
    </Fragment>

    // <section className={styles.home}>
    //   <div className='container'>
    //     <div className={styles.welcome}>
    //       Welcome to the Ameren Innovation Center at Research Park!
    //     </div>
    // <div className={styles.about}>
    //   <div className={styles.text}>
    //     <h1>About Us</h1>
    //     <p>
    //       Lorem Ipsum is simply dummy text of the printing and typesetting
    //       industry. Lorem Ipsum has been the industry's standard dummy text
    //       ever since the 1500s, when an unknown printer took a galley of
    //       type and scrambled it to make a type specimen book. It has
    //       survived not only five centuries, but also the leap into
    //       electronic typesetting, remaining essentially unchanged. It was
    //       popularised in the 1960s with the release of Letraset sheets
    //       containing Lorem Ipsum passages, and more recently with desktop
    //       publishing software like Aldus PageMaker including versions of
    //       Lorem Ipsum.
    //     </p>
    //     <div>
    //       <button>Read More</button>
    //     </div>
    //   </div>
    //   <img
    //     class='image'
    //     src='https://randomwordgenerator.com/img/picture-generator/54e2d1404a50ab14f1dc8460962e33791c3ad6e04e507440762a7cd1964ec5_640.jpg'
    //     alt='image'
    //   />
    // </div>
    //   </div>
    // </section>
  );
}

export default Home;
