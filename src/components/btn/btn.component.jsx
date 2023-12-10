import './btn.component.css';

export const BtnComponent = ({text = 'Confirm', func}) => {
  return (
    <div className='btn'>{text}</div>
  );
};
