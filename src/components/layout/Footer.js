import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.outerFooter}>
      <div>
        <div>Hello Part 1</div>
        <div>Hello Part 2</div>
      </div>
      <span className={styles.bottomFooter}>
        <ul className={styles.links}>
          <li>Copyright @ 2022 Ameren Innovation Center</li>
          <li>Disclaimer</li>
          <li>Moose</li>
          <li>Goat</li>
        </ul>
      </span>
    </footer>
  );
}

export default Footer;
