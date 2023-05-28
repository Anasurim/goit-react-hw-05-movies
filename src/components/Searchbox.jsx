import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const SearchBox = ({ onSubmit }) => {
  const [querry, setQuerry] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (querry.trim() === '') {
      return Notify.failure('Type something');
    }
    onSubmit(querry);

    setQuerry('');
  };

  const handleChange = e => {
    setQuerry(e.target.value.toLowerCase());
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={querry}
            autoComplete="off"
            autoFocus
            placeholder="Search"
            onChange={handleChange}
          />

          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
