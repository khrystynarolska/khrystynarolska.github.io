import s from './Works.module.scss';
import Wrapper from '../common/Wrapper/Wrapper';
import Projects from './Projects/Projects';

const Works = () => (
  <div className={s.works}>
    <Wrapper title={<>My <span>portfolio</span></>}>
      <div className={s.content}>
        <Projects />
      </div>
    </Wrapper>
  </div>
)

export default Works