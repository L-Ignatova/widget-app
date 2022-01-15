import axios from "axios";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [term, setTerm] = useState('react');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        }
      });
    
      setResults(data.query.search);
    };
    
    const timeoutId = setTimeout(() => {
      if (term) search();
    }, 500);

    return (() => {
      clearTimeout(timeoutId);
    });
  }, [term]);

  const renderedResults = results.map(result => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank" rel="noreferrer">
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <div>
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          </div>
        </div>
      </div>
    );
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

export default SearchBar;