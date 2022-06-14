import styles from './People.module.css';
import PersonCard from '../components/layout/PersonCard';

function People() {
  return (
    <div className={styles.main}>
      <div>Who We Are</div>
      <p>our team is comprised of....</p>
      <h1>Application Development</h1>
      <div>
        <PersonCard />
        {/* <PersonCard />
        <PersonCard /> */}
      </div>
    </div>
  );
}

export default People;
