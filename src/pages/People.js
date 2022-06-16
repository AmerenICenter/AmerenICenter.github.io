import styles from './People.module.css';
import PersonCard from '../components/layout/PersonCard';
import { Tree, TreeNode } from 'react-organizational-chart';
import { appTeam, dataTeam, iopsTeam } from '../data/team';

function StyledNode() {
  return (
    <div
      style={{
        padding: '5px',
        borderRadius: '8px',
        display: 'inline-block',
        border: '1px solid red',
      }}
    ></div>
  );
}

function createTree() {
  return (
    <Tree
      lineWidth={'2px'}
      lineColor={'green'}
      lineBorderRadius={'10px'}
      label={<StyledNode>Root</StyledNode>}
    >
      <TreeNode label={<StyledNode>Child 1</StyledNode>}>
        <TreeNode label={<StyledNode>Grand Child</StyledNode>} />
      </TreeNode>
      <TreeNode label={<StyledNode>Child 2</StyledNode>}>
        <TreeNode label={<StyledNode>Grand Child</StyledNode>}>
          <TreeNode label={<StyledNode>Great Grand Child 1</StyledNode>} />
          <TreeNode label={<StyledNode>Great Grand Child 2</StyledNode>} />
        </TreeNode>
      </TreeNode>
      <TreeNode label={<StyledNode>Child 3</StyledNode>}>
        <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
        <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />
      </TreeNode>
    </Tree>
  );
}

function createPersonCard(person) {
  console.log(person.links);
  return (
    <PersonCard
      name={person.name}
      major={person.major}
      headshot={person.headshot}
      graduationDate={person.graduationDate}
      biography={person.biography}
      team={person.team}
      links={person.links}
    />
  );
}

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
      <h1 className={`${styles.header} ${styles.appDevHeader}`}>
        Application Development Interns
      </h1>
      <div className={styles.wrapper}>{appTeam.map(createPersonCard)}</div>
      <h1 className={`${styles.header} ${styles.dataScienceHeader}`}>
        Data Science Interns
      </h1>
      <div className={styles.wrapper}>{dataTeam.map(createPersonCard)}</div>
      <h1 className={`${styles.header} ${styles.iOpsHeader}`}>
        Innovations Operations Interns
      </h1>
      <div className={`${styles.wrapper} ${styles.finalWrapper}`}>
        {iopsTeam.map(createPersonCard)}
      </div>
      <div>{createTree()}</div>
    </div>
  );
}

export default People;
