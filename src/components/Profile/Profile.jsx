import s from './Profile.module.scss'
import img from './assets/my-photo.jpeg'
import Links from './Links/Links'
import Download from './Download/Download'

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
          <Links />
        </div>
      </div>
      <Download />
    </div>
  )
}

export default Profile