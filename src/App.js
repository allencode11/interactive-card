import './App.css';
import img from './assets/images/text.png';
import { BtnComponent } from './components/btn/btn.component';

function App() {

  const onBtnClick = () => {
    console.log('click');
  }
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
        <BtnComponent text='Confirm' func={onBtnClick}></BtnComponent>
      </div>
    </div>
  );
}

export default App;
