// import s from './Header.module.scss'

const Header = () => {
  return (
    <div className='menu'>
      <div className='menu__list list'>
        <ul className='list__ul-menu'>
          <li className='list__ul-menu item'>
            <a>
              icon
              <span className='item__text'>ABOUT</span>
            </a>
          </li>
          <li className='list__ul-menu item'>
            <a href="">
              icon
              <span className='item__text'>RESUME</span>
            </a>
          </li>
          <li className='list__ul-menu item'>
            <a href="">
              icon
              <span className='item__text'>WORKS</span>
            </a>
          </li>
          <li className='list__ul-menu item'>
            <a href="">
              icon
              <span className='item__text'>CONTACT</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header