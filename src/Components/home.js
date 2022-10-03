import CrewDestTechComponent from "./withDataSpread";

import bgHome from "../assets/home/background-home-desktop.jpg";

const Home = (props) => {
  console.log(props.data);
  return <div className="home-page"></div>;
};

export default CrewDestTechComponent(Home);
