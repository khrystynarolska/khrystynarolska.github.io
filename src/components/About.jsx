const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        <h4 className='container__title'>About
          <span className='container__span'>My</span>
        </h4>
        <div className='container__content content'>
          <div className='content__description'>
            <p className='content__text'>
              I am Khrystyna Rolska, junior Front-End Developer.I have experience with HTML, 
              CSS, BEM methodology, SASS preprocessor, build tool Gulp, module bundler Webpack, 
              JavaScript, jQuery library, Git and Vue. I want to learn React. I like 
              communicate with people and teamwork
            </p>
          </div>
          <div className='content__info info'>
            <div className='info__age'>
              <p className='info__classification'>Age.....</p>
              <span className='info__span'>24</span>
            </div>
            <div className='info__residence'>
              <p className='info__classification'>Residence.....</p>
              <span className='info__span'>Ukraine</span>
            </div>
            <div className='info__address'>
              <p className='info__classification'>Address.....</p>
              <span className='info__span'>Khmelnytskyi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About