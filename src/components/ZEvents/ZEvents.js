import React, { Component } from 'react';
import fetch from '../../core/fetch';

async function queryEvents() {
  const query = `{
    events{
      clientEmail,
      endDate
    }
  }`;

  const events = await fetch('/graphql', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
    credentials: 'include',
  });

  console.log(events);
}

queryEvents();

class ZEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }
  render() {
    return (
      <div />
    );
  }
}

export default ZEvents;
