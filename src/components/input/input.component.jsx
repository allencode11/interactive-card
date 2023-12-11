import './input.component.css';

export const InputComponent = ({label, placeholder, func, field}) => {
  const handleInputChange = (e) => {
    func(field, e.target.value);
  }

  return (
    <div className='input'>
      <label>{label}</label>
      <input placeholder={placeholder} onChange={handleInputChange} />
    </div>
  );
};
