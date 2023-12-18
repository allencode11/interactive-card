import './input.component.css';
import { useState } from "react";

export const InputComponent = ({label, placeholder, func, field}) => {
  const [error, setError] = useState('');
  const handleInputChange = (e) => {
    const val = e.target.value;
    if (val === '') {
      setError('Can\'t be blank');
    } else if (field === 'cardNum'){
      if (/^\d+$/.test(val)) {
        func(field, e.target.value);
      } else {
        setError('Wrong format, numbers only!');
      }
    }

    func(field, e.target.value);
  }

  return (
    <div className='input'>
      <label>{label}</label>
      <div className='input-container'>
        <input className={error !== '' ? 'error-border' : null} placeholder={placeholder} onChange={handleInputChange} />
        <div className='error'>{error}</div>
      </div>
    </div>
  );
};
