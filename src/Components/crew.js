import CrewDestTechComponent from "./withDataSpread"
import { CrewMember, MsgBuilder } from "./helper"


const Crew = (props)  => {
    console.log(props.data.crew)

   

    return <div>
        {props.data.crew.map((member, index) =>{
            return (<CrewMember member={member} key={index}/>, <MsgBuilder bio={member.bio} key={index}/>)
        })}
    </div>
}

export default CrewDestTechComponent(Crew);