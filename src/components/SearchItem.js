import React from "react";

const SearchItem = ({ result }) => {
  return (
    <div className="item">
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
          <span 
            dangerouslySetInnerHTML={{ __html: result.snippet }}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;