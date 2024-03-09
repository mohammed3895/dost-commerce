"use client";
import React from "react";
import { Label } from "./ui/label";
import { FormControl } from "./ui/form";
import { Input } from "./ui/input";

interface FormControlProps {
  name: string;
  labelName: string;
  type: string;
}

const CustomInput = ({ name, labelName, type }: FormControlProps) => {
  return (
    <FormControl>
      <Label htmlFor={name}>{labelName}</Label>
      <Input name={name} type={type} id={name} className="" />
    </FormControl>
  );
};

export default CustomInput;
