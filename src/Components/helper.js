

export const CrewMember = (props) => {
    console.log(props);
    return <div>This IS PRopR</div>
}


export const MsgBuilder = (props) => {
    console.log(props)
    return <div>
        This is builder for msg
    </div>
}


// export const sliderComp = (props) => {
//     return (
//         <ul className="unordered-list">
//         <li>
//           <input
//             type="button"
//             value="Moon"
//             onClick={(e) => props.handleChange(e.target.value)}
//           />
//         </li>
//         <li>
//           <input
//             type="button"
//             value="Mars"
//             onClick={(e) => props.handleChange(e.target.value)}
//           />
//         </li>
//         <li>
//           <input
//             type="button"
//             value="Europa"
//             className="nameBtn"
//             onClick={(e) => props.handleChange(e.target.value)}
//           />
//         </li>

//         <li>
//           <input
//             type="button"
//             value="Titan"
//             className="nameBtn"
//             onClick={(e) => props.handleChange(e.target.value)}
//           />
//         </li>
//       </ul>
//     )
// }