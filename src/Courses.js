import React, { Component } from 'react';

export default class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    fetch("/course", {
      headers: {
        Authorization: `Bearer ${this.props.auth.getAccessToken()}`
      }
    })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error("Network response was not OK");
      })
      .then(data => this.setState({ courses: data.courses }))
      .catch(error => this.setState({ message: error.message }));
  }

  render() {
    const { courses } = this.state;
    return (
      <ul>
        { courses.map(course => {
          return <li key={ course.id }>{ course.title }</li>
        }) }
      </ul>
    )
  }
}
