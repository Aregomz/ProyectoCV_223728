import React from 'react';
import SkillRating from '../atomos/SkillRating';
import '../atomos/SkillRating.css';
import Titulo from '../atomos/Titulo';

const Skills = () => {
  const skills = [
    { name: 'HTML', rating: 5 },
    { name: 'CSS', rating: 4 },
    { name: 'JavaScript', rating: 4 },
    { name: 'React', rating: 5 },
    { name: 'Node.js', rating: 4 },
    { name: 'SQL', rating: 4 },
    { name: 'Python', rating: 5 },
    { name: 'Ruby', rating: 1 },
    { name: 'Git', rating: 4 },
    { name: 'Java', rating: 2 },
    { name: 'C++', rating: 5 },
    { name: 'C#', rating: 4 },
    { name: 'Ingles', rating: 5 },
    { name: 'Frances', rating: 3 },
    { name: 'Chino ', rating: 4 },
   
  ];

  const maxSkillsPerColumn = 3;

  const columns = [];
  let currentColumn = [];
  skills.forEach((skill, index) => {
    if (index > 0 && index % maxSkillsPerColumn === 0) {
      columns.push(currentColumn);
      currentColumn = [];
    }
    currentColumn.push(skill);
  });
  if (currentColumn.length > 0) {
    columns.push(currentColumn);
  }

  return (
    <div className="cv ml-auto w-3/4">
    {}
    <Titulo text="Habilidades"  />
      <div className="flex">
        {columns.map((column, index) => (
          <div key={index} className="mr-10">
            {column.map((skill, index) => (
              <section key={index} className="mb-16">
                <p className="skill-name">{skill.name}</p> {/* Aplica estilos aquí */}
                <div className="overflow-auto skill-circles">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <SkillRating key={i} filled={i < skill.rating} />
                    ))}
                </div>
              </section>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;