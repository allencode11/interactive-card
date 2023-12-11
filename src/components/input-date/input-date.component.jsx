import './input-date.component.css';

export const InputDateComponent = ({label, placeholder1, placeholder2, func}) => {
  return (
    <div className='input-date'>
      <label>{label}</label>
      <div className='row'>
        <input className='date-input' placeholder={placeholder1} onChange={func} />
        <input className='date-input' placeholder={placeholder2} onChange={func} />
      </div>
    </div>
  );
};
