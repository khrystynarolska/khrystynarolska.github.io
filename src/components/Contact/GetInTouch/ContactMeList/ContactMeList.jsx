import s from './ContactMeList.module.scss';
import ContactMe from './ContactMe/ContactMe';

const contactMeList = [
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

const ContactMeList = () => {
  return (
    <div className={s.contactMeList}>
      {contactMeList.map((i, idx) => (
      <ContactMe key={idx} label={i.label} value={i.value} />
    ))}
    </div>
  )
}

export default ContactMeList