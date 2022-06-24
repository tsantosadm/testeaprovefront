import { Grid, Paper } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useStyles } from './styles';

interface HistoryProps {
  frase: string
}

export function TextArea({ frase }: HistoryProps) {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Grid item xs={10}>
        <Paper className={styles.paper}>
          <p>{frase}</p>
        </Paper>
      </Grid>
    </div>
  )
}

