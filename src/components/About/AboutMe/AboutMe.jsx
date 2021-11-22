import s from './AboutMe.module.scss';
import InfoList from './InfoList/InfoList';
import Wrapper from '../../Wrapper/Wrapper';

const AboutMe = () => (
  <div className={s.aboutMe}>
    <Wrapper title={<>About <span>Me</span></>}>
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
    </Wrapper>
  </div>
)

export default AboutMe