import s from './Technologies.module.scss';
import Technology from './Technology/Technology'

const tech = ['SASS', 'BEM', 'Vue', 'Redux', 'TypeScript', 'Git', 'Webpack', 'jQuery', 'Gulp']
 
const Technologies = () => (
  <div className={s.technologies}>
    {tech.map((i, idx) => (
      <Technology key={idx} label={i} />
    ))}
  </div>
)

export default Technologies