import s from './Interests.module.scss';
import Wrapper from '../Wrapper/Wrapper';

const hobbies = [
  {
    className: 'fa fa-bicycle',
    lable: 'Active recreation'
  },
  {
    className: 'fa fa-plane',
    lable: 'Travelling'
  },
  {
    className: 'fa fa-futbol-o',
    lable: 'Sport'
  },
  {
    className: 'fa fa-film',
    lable: 'Movies'
  }
]

const Interests = () => {
  return (
    <div className={s.interests}>
      <Wrapper title={<>My <span>interests</span></>}>
        <div className={s.content}>
          {hobbies.map((i, idx) => (
            <div className={s.hobbies} key={idx}>
              <i className={i.className} aria-hidden="true"></i>
              <p>{i.lable}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  )
}

export default Interests