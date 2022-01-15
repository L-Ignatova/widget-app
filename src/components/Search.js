import { useEffect, useState } from "react";
import { SearchItem } from ".";
import { getWikiResults } from "../utils/apis";

const Search = () => {
  const [term, setTerm] = useState('react');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await getWikiResults(term);
    
      setResults(data.query.search);
    };

    if (term && results.length) {
      const timeoutId = setTimeout(() => search(), 500);

      return (() => clearTimeout(timeoutId));
    }
    
    if (term) search();
  }, [term]);

  const renderedResults = results.map(result => {
    return <SearchItem key={result.pageid} result={result} />;
  });

  return (
    <div>
      <form className="ui form">
        <div className="field">
          <h4>Enter search term</h4>
          <input
            type="text"
            defaultValue={term}
            onChange={(ev) => setTerm(ev.target.value)}
          />
        </div>
      </form>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
};

export default Search;