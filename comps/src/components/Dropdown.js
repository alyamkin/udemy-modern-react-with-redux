import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) return;
      const current = divEl.current;

      if (!current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const renderedOptions = options.map((option) => (
    <div
      className="hover:bg-sky-100 rounded cursor-pointer p-1 w-full"
      key={option.value}
      onClick={() => handleOptionClick(option)}
    >
      {option.label}
    </div>
  ));

  const hanleDropdownClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  window.timeTwo = performance.now();

  const handleOptionClick = (option) => {
    window.timeOne = performance.now();
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="w-48 relative" ref={divEl}>
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={hanleDropdownClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>

      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
