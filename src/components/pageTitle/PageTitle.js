import PropTypes from 'prop-types';
import s from './PageTitle.module.css';

const PageTitle = ({ title }) => {
  return <h1 className={s.title}>{title}</h1>;
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
