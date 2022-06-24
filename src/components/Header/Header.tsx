import Chuck from '../../assets/chucknorris.png';
import { useStyles } from './styles';

export function Header() {
  const styles = useStyles();
  return (
    <nav className={styles.header}>

      <img src={Chuck} width="200px" margin-bottom="" alt="Chuck-Invible" />

      <div >
        <h1 className={styles.h1}>Chuck Norris</h1>
        <p className={styles.p}>O Mais incrível dos Incríveis</p>
      </div>
    </nav>
  );
}
