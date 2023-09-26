import SkillRating from "../atomos/SkillRating";

const Skill = ({ name, ratings }) => {
  return (
    <section>
      <p>{name}</p>
      {ratings.map((filled, index) => (
        <SkillRating key={index} filled={filled} />
      ))}
    </section>
  );
};

export default Skill;
