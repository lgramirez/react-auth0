import React, { Component } from 'react';

export default class Private extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
  }

  componentDidMount() {
    fetch("/private", {
      headers: {
        Authorization: `Bearer ${this.props.auth.getAccessToken()}`
      }
    })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error("Network response was not OK");
      })
      .then(data => this.setState({ message: data.message }))
      .catch(error => this.setState({ message: error.message }));
  }

  render() {
    return (
    <p>{ this.state.message }</p>
    )
  }
}
