import s from './Project.module.scss'

const Project = ({ src, label, value, href }) => {
  return (
    <div className={s.project}>
      <img src={src} alt="" />
      <h2 className={s.label}>{label}</h2>
      <p className={s.value}>{value}</p>
      <a href={href} target='_blank' rel="noreferrer">DEMO</a>
    </div>
  )
}

export default Project