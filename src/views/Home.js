import React, { Component } from 'react';
import Card from '../components/Card';
import { hashHistory } from 'react-router';
import mockData from '../mock/mockImages';

export default class Home extends Component {

  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <Card
            action={() => hashHistory.push(`/details?idMovie=${mockData[0].slug}`)}
            img={mockData[0].img}
          />
          <Card
            action={() => hashHistory.push(`/details?idMovie=${mockData[1].slug}`)}
            img={mockData[1].img}
          />
          <Card
            action={() => hashHistory.push(`/details?idMovie=${mockData[2].slug}`)}
            img={mockData[2].img}
          />
          <Card
            action={() => hashHistory.push(`/details?idMovie=${mockData[3].slug}`)}
            img={mockData[3].img}
          />
          <Card
            action={() => hashHistory.push(`/details?idMovie=${mockData[4].slug}`)}
            img={mockData[4].img}
          />
          <Card
            action={() => hashHistory.push(`/details?idMovie=${mockData[5].slug}`)}
            img={mockData[5].img}
          />
          <Card
            action={() => hashHistory.push(`/details?idMovie=${mockData[6].slug}`)}
            img={mockData[6].img}
          />
        </div>
      </div>
    );
  };
}
