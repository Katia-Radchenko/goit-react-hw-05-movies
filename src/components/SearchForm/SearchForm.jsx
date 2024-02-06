import { MdOutlineSearch } from 'react-icons/md';
import s from './SearchForm.module.css';


const SearchForm = ({ search, onSubmit, onChange }) => {

  return (
    <main>
      <form className={s.form} onSubmit={onSubmit}>
        <label></label>
        <input className={s.formInput} required type="text" name="search" placeholder="Enter search phrase"
               value={search}
               onChange={onChange} />
        <button className={s.formBtn} type="submit"><MdOutlineSearch /></button>
      </form>
    </main>
  );
};

export default SearchForm;
