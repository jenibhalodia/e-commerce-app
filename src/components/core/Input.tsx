'use client'
import * as React from "react";
import TextField from "@mui/material/TextField";

export default function InputComponent({
  required,
  label,
  type,
  disabled,
  helperText,
  variant,
  onChange,
  defaultValue,
  className,
  value
}: any) {
  return (
    <div className={className}>
      <TextField
        required={required}
        label={label}
        type={type}
        disabled={disabled}
        helperText={helperText}
        variant={variant}
        defaultValue={defaultValue}
        onChange={onChange}
        className="w-full"
        value={value}
      />
    </div>
  );
}
