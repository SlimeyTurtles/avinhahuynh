import Image from "next/image";
import "./cardMatrix.css";

export default function CardMatrix() {

    const skills = [
        {
          name: "Javascript",
          src: "/card_images/js.png"
        },
        {
          name: "Java",
          src: "/card_images/java.jpg"
        },
        {
          name: "HTML",
          src: "/card_images/html.png"
        }
      ];
    
      const skillsMap = skills.map(x => (
        <img className="skills--image"
            key={skills.src}
            src={x.src}
            alt={x.name}
        />
      ))

    return (
        <section className="skills">
            <h3>Skills</h3>
            <div className="skills--grid">
              {skillsMap}
            </div>
        </section>
    )
}