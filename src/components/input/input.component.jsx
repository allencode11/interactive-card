import './input.component.css';

export const InputComponent = ({label, placeholder, func}) => {
  return (
    <div className='input'>
      <label>{label}</label>
      <input placeholder={placeholder} onChange={func} />
    </div>
  );
};
