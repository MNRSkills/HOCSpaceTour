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

export const Tour = (props) => {
  console.log(props);
  const { name, images, description, distance, travel } = props.tour;
  const { png, webp } = images;
  if (props.destName == name) {
    return (
      <>
        <header>travel with booking.com</header>
        <img src={png} alt="" />
        <article>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.bio}>{description}</p>
          <span></span>
          <div className={styles.stat}>
            <div>{distance}</div>
            <div>{travel}</div>
          </div>
        </article>
      </>
    );
  }
};

export const Techy = (props) => {
  console.log("PROPS FOR TECH", props.tech);
  const { name, images, description } = props.tech;
  if (props.techName == name) {
    return (
      <>
        <ul>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
        </ul>
        <article>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.bio}>{description}</p>
        </article>
        <img src={images.portrait} alt="" />
      </>
    );
  }
};

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
