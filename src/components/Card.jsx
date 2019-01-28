import React from 'react';
import './Card.css';

const Card = (props) => (
  <div className="col-12 col-sm-4">
    <div className="Card">
      <img
        className="card-img-top rounded mx-auto d-block"
        style={{ paddingTop: '35px', width: '250px', height: '375px' }}
        src={ props.img }
        alt="Poster"
      />
      <div className="card-block">
        <h4 className="card-title">{ props.title }</h4>
        <p className="card-text">{ props.text }</p>
        <button className="btn btn-warning" onClick={ props.action }>Detalhes</button>
      </div>
    </div>
  </div>
);

export default Card;
