import React from "react";

interface ProgressProps {
  value: number;
  max: number;
  className: string; 
}

export const Progress: React.FC<ProgressProps> = ({ value, max, className }) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <div
        className="bg-blue-500 h-2 rounded-full"
        style={{ width: `${(value / max) * 100}%` }}
      ></div>
    </div>
  );
};
