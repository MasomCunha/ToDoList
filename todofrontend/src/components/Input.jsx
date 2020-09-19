import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';

class ToDo extends Component {


  render() {
    return (
      <form className="post" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" value={this.props.Title}
          onChange={(e) => {  }}></input>
        <input type="text" placeholder="Description" value={this.props.Description}
          onChange={(e) => {  }}></input>
        <button type="submit">Add ToDo</button>
      </form>
    )
  }

}

function mapStateToProps(state) {
  return {
    Title: state.Title,
    Description: state.Description
    };
}

export default connect(mapStateToProps)(ToDo)
