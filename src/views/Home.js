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
            idMovie={mockData[0].slug}
            action={() => hashHistory.push('/details')}
            img={mockData[0].img}
          />
          <Card
            idMovie={mockData[1].slug}
            action={() => hashHistory.push('/details')}
            img={mockData[1].img}
          />
          <Card
            idMovie={mockData[2].slug}
            action={() => hashHistory.push('/details')}
            img={mockData[2].img}
          />
          <Card
            idMovie={mockData[3].slug}
            action={() => hashHistory.push('/details')}
            img={mockData[3].img}
          />
          <Card
            idMovie={mockData[4].slug}
            action={() => hashHistory.push('/details')}
            img={mockData[4].img}
          />
          <Card
            idMovie={mockData[5].slug}
            action={() => hashHistory.push('/details')}
            img={mockData[5].img}
          />
          <Card
            idMovie={mockData[6].slug}
            action={() => hashHistory.push('/details')}
            img={mockData[6].img}
          />
        </div>
      </div>
    );
  };
}
