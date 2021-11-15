import s from './AboutMe.module.scss';
import InfoList from './InfoList/InfoList';

const AboutMe = () => (
  <div className={s.aboutMe}>
    <header>
      <h4>About <span>Me</span></h4>
    </header>
    <div className={s.content}>
      <div className={s.description}>
        <p>
          I am Khrystyna Rolska, I studied at Beetroot Academy. There I studied at the 
          Front-End Developer course. I got experience to learn something new fast, I 
          had teamwork and presentation practice.
        </p>
      </div>
      <InfoList />
    </div>
  </div>
)

export default AboutMe