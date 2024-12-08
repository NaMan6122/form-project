import React from "react";

interface RadioGroupProps {
  name: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
  required?: boolean;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ name, onChange, children }) => {
  return <div>{children}</div>;
};

interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  name?: string;
}

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({ value, name, checked, onChange, ...props }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={(e) => onChange && onChange(e)}
        className="h-4 w-4"
        {...props}
      />
      <span>{value}</span>
    </label>
  );
};
