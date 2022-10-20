import CrewDestTechComponent from "../withDataSpread";
// import { CrewMember, MsgBuilder } from "./helper"


const Crew = (props)  => {
    console.log(props.data.crew)

   

    return <div>
        Hi MOM
        {/* {props.data.crew.map((member, index) =>{
            return (<CrewMember member={member} key={index}/>)
        })} */}
    </div>
}

export default CrewDestTechComponent(Crew);