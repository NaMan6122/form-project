import React, { ReactNode } from "react";

// Typing Select and SelectContent for children
interface SelectProps {
  children: ReactNode;
}

interface SelectItemProps {
  value: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}


export const Select: React.FC<SelectProps> = ({ children }) => {
  return <div className="relative">{children}</div>;
};

export const SelectTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button
      {...props}
      className="border rounded-md px-3 py-2 w-full text-left focus:ring focus:ring-blue-300"
    >
      {props.children}
    </button>
  );
};

export const SelectContent: React.FC<SelectProps> = ({ children }) => {
  return <div className="absolute bg-white border rounded-md mt-1">{children}</div>;
};

export const SelectItem: React.FC<SelectItemProps> = ({ value, onClick, children, disabled }) => {
  return (
    <div
      className="px-3 py-2 cursor-pointer hover:bg-gray-200"
      onClick={onClick}
    >
      {children || value}  {/* Render children if available, else render the value */}
    </div>
  );
};
