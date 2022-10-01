import React,{Component} from "react";
import data from "../data.json";


const CrewDestTechComponent = (OriginalComponent, OtherComponent) => {
    class NewComponent extends React.Component{
        constructor(){
            super();
            this.state = {
                data: data
            }
        }

        // crewFolk() {
        //     data.destinations.map((item, index) => {
        //         console.log("This is crew", item)
        //     })
        // }

        componentDidMount() {
            
        }

        
        render(){
            return (<OriginalComponent data={this.state.data}/>, <OtherComponent destinations={this.state.data.destinations}/>)
        }
    }
    return NewComponent
}

export default CrewDestTechComponent;