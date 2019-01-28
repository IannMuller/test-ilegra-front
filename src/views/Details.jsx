import React, { Component } from 'react'
import axios from 'axios';
import './Details.css';

export default class Releases extends Component {

  constructor(props) {
    super(props);
    this.getCharactersName = this.getCharactersName.bind(this);
    this.charactersList = this.charactersList.bind(this);

    this.state = {
      characters: [],
      charactersName: [],
      title: '',
      episode_id: '',
      director: '',
      producer: '',
      release_date: '',
      planets: [],
      starships: [],
      species: [],
      vehicles: [],
      loading: true,
    }
  }

  async componentWillMount() {
    const idMovie = this.props.location.query.idMovie;
    const url = `https://swapi.co/api/films/${idMovie}`;
    const rawData = await axios.get(url);

    this.setState({ ...rawData.data })

    this.getCharactersName(this.state.characters)
  }

  async getCharactersName() {
    const { characters } = this.state;

    const charactersName = await Promise.all(
      characters.map(async (character) => {
        const rawData = await axios.get(character);
        return (rawData.data.name);
      })
    );
    this.setState({ charactersName });
    this.setState({ loading: false });
  }

  charactersList() {
    if (this.state.loading)
      return (
        <div>
          <a>Carregando Infos...</a>
        </div>
      )
    return (
      <ul className="list-group">
        {
          this.state.charactersName.map((character, index) => (
            <li key={index} className="list-group-item">{character}</li>
          ))
        }
      </ul>
    )
  }

  render() {
    const { director,
      title,
      release_date,
      episode_id,
      producer      
    } = this.state
    return (
      <div className="container div">
        <a>Detalhes:</a>
        <ul className="list-group">
          <li className="list-group-item">Titulo original: {title}</li>
          <li className="list-group-item">Diretor: {director}</li>
          <li className="list-group-item">Produtor: {producer}</li>
          <li className="list-group-item">Data de lançamento: {release_date}</li>
          <li className="list-group-item">Ordem cronológica: {episode_id}</li>
        </ul>
        <a>Personagens:</a>
        {this.charactersList()}
      </div>
    );
  };
}
