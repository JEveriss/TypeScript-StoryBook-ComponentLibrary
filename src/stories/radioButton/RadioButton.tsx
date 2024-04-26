import React from "react";
import "./radioButton.css";

interface RadioButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "large";
  label: string;
  isSelected?: boolean
  onClick?: () => void;
}

export const RadioButton = ({
  primary = true,
  size = "large",
  backgroundColor,
  label,
  ...props
}: RadioButtonProps) => {
  const mode = primary
    ? "storybook-radioButton--primary"
    : "storybook-radioButton--secondary";

  return (
    <div>
      <label className="container">
        {label}
        <input type="radio" name="radio" {...props}></input>
        <span className="checkmark"></span>
      </label>
    </div>
  );
};
