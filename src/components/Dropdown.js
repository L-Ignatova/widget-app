import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({colorOptions, onSelectedChange, selected}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (ev) => {
      if (ref.current.contains(ev.target)) {
        return;
      }
      
      setOpen(false)
    }, {capture: true});
  }, []);

  const renderedColors = colorOptions.map(opt => {
    if (opt.value === selected.value) return null;
    
    return <div 
      key={opt.label} 
      className="item"
      onClick={() => onSelectedChange(opt)}
    >
      {opt.label}
    </div>;
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div 
          className={`ui selection dropdown ${open ? "visible active" : ""}`} 
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedColors}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;