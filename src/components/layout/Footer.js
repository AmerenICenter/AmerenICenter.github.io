import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faFacebook,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import Tooltip from '@mui/material/Tooltip';
import withStyles from '@mui/styles/withStyles';

function getCurrentYear() {
  return new Date().getFullYear();
}

const StyledTooltip = withStyles({
  tooltipPlacementTop: {
    top: '-20px',
  },
})(Tooltip);

function Footer() {
  return (
    <footer className={styles.outerFooter}>
      <div>
        <ul className={styles.links}>
          <li>
            <StyledTooltip
              title={<span className={styles.tooltipText}>GitHub</span>}
              placement='top'
              arrow
            >
              <a target='_blank' rel='noreferrer' href='https://github.com/'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </StyledTooltip>
          </li>

          <li>
            <StyledTooltip
              title={<span className={styles.tooltipText}>Twitter</span>}
              placement='top'
              arrow
            >
              <a target='_blank' rel='noreferrer' href='https://twitter.com/'>
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
            </StyledTooltip>
          </li>
          <li>
            <StyledTooltip
              title={<span className={styles.tooltipText}>Facebook</span>}
              placement='top'
              arrow
            >
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.facebook.com/'
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </StyledTooltip>
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
