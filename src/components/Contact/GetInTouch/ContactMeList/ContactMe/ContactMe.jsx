import s from './ContactMe.module.scss';

const ContactMe = ({ label, value }) => {
  return (
    <div className={s.contactMe}>
      <p className={s.label}>{label}....</p>
      <span className={s.value}>{value}</span>
    </div>
  )
}

export default ContactMe