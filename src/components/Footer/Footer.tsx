import ChuckGif from '../../assets/chuckFooter.gif';
import { useStyles } from './styles';

export function Footer(){ 
  const styles = useStyles();
    return (
      
        <div className={ styles.root }>
          <img  src={ ChuckGif }  width="50px" height="50px" alt="Chuck-Invible"/>
          <p> © 2022 Desenvolvido por Talisson Santos - Desafio Aprove.</p>
        </div>
      
    );
}
