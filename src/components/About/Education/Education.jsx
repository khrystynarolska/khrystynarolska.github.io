import s from './Education.module.scss';
import Wrapper from '../Wrapper/Wrapper';

const institutions = [
  {
    institution: 'Khmelnytsky National University',
    specialty: 'Specialty - personnel management and labor economics',
    trainingPeriod: '2015-2020'
  },
  {
    institution: 'Beetroot Academy',
    specialty: 'Specialty - Front-End Developer',
    trainingPeriod: 'June 2021 - October 2021'
  }
]

const Education = () => {
  return (
    <div className={s.education}>
      <Wrapper title={<>My <span>education</span></>}>
        {institutions.map((i, idx) => (
          <div className={s.content} key={idx}>
            <h4>{i.institution}</h4>
            <p>{i.specialty}</p>
            <span>{i.trainingPeriod}</span>
          </div>
        ))}
        <div className={s.button}>
          <button>Сertificate</button>
        </div>
    </Wrapper>
    </div>
  )
}

export default Education