import React, { Fragment } from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <Fragment>
      {/* <div class=''> */}

      {/* </div> */}
      <section className={styles.landing}>
        <div className={styles.overlay}>
          <div className={styles.intro}>
            <h1 className={styles.header}>
              Welcome to the Ameren Innovation Center at Research Park
            </h1>
            <a href='#' className={styles.explore}>
              Explore
            </a>
          </div>
        </div>
      </section>
      {/* <div class='container'> */}
      <section className={styles.about}>
        {/* <div className={`${styles.about} container`}> */}
        <div className={`${styles.text} container`}>
          <h1>About Us</h1>
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
        <div className={`${styles.boxes} container`}>
          <div className={styles.box}>
            <h2>
              <i class='fas fa-arrows-alt-v'></i> Application Development
            </h2>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>

          <div className={styles.box}>
            <h2>
              <i class='fas fa-arrows-alt'></i>Data Science
            </h2>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>

          <div className={styles.box}>
            <h2>
              <i class='fas fa-mobile'></i>Innovations Operations
            </h2>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.about}>
          <div className={styles.text}>
            <h1>Who We Are</h1>
            <p>Are you interested in joining the team?</p>
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
