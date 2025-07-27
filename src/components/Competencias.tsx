import { FaHtml5, FaJs, FaReact, FaCss3Alt, FaGitAlt, FaNodeJs, FaFigma, FaDiscord } from "react-icons/fa";
import { SiDiscord, SiExpress, SiMongodb, SiNpm, SiPostman, SiTypescript, SiVite, SiNetlify, SiHeroku, SiVercel, SiGithub, SiVsco } from "react-icons/si";

function Competencias() {
    const skills = [
        { icon: <FaHtml5 />, label: "HTML", color: "#e44d26" },
        { icon: <FaCss3Alt />, label: "CSS", color: "#264de4" },
        { icon: <FaJs />, label: "JavaScript", color: "#f0db4f" },
        { icon: <SiTypescript />, label: "TypeScript", color: "#3178c6" },
        { icon: <FaReact />, label: "React", color: "#61dafb" },
        { icon: <FaNodeJs />, label: "Node.js", color: "#68a063" },
        { icon: <SiExpress />, label: "Express", color: "#000000" },
        { icon: <SiMongodb />, label: "MongoDB", color: "#4db33d" },
        { icon: <SiNpm />, label: "NPM", color: "#cb3837" },
        { icon: <FaGitAlt />, label: "Git", color: "#f05032" },
        { icon: <SiGithub />, label: "GitHub", color: "#181717" },
        { icon: <FaDiscord />, label: "Discord", color: "#7289da" },
        { icon: <SiDiscord />, label: "Discord.js", color: "#5865f2" },
        { icon: <FaFigma />, label: "Figma", color: "#f24e1e" },
        { icon: <SiPostman />, label: "Postman", color: "#ff6c37" },
        { icon: <SiVsco />, label: "VS Code", color: "#007acc" },
        { icon: <SiVite />, label: "Vite", color: "#646cff" },
        { icon: <SiNetlify />, label: "Netlify", color: "#00c7b7" },
        { icon: <SiHeroku />, label: "Heroku", color: "#430098" },
        { icon: <SiVercel />, label: "Vercel", color: "#000000" },
    ];

    return (
        <section id="competencias">
            <h2>Competências</h2>
            <div className="skills-grid">
                {skills.map((skill, i) => (
                    <div className="skill-card" key={i} style={{ borderColor: skill.color }}>
                        <div className="icon" style={{ color: skill.color, fontSize: "2rem" }}>
                            {skill.icon}
                        </div>
                        <span>{skill.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Competencias;
