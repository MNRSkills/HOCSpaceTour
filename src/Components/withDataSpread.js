import React,{Component} from "react";
import data from "../data.json";


const CrewDestTechComponent = OriginalComponent => {
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
            return <OriginalComponent data={this.state.data}/>
        }
    }
    return NewComponent
}

export default CrewDestTechComponent;