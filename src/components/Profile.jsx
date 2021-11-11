import img from '../assets/my-photo.jpeg'

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile p-content'>
        <div className='p-content__photo'>
          <img src={img} alt="" className='p-content__img' />
        </div>
        <div className='p-content__info info'>
            <h1 className='info__title'>Khrystyna Rolska</h1>
            <span className='info__span'>Junior Front-End Developer</span>
            <div className='info__social'>
              icon    icon    icon    icon
            </div>
        </div>
      </div>
      <div className='profile p-links'>
        <a href="" className='p-links__lnk'>
          <span className='p-links__text'>Download my CV</span>
        </a>
        <a href="" className='p-links__lnk discover'>
          <span className='p-links__text'>Contact Me</span>
        </a>
      </div>
    </div>
  )
}

export default Profile