import { useState } from "react";

interface SwitchProps {
  id?: string;  // Allow the id prop
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({ id, defaultChecked, onChange }) => {
  const [checked, setChecked] = useState(defaultChecked || false);

  const toggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) onChange(newChecked);  // Pass the new checked value to onChange
  };

  return (
    <div
      id={id}  // Pass the id to the root div if necessary
      onClick={toggle}
      className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
        checked ? "bg-blue-500" : ""
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ${
          checked ? "translate-x-5" : ""
        }`}
      />
    </div>
  );
};

