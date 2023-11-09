import React, { ChangeEvent, useCallback, useContext, useEffect } from 'react';
import './search.css';
import { AppContext, AppContextType } from '../../AppContext';

interface SearchProps {
  onSearch: (value: string) => void;
}

function Search(props: SearchProps) {
  const { searchString, setSearchString } =
    useContext<AppContextType>(AppContext);

  useEffect(() => {
    //setSearch(searchString);
  }, [searchString]);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  }, []);

  const hadleSearchClick = useCallback(() => {
    props.onSearch(searchString);
  }, [props, searchString]);

  return (
    <div className="search-block">
      <input
        type="search"
        id="search"
        value={searchString}
        onChange={handleInputChange}
      />
      <button onClick={hadleSearchClick}>Search</button>
    </div>
  );
}

export default Search;
