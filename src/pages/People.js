import styles from './People.module.css';
import PersonCard from '../components/layout/PersonCard';

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
      {/* <p>Our team hierarchy is comprised of </p> */}
      <h1 className={`${styles.header} ${styles.appDevHeader}`}>
        Application Development Interns
      </h1>
      <div className={styles.wrapper}>
        <PersonCard
          image={'https://picsum.photos/200'}
          title={'John Doe'}
          description={'Hello i work at this company'}
        />
        <PersonCard
          image={'https://picsum.photos/200'}
          title={'John Doe'}
          description={'Hello i work at this company'}
        />
        <PersonCard
          image={'https://picsum.photos/200'}
          title={'John Doe'}
          description={'Hello i work at this company'}
        />
        <PersonCard
          image={'https://picsum.photos/200'}
          title={'John Doe'}
          description={'Hello i work at this company'}
        />
        <PersonCard
          image={'https://picsum.photos/200'}
          title={'John Doe'}
          description={'Hello i work at this company'}
        />
        <PersonCard
          image={'https://picsum.photos/200'}
          title={'John Doe'}
          description={'Hello i work at this company'}
        />
        <PersonCard
          image={'https://picsum.photos/200'}
          title={'John Doe'}
          description={'Hello i work at this company'}
        />
        <PersonCard
          image={'https://picsum.photos/200'}
          title={'John Doe'}
          description={'Hello i work at this company'}
        />
        <PersonCard
          image={'https://picsum.photos/200'}
          title={'John Doe'}
          description={'Hello i work at this company'}
        />
      </div>
      <h1 className={`${styles.header} ${styles.dataScienceHeader}`}>
        Data Science Interns
      </h1>
      <div className={styles.wrapper}>
        <PersonCard
          image={'https://picsum.photos/200'}
          title={'John Doe'}
          description={'Hello i work at this company'}
        />
        <PersonCard
          image={'https://picsum.photos/200'}
          title={'John Doe'}
          description={'Hello i work at this company'}
        />
        <PersonCard
          image={'https://picsum.photos/200'}
          title={'John Doe'}
          description={'Hello i work at this company'}
        />
        <PersonCard
          image={'https://picsum.photos/200'}
          title={'John Doe'}
          description={'Hello i work at this company'}
        />
        <PersonCard
          image={'https://picsum.photos/200'}
          title={'John Doe'}
          description={'Hello i work at this company'}
        />
        <PersonCard
          image={'https://picsum.photos/200'}
          title={'John Doe'}
          description={'Hello i work at this company'}
        />
        <PersonCard
          image={'https://picsum.photos/200'}
          title={'John Doe'}
          description={'Hello i work at this company'}
        />
        <PersonCard
          image={'https://picsum.photos/200'}
          title={'John Doe'}
          description={'Hello i work at this company'}
        />
        <PersonCard
          image={'https://picsum.photos/200'}
          title={'John Doe'}
          description={'Hello i work at this company'}
        />
        {/* <PersonCard />
        <PersonCard /> */}
      </div>
    </div>
  );
}

export default People;
