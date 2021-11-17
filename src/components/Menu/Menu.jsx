import s from './Menu.module.scss'

const items = [
  {
    href: '/about',
    className: 'fa fa-user',
    lable: 'ABOUT'
  },
  {
    href: '/resume',
    className: 'fa fa-file-text',
    lable: 'RESUME'
  },
  {
    href: '/works',
    className: 'fa fa-paint-brush',
    lable: 'WORKS'
  },
  {
    href: '/contact',
    className: 'fa fa-at',
    lable: 'CONTACT'
  },
]

const Menu = () => {
  return (
    <div className={s.menu}>
      <div className={s.menuList}>
        <ul>
          {items.map((i, idx) => (
          <li key={idx}>
            <a href={i.href}>
              <i className={i.className} aria-hidden="true"></i>
              <span>{i.lable}</span>
            </a>
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu