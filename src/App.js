import React from 'react';
import { Accordion, Search, Dropdown } from './components';

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

const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
]

const App = () => {
  return (
    <div>
      <Dropdown colorOptions={options} />
      <Search />
      <Accordion items={items} />
    </div>
    
  );
}

export default App;
