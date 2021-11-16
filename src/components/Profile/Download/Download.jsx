import s from './Download.module.scss'

const lnks = [
  {
    label: 'Download my CV', 
    href: '#downloadCV'
  },
  {
    label: 'Contact Me',
    href: '#contact'
  }
  ]

const Download = () => {
  return (
    <div className={s.download}>
      {lnks.map((i, idx) => (
        <a href={i.href} key={idx}>
          <span>{i.label}</span>
        </a>
      ))}
    </div>
  )
}

export default Download