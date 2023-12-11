import './input-date.component.css';

export const InputDateComponent = ({label, placeholder1, placeholder2, func}) => {
  const handleMonthChange = (e) => {
    func('cardExpMonth', e.target.value)
  }

  const handleYearChange = (e) => {
    func('cardExpYear', e.target.value)
  }

  return (
    <div className='input-date'>
      <label>{label}</label>
      <div className='row'>
        <input className='date-input' placeholder={placeholder1} onChange={handleMonthChange} />
        <input className='date-input' placeholder={placeholder2} onChange={handleYearChange} />
      </div>
    </div>
  );
};
