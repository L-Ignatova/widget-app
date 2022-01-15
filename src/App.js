import React from 'react';
import {Accordion, SearchBar} from './components';

const items = [
  {
    title: "What is React?",
    content: "React is a front end JS framework"
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers"
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components"
  }
];

const App = () => {
  return (
    <div>
      <SearchBar />
      <Accordion items={items} />
    </div>
    
  );
}

export default App;
