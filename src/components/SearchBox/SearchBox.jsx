import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange}) => {
  const uniqInputId = useId();

  return (
      <div className={css.formEl}>
        <label htmlFor={uniqInputId}> Find contacts by name</label>
        <br />
        <input id={uniqInputId} value={value} type='text' onChange={(e)=>onChange(e.target.value)} />
      </div>
  );
};

export default SearchBox;