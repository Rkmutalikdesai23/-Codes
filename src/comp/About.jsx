import "../style/about.css";
import abc from "../abbg1.jpg";
const About = () => {
  return (
    <div className="about1">
      <img src={abc} alt="" />
      <div className="about">
        <h1> Hi, I'm Ramakrishna MutalikDesai.</h1>
        <p>
          I recently completed my bachelor's degree in Computer Science
          Engineering at KLE Technological University. <br />
          I'm from Gokak, Belagavi District. I can speak English, Kannada, and
          Hindi. <br />
          My hobbies include playing and watching cricket, and I enjoy listening
          to music."
        </p>
      </div>
    </div>
  );
};

export default About;
