import { Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width:'100%',
    maxWidth: '700px',
    margin: '0.6rem 0',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function TextArea({history}){
  const classes = useStyles();
  return(
    <div className={ classes.root }>
      <Grid item xs={ 10 }>
      <Paper className={ classes.paper }>
        <p>{ history.value }</p>
        </Paper>
      </Grid>
    </div>
    )
}

export default TextArea;
