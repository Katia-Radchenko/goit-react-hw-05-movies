import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onBackClick }) => {
  return (
    <button type="button" className={s.button} onClick={onBackClick}>
      Back
    </button>
  );
};

Button.propTypes = {
  onBackClick: PropTypes.func.isRequired,
};

export default Button;
