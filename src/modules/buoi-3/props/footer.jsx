import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    console.log('123',this.props)
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
