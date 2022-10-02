import CrewDestTechComponent from "./withDataSpread";

import bgHome from "../assets/home/background-home-desktop.jpg";


const Home = (props) => {
    console.log(props.data)
    return <div> 
        <img src={bgHome} alt="Sorry no image"/>
    </div>
}

export default CrewDestTechComponent(Home);