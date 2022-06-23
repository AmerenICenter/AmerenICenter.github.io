import styles from './Button.module.css';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button(props) {
  if (props.isLanding) {
    return (
      <button onClick={props.action} className={styles.button}>
        {props.text} <FontAwesomeIcon icon={faArrowDown} />
      </button>
    );
  } else {
    return (
      <button onClick={props.action} className={styles.button}>
        {props.text}
      </button>
    );
  }
}

export default Button;
