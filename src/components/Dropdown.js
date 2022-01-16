import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({options, onSelectedChange, selected, label}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (ev) => {
      if (ref.current.contains(ev.target)) return;
      
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, {capture: true});

    // going to be called whenever our Dropdown is about to be removed from the DOM
    return () => document.body.removeEventListener("click", onBodyClick);
  }, []);

  const renderedColors = options.map(opt => {
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
        <label className="label">{label}</label>
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