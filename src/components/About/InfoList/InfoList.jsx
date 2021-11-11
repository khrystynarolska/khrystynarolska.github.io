import Info from './Info/Info';
import s from './InfoList.module.scss';

const infoList = [
  {
    label: 'Age',
    value: 24
  },
  {
    label: 'Сountry',
    value: 'Ukraine'
  },
  {
    label: 'Сity',
    value: 'Khmelnytskyi'
  },
]

const InfoList = () => (
  <div className={s.info}>
    {infoList.map(i => (
      <Info key={i.label} label={i.label} value={i.value} />
    ))}
  </div>
)

export default InfoList;
