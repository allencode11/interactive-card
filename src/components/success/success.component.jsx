import './success.component.css';
import img from '../../assets/images/success.png';
import { BtnComponent } from "../btn/btn.component";

export const SuccessComponent = ({text = 'Continue', func}) => {
  return (
    <div className='success-container'>
      <img className='success-container-img' alt='success image' src={img} />
      <div className='success-container-title'>Thank You!</div>
      <div className='success-container-content'>We’ve added your card details</div>
      <BtnComponent text={text} func={func}></BtnComponent>
    </div>
  );
};
