import { useState, useEffect } from 'react';
import './form.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState<string | null>('');

  useEffect(() => {
    const savedQuery = localStorage.getItem('savedSearchQuery');
    if (savedQuery) {
      setSearchQuery(savedQuery);
    }
  }, []);

  const handleSearch = () => {
    if (searchQuery !== null && searchQuery !== searchQuery.trim()) {
      showSpaceError();
    } else {
      localStorage.setItem('savedSearchQuery', searchQuery || '');
    }
  };

  const showSpaceError = () => {
    alert('The search field must not contain leading or trailing spaces!');
  };

  return (
    <form className="search">
      <input
        className="seach__input"
        type="text"
        placeholder="Search..."
        value={searchQuery || ''}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="search__btn">
        Search
      </button>
    </form>
  );
}

export default Search;
