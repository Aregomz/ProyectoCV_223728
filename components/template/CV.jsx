import Skills from '../organisms/Skills';
import Experience from '../organisms/Experience';
import Education from '../organisms/Education';

const CV = () => {
  return (
    <div className="cv container">
      <div className="row">
        <aside className="col-md-4">
          {/* Content for aside goes here */}
        </aside>
        <div className="col-md-8">
          <Skills />
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default CV;
