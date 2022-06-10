import styles from './Home.module.css';

function Home() {
  return (
    // <div></div>
    <section className='landing'>
      <div className={styles.intro}>
        <h1>Welcome to the Ameren Innovation Center at Research Park</h1>
        <a href='#'>Explore</a>
      </div>
    </section>

    // <section className={styles.home}>
    //   <div className='container'>
    //     <div className={styles.welcome}>
    //       Welcome to the Ameren Innovation Center at Research Park!
    //     </div>
    //     <div className={styles.about}>
    //       <div className={styles.text}>
    //         <h1>About Us</h1>
    //         <p>
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s, when an unknown printer took a galley of
    //           type and scrambled it to make a type specimen book. It has
    //           survived not only five centuries, but also the leap into
    //           electronic typesetting, remaining essentially unchanged. It was
    //           popularised in the 1960s with the release of Letraset sheets
    //           containing Lorem Ipsum passages, and more recently with desktop
    //           publishing software like Aldus PageMaker including versions of
    //           Lorem Ipsum.
    //         </p>
    //         <div>
    //           <button>Read More</button>
    //         </div>
    //       </div>
    //       <img
    //         class='image'
    //         src='https://randomwordgenerator.com/img/picture-generator/54e2d1404a50ab14f1dc8460962e33791c3ad6e04e507440762a7cd1964ec5_640.jpg'
    //         alt='image'
    //       />
    //     </div>
    //   </div>
    // </section>
  );
}

export default Home;
