import s from './About.module.scss';
import InfoList from './InfoList/InfoList';

const About = () => (
  <div className={s.about}>
    <header>
      <h4>About <span>Me</span></h4>
    </header>
    <div className={s.content}>
      <div className={s.description}>
        <p>
          I am Khrystyna Rolska, junior Front-End Developer.I have experience with HTML, 
          CSS, BEM methodology, SASS preprocessor, build tool Gulp, module bundler Webpack, 
          JavaScript, jQuery library, Git and Vue. I want to learn React. I like 
          communicate with people and teamwork
        </p>
      </div>
      <InfoList />
    </div>
  </div>
)

export default About