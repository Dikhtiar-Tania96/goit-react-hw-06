import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css'
import { changeFilter } from '../../redux/filtersSlice';
import { useId } from 'react';

const SearchBox = () => {
  const dispatch = useDispatch();
  const uniqInputId = useId();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value))
  }



  return (
    <div className={css.formEl}>
      <label htmlFor={uniqInputId}>Find contacts by name : </label>
      <input
        type="text"
        id={uniqInputId}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;