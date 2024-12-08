import React from "react";

// Update the type definition to include `children`
export const Label: React.FC<{ htmlFor: string; children: React.ReactNode }> = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  );
};
