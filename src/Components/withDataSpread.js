import React, { Component } from "react";
import data from "../data.json";

const CrewDestTechComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        data: data,
        destinations: data.destinations,
        destName: "Moon",
        crew: data.crew,
      };
      console.log(this.destName);

      this.handleChange = this.handleChange.bind(this);
    }

    locationsTour() {
      this.state.destinations.map((place, index) => {
        console.log("DESTINATIONS", place);
      });
    }

    crewFolk() {
      data.destinations.map((item, index) => {
        console.log("This is crew", item);
      });
    }

    // HANDLE CHANGE FOR THE COMPONENT DESTINATIONS

    handleChange(e) {
      // console.log(e);
      this.setState({
        destName: e,
      });
    }

    componentDidMount() {
      //   this.locationsTour();
      //   this.crewFolk();
    }

    render() {
      return (
        <OriginalComponent
          //   data={this.state.data}
          // destinations={this.locationsTour}
          handleChange={this.handleChange}
          // destName={this.destName}
        />
      );
    }
  }
  return NewComponent;
};

export default CrewDestTechComponent;
