import './App.css';
import img from './assets/images/text.png';
import { BtnComponent } from './components/btn/btn.component';
import { InputComponent } from './components/input/input.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import {useState} from "react";
import {FormComponent} from "./components/form/form.component";

function App() {
  const [cardNum, setCardNum] = useState('0000 0000 0000 0000');
  const [cardOwner, setCardOwner] = useState('JANE APPLESEED');
  const [cardExpMonth, setCardExpMonth] = useState('00');
  const [cardExpYear, setCardExpYear] = useState('00');
  const [cardCVC, setCardCVC] = useState('000');
  const [formData, setFormData] = useState({
    cardNum: '',
    cardOwner: '',
    cardCVC: '',
    cardExpMonth: '',
    cardExpYear: ''
  });

  const onBtnClick = () => {
    setCardNum(formData.cardNum);
    setCardOwner(formData.cardOwner);
    setCardExpMonth(formData.cardExpMonth);
    setCardExpYear(formData.cardExpYear);
    setCardCVC(formData.cardCVC);
  };

  const onInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    })
  };

  return (
    <div className='App'>
      <div className='gradient-img mask'>
        <div className='shape'>
          <div className='oval o1'></div>
          <div className='oval o2'></div>
          <div className='oval o3'></div>
        </div>
      </div>

      <div className='card-front'>
        <div className='card-num'>{cardNum}</div>
        <div className='card-details'>
          <div className='card-owner'>{cardOwner}</div>
          <div className='date'>{cardExpMonth}/{cardExpYear}</div>
        </div>

      </div>

      <div className='card-back'>
        <div className='dark-line'></div>
        <div className='gray-line'>
          <div className='text'>{cardCVC}</div>
        </div>
        <img src={img} alt='text' className='text-img' />
      </div>

      <FormComponent onBtnClick={onBtnClick} onInputChange={onInputChange}></FormComponent>
    </div>
  );
}

export default App;
