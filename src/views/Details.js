import React, { Component } from 'react'
import axios from 'axios';

export default class Releases extends Component {

  constructor(props) {
    super(props);
    this.getCharactersName = this.getCharactersName.bind(this);

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
      characters.map(async (character, index) => {
        const rawData = await axios.get(character);
        return (rawData.data.name);
      })
    );
    this.setState({ charactersName })
  }


  render() {
    const { director,
      title,
      release_date,
      episode_id,
      producer,
      charactersName
    } = this.state
    return (
      <div className="container text-center">
        <ul className="list-group">
          <li className="list-group-item">Titulo original: {title}</li>
          <li className="list-group-item">Diretor: {director}</li>
          <li className="list-group-item">produtor: {producer}</li>
          <li className="list-group-item">Data de lançamento: {release_date}</li>
          <li className="list-group-item">ordem cronologica: {episode_id}</li>
        </ul>
        <table className="table">
          <thead>
            <tr>
              <th>Personagens</th>
            </tr>
          </thead>
          <tbody>
            {
              charactersName.map((character, index): Node => (
                <tr key={index}>
                  <td>{character}</td>
                </tr>
              ))
            }           
          </tbody>
        </table>
      </div>


    );
  };
}
