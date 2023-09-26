const Experience = () => {
  const experiences = [
    {
      title: "Desarrollador de Software en ABC Tech",
      description: "Trabajé en el equipo de desarrollo de ABC Tech durante 3 años. Durante mi tiempo aquí, contribuí al desarrollo y mantenimiento de sistemas de gestión interna, optimizando procesos y mejorando la eficiencia operativa. Trabajé en colaboración con equipos multidisciplinarios y adquirí habilidades valiosas en programación, resolución de problemas y trabajo en equipo."
    },
    {
      title: "Ingeniero de Software en XYZ Solutions",
      description: "En XYZ Solutions, lideré proyectos cruciales para clientes de renombre. Me especialicé en el desarrollo de aplicaciones web de alto rendimiento, garantizando un diseño escalable y una experiencia de usuario excepcional. También participé activamente en la fase de planificación y diseño, aportando ideas innovadoras y soluciones técnicas para mejorar los productos."
    },
    {
      title: "Desarrollador Full Stack en InnovateX",
      description: "Como desarrollador Full Stack en InnovateX, trabajé en un entorno ágil para crear soluciones robustas y escalables. Me enfoqué en la implementación de características clave y la optimización de la experiencia del usuario. Además, colaboré con equipos multidisciplinarios y participé en revisiones de código, lo que me permitió mejorar continuamente mis habilidades de codificación."
    }
  ];
  
  
    return (
      <div className="cv ml-auto w-3/4">
        <h1 className="text-2xl mt-10 mb-5">Experiencia</h1>
        {experiences.map((experience, index) => (
          <section key={index} className="mb-5">
            <h3 className="text-xl">{experience.title}</h3>
            <h4>{experience.position}</h4>
            <p>{experience.description}</p>
          </section>
        ))}
      </div>
    );
  };
  
  export default Experience;
  
  