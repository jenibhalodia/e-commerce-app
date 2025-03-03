'use client'
import * as React from "react";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";

export default function ButtonComponent({
  type,
  variant,
  disabled,
  onClick,
  color,
  size = "medium",
  startIcon,
  endIcon,
  loading,
  label,
  className
}: any) {
  return (
    <div className={className}>
      <Button
        variant={variant}
        type={type}
        disabled={disabled || loading}
        onClick={onClick}
        color={color}
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        className="flex flex-row gap-2 items-center hover:text-[#1976D2] hover:bg-white hover:font-bold"
      >
        {loading ? <CircularProgress size={24} /> : ""} {label}
      </Button>
    </div>
  );
}
