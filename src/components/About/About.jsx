import s from './About.module.scss';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';

const About = () => (
  <div className={s.about}>
    <AboutMe />
    <Skills />
  </div>
)

export default About