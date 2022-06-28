import styles from './People.module.css';
import { createPersonCard } from '../components/layout/PersonCard';
import { Tree, TreeNode } from 'react-organizational-chart';
import { appTeam, dataTeam, iopsTeam, managerTeam } from '../data/team';

function StyledNode(props) {
  return (
    <div
      style={{
        padding: '5px',
        borderRadius: '8px',
        display: 'inline-block',
        border: '1px solid red',
      }}
    >
      {props.text}
    </div>
  );
}

function createTree() {
  return (
    <Tree
      lineWidth={'2px'}
      lineColor={'green'}
      lineBorderRadius={'10px'}
      label={<StyledNode text='Ameren Innovation Center'></StyledNode>}
    >
      <TreeNode
        label={<StyledNode text='Application Development'></StyledNode>}
      ></TreeNode>
      <TreeNode
        label={<StyledNode text='Data Science'></StyledNode>}
      ></TreeNode>
      <TreeNode
        label={<StyledNode text='Innovations Operations'></StyledNode>}
      ></TreeNode>
    </Tree>
  );
}

function People() {
  return (
    <div className={`${styles.main} container`}>
      <h1 className={`${styles.header} ${styles.infoHeader}`}>Who We Are</h1>
      <p>
        We are a cohort of fourteen interns who work under two full time employees to accomplish projects given by Ameren sponsors.
      </p>
      {/* <div className={styles.treeContainer}>{createTree()}</div> */}
      <h2 className={`${styles.peopleHeader}`}>Managers</h2>
      <div className={styles.wrapper}>{managerTeam.map(createPersonCard)}</div>
      <h2 className={`${styles.peopleHeader}`}>
        Application Development Interns
      </h2>
      <div className={styles.wrapper}>{appTeam.map(createPersonCard)}</div>
      <h2 className={`${styles.peopleHeader}`}>Data Science Interns</h2>
      <div className={styles.wrapper}>{dataTeam.map(createPersonCard)}</div>
      <h2 className={`${styles.peopleHeader}`}>
        Innovations Operations Interns
      </h2>
      <div className={`${styles.wrapper} ${styles.finalWrapper}`}>
        {iopsTeam.map(createPersonCard)}
      </div>
    </div>
  );
}

export default People;
