import s from './GetInTouch.module.scss';
import Wrapper from '../../Wrapper/Wrapper';
import ContactMeList from './ContactMeList/ContactMeList';
import MapComponent from '../MapComponent/MapComponent';

const GetInTouch = () => {
  return (
    <div className={s.getInTouch}>
      <Wrapper title={<>Get <span>in Touch</span></>}>
        <div className={s.content}>
          <p>I am open to conversations, requests and suggestions!</p>
          <ContactMeList />
        </div>
        <MapComponent />
      </Wrapper>
    </div>
  )
}

export default GetInTouch