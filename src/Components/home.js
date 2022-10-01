import CrewDestTechComponent from "./withDataSpread";


const Home = (props) => {
    return <div>{props.crew}</div>
}

export default CrewDestTechComponent(Home);