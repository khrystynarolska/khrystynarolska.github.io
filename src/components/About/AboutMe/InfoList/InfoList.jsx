import Info from '../../../common/Info/Info';
import s from './InfoList.module.scss';

const infoList = [
  {
    label: 'Сity',
    value: 'Khmelnytskyi, Ukraine'
  },
  {
    label: 'Email',
    value: 'krystynarolskaya2017@gmail.com'
  },
  {
    label: 'Phone',
    value: '+38 (097) 00 79 067'
  },
]

const InfoList = () => (
  <div className={s.info}>
    {infoList.map((i, idx) => (
      <Info key={idx} label={i.label} value={i.value} />
    ))}
  </div>
)

export default InfoList;
