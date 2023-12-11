import {InputComponent} from "../input/input.component";
import {InputDateComponent} from "../input-date/input-date.component";
import {BtnComponent} from "../btn/btn.component";

export const FormComponent = ({onInputChange, onBtnClick }) => {
  return (
    <div className='input-data'>
      <InputComponent
        label='Cardholder Name'
        placeholder='e.g. Jane Appleseed'
        field='cardOwner'
        func={onInputChange }
      ></InputComponent>
      <InputComponent label='Card Number' field='cardNum' placeholder='e.g. 1234 5678 9123 0000' func={onInputChange} ></InputComponent>
      <div className='row'>
        <InputDateComponent label='Exp. Date (MM/YY)' placeholder1='MM' func={onInputChange} placeholder2='YY'></InputDateComponent>
        <InputComponent label='CVC' field='cardCVC' placeholder='e.g. 123' func={onInputChange} ></InputComponent>
      </div>
      <BtnComponent text='Confirm' func={onBtnClick}></BtnComponent>
    </div>
  )
}