import s from './About.module.scss';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Education from './Education/Education';

const About = () => (
  <div className={s.about}>
    <AboutMe />
    <Skills />
    <Education />
  </div>
)

export default About