import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import Planets from './Planets';
import PlanetData from './PlanetData';
import { useState } from 'react';
import React from "react";

const handleSubmit = event => {
  event.preventDefault();

}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ts: ''
    }
    this.child = React.createRef();
  }

  onChange(field, value) {
    // parent class change handler is always called with field name and value
    this.setState({ ts: value });
    this.child.current.callStateService();
    //this.child.callStateService(this.state.ts);
    //alert('test');
  }


  render() {
    return (
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <Planets onChange={this.onChange.bind(this)} />
            <PlanetData planet_name={this.state.ts} ref={this.child} />
          </fieldset><input type="submit" value="Submit" />
        </form>
      </div>
    );

  }





}

export default App;

App.propTypes = {
  name: PropTypes.string.isRequired,

};

