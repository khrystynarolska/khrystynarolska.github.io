import s from './Profile.module.scss'
import img from '../../assets/my-photo.jpeg'

const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.content}>
        <div className={s.photo}>
          <img src={img} alt="" />
        </div>
        <div className={s.info}>
          <h1>Khrystyna Rolska</h1>
          <span>Junior Front-End Developer</span>
          <div className={s.social}>
            icon    icon    icon    icon
          </div>
        </div>
      </div>
      <div className={s.links}>
        <a href="">
          <span>Download my CV</span>
        </a>
        <a href="">
          <span>Contact Me</span>
        </a>
      </div>
    </div>
  )
}

export default Profile