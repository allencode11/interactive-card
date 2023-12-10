import './input.component.css';

export const InputComponent = ({label, type, placeholder, func}) => {
  return (
    <div className='input'>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} onChange={func} />
    </div>
  );
};
