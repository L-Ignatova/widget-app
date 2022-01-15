import React from "react";

const Dropdown = ({colorOptions}) => {
  const renderedColors = colorOptions.map(opt => {
    return <div key={opt.label}>{opt.value}</div>;
  })

  return (
    <div>
      <h1>Dropdown</h1>
      {renderedColors}
    </div>
  );
};

export default Dropdown;