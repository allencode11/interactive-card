import './App.css';
import img from './assets/images/text.png';
import { BtnComponent } from './components/btn/btn.component';
import { InputComponent } from './components/input/input.component';
import { InputDateComponent } from './components/input-date/input-date.component';

function App() {

  const onBtnClick = () => {
    console.log('click');
  };

  const onInputClick = () => {
    console.log('click');
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
        <div className='card-num'>0000 0000 0000 0000</div>
        <div className='card-details'>
          <div className='card-owner'>JANE APPLESEED</div>
          <div className='date'>00/00</div>
        </div>

      </div>

      <div className='card-back'>
        <div className='dark-line'></div>
        <div className='gray-line'>
          <div className='text'>000</div>
        </div>
        <img src={img} alt='text' className='text-img' />
      </div>

      <div className='input-data'>
        <InputComponent label='Cardholder Name' type='text' placeholder='e.g. Jane Appleseed' func={onInputClick} ></InputComponent>
        <InputComponent label='Card Number' type='text' placeholder='e.g. 1234 5678 9123 0000' func={onInputClick} ></InputComponent>
        <InputComponent label='CVC' type='text' placeholder='e.g. 123' func={onInputClick} ></InputComponent>
        <InputDateComponent label='Exp. Date (MM/YY)' placeholder1='MM' func={onInputClick} placeholder2='YY'></InputDateComponent>
        <BtnComponent text='Confirm' func={onBtnClick}></BtnComponent>
      </div>
    </div>
  );
}

export default App;
