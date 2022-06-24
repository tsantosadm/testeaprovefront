import React from 'react';
import ChuckGif from '../assets/chuckFooter.gif';
import { makeStyles } from '@material-ui/core'; 
const useStyles = makeStyles({
  root: {
    margin:'0',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',

  },
});

function Footer(){ 
  const classes = useStyles();
    return (
      
        <div className={ classes.root }>
          <img  src={ ChuckGif }  width="50px" height="50px" alt="Chuck-Invible"/>
          <p> © 2022 Desenvolvido por Talisson Santos - Desafio Aprove.</p>
        </div>
      
    );
}
 export default Footer;
