import styles from './Footer.module.css';

function getCurrentYear() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <footer className={styles.outerFooter}>
      <div>
        <ul className={styles.links}>
          <li>
            <a href='https://github.com/AmerenICenter'>GitHub</a>
          </li>
          <li>
            <a href='https://researchpark.illinois.edu/tenant_directory/ameren-innovation-center/'>
              Website
            </a>
          </li>
          <li>
            <a href='#'>Facebook</a>
          </li>
          <li>
            <a href='#'>Instagram</a>
          </li>
        </ul>
      </div>
      <span className={styles.bottomFooter}>
        Copyright @ {getCurrentYear()} Ameren Innovation Center
      </span>
    </footer>
  );
}

export default Footer;
