import React, { Component } from "react";
import data from "../data.json";

const CrewDestTechComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        data: data,
        destinations: [],
        destName: "Moon",
        crew: data.crew,
      };

      this.handleChange = this.handleChange.bind(this);
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
      //   this.crewFolk();
    }

    render() {
      return (
        <div>
          <OriginalComponent
            data={this.state.data}
            handleChange={this.handleChange}
            destName={this.state.destName}
          />
        </div>
      );
    }
  }
  return NewComponent;
};

export default CrewDestTechComponent;
