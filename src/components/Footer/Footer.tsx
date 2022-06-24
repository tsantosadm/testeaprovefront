import ChuckSelo from '../../assets/chucknorrisaprovado.jpg';
import { useStyles } from './styles';

export function Footer(){ 
  const styles = useStyles();
    return (
      
        <div className={ styles.root }>
          <img  src={ ChuckSelo }  width="50px" height="50px" alt="Chuck-Invible"/>
          <p>2022 Desenvolvido por Talisson Santos - Desafio Aprove.</p>
        </div>
      
    );
}
