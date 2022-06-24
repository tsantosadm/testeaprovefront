import Button from '@material-ui/core/Button';
import { useStyles } from './styles';

interface ButtonProps{
  handleOnclick:()=> void;
}

export function ButtonSearch({ handleOnclick }:ButtonProps) {
  const styles = useStyles();
  return (
    <Button
      variant="contained"
      className={styles.btn}
      color='primary' disableElevation
      onClick={handleOnclick}
    >
      Buscar
    </Button>
  );
}

