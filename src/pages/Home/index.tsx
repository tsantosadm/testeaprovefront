import { Container, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Header, Sidebar, TextArea, Footer, ButtonSearch } from '../../components';
import { api } from "../../services/api";


const useStyles = makeStyles({
  root: {
    background: '#434985',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    textAlign: 'center',
  },
  reader: {
    background: '#f1f2f3'
  }
});


interface Histories {
  value: string,
  id: string,
  categories: [string, string],
}

export const Home: React.FC = () => {
  const [frase, setFrase] = useState('');
  const [textHistory, setTextHistory] = useState('');
  const [category, setcategory] = useState('');
  const [searchHistory, setSearchHistory] = useState<Histories[]>([]);

  useEffect(() => {
    api.get('/random/').then((response) => {
      setFrase(response.data.value);
    });
  }, [])


  function handleInputChange(inputText: string) {
    setTextHistory(inputText);
  };

  function handleSelectedChange(selector: string) {
    setcategory(selector)
  };

  async function search() {
    setFrase('')
    try {
      if (textHistory) {
        await api.get(`/search/${textHistory}`).then(response => {
          if (category) {
            if (response.data.result.length === 0) return alert('Não foi encontrado dados para essa categoria')
            let updatehistory = response.data.result.map(data => data).filter(data => data.categories[0] === category);
            if (updatehistory.length > 0) return setSearchHistory(updatehistory);
            setSearchHistory([])
            alert("Não Existes Nada relacionado nessa Categoria")
          } else {
            if (response.data.result.length === 0) { return alert('Não foi encontrado dados para essa categoria') }
            setSearchHistory(response.data.result)
          }
        })
      } else if (!textHistory && category) {
        await api.get(`/category/${category}`).then(response => {
          if (response.data.length === 0) return alert('Não foi encontrado dados para essa categoria')
          setSearchHistory([response.data])
        })
      } else {
        await api.get(`/random/`).then(response => {
          setSearchHistory([response.data])
        })
      }
    } catch (e) {
      alert('Parece que o nosso serviço não encontrou' +
        'nada relacionado a pesquisa')
    }

  }




  // if (palavrachave !== "") {

  //   api.get(`/random?category/${palavrachave}`).then(category => {
  //     const categores = category.data
  //     setHistory([categores])
  //     setpalavrachave("")
  //   })
  // } else if (categorias !== "") {

  //   api.get(`/search/${categorias}`).then(category => {
  //     const categores = category.data
  //     setHistory(categores.result)
  //   });
  // } else {
  //   api.get('/random').then(response => {
  //     const categores = response.data
  //     setHistory([categores])
  //   });
  // }





  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Header />
      <Sidebar
        value={textHistory}
        handleInputChange={handleInputChange}
        handleSelectedChange={handleSelectedChange}

      />
      <ButtonSearch handleOnclick={() => { search() }} />
      {
        frase ? (

          <TextArea frase={frase} />
        ) :
          (
            searchHistory.map(resposta => {
              return (
                <TextArea key={resposta.id} frase={resposta.value} />
              )
            })
          )
      }
      <Footer />
    </Container>
  )
};

