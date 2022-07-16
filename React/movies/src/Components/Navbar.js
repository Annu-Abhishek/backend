import React, { Component } from 'react'

export default class  extends Component {
  render() {
    return (
      <div style={{display: 'flex', backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
        <h1>Movies App</h1>
        <h1 style={{marginLeft:'2rem'}}>Favourites</h1>
      </div>
    )
  }
}
