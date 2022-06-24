import { useEffect, useState } from 'react';
import { api } from '../../services/api'
import {
  Input,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  useTheme,
} from '@material-ui/core/';
import { MenuProps, useStyles } from './styles';

interface SidebarProps{
  handleInputChange:(text:string) => void;
  handleSelectedChange:(text:string) => void;
  value:any
}

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function Sidebar({ handleInputChange,handleSelectedChange, value }:SidebarProps) {
  const styles = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = useState("");
  const [categorias, setCategorias] = useState([]);

  const onchange = (selector:string | any) => {
    setPersonName(selector.target.value);
    handleSelectedChange(selector.target.value);
  }

  const getCategories = async () => {
    try {
      const { data } = await api.get('/categories')
      setCategorias(data.categorias)
    } catch (error) {
      alert("Ops!! Algo deu errado!")
    }
  }

  useEffect(() => {
    getCategories();
  }, [])


  return (
    <div className={styles.form}>
      {/* {
        JSON.stringify(categorias)
      } */}
      <TextField
        value={value}
        onChange={event => handleInputChange(event.target.value)}
        id="standard-textarea"
        label="Busque uma Historia!"
        placeholder="Busque uma Historia!"
        multiline
      />
      <FormControl className={styles.formControl} >
        <InputLabel id="demo-mutiple-name-label">Categorias</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          value={personName}
          onChange={onchange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {categorias.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={
                getStyles(
                  name,
                  personName,
                  theme
                )}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

  );
}
