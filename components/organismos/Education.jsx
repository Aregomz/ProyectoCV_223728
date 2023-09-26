const Education = () => {
const educations = [
  {
    title: "Ingeniería en Ciencias de la Computación",
    description: "Universidad Tecnológica XYZ, 2012-2016. Durante mi carrera de ingeniería, adquirí conocimientos sólidos en algoritmos, estructuras de datos, programación orientada a objetos y desarrollo de software. Participé en proyectos prácticos que abarcaron desde aplicaciones web hasta sistemas embebidos, lo que me permitió aplicar los conceptos teóricos en entornos reales."
  },
  {
    title: "Maestría en Ingeniería de Software",
    description: "Universidad ABC, 2017-2019. Mi maestría se centró en el diseño y desarrollo de sistemas de software complejos. Adquirí experiencia en arquitectura de software, metodologías ágiles, integración continua y DevOps. Además, trabajé en proyectos de investigación que involucraron tecnologías emergentes y prácticas innovadoras en el campo de la ingeniería de software."
  },
  {
    title: "Certificación en Desarrollo Full Stack",
    description: "Plataforma de Educación Online, 2020. Durante esta certificación, amplié mis habilidades en desarrollo full stack, incluyendo tecnologías modernas como ReactJS, Node.js y MongoDB. Trabajé en proyectos prácticos que abordaron desafíos del mundo real, mejorando mi capacidad para diseñar y construir aplicaciones web escalables y eficientes."
  }
];

  
    return (
      <div className="cv ml-auto w-3/4 mt-10">
        <h1 className="text-2xl mt-0 mb-5">Estudios</h1>
        {educations.map((education, index) => (
          <section key={index} className="mb-5">
            <h3 className="text-xl">{education.title}</h3>
            <p>{education.description}</p>
          </section>
        ))}
      </div>
    );
  };
  
  export default Education;