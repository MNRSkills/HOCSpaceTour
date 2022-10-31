import styles from "../styles/Crew.module.css";

export const CrewMember = (props) => {
  const { name, role, bio, images } = props.crewMember;

  if (props.crewName == name) {
    return (
      <>
        <article>
          <header>
            <span aria-hidden="true">02</span>
            <h4> Meet your crew</h4>
          </header>
          <h2 className={styles.role}>{role}</h2>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.bio}>{bio}</p>
        </article>
        <img src={images.png} alt="profile pic" />
      </>
    );
  }
};


export const Techy = (props) => {

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
