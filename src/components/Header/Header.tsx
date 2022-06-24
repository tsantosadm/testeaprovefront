import Chuck from '../../assets/chuckHeader.png';
import { useStyles } from './styles';

export function Header() {
  const styles = useStyles();
  return (
    <nav className={styles.header}>

      <img src={Chuck} width="200px" margin-bottom="" alt="Chuck-Invible" />

      <div >
        <h1 className={styles.h1}>Chuck Norris</h1>
        <p className={styles.p}>Uma lenda, varias histórias!</p>
      </div>
    </nav>
  );
}
