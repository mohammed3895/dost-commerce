"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import ProductQuery from "./ProductQuery";

const CATEGORIES = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Fashion",
    value: "fashion",
  },
  {
    label: "Electronics",
    value: "electronics",
  },
];

const ProductsFlitering = () => {
  const [category, setCategory] = useState("all");

  return (
    <div className="w-full h-full flex flex-col items-center justify-between gap-8">
      <div className="w-full p-8 mx-auto mb-10">
        <div className="w-full h-full p-8 rounded-lg flex flex-col md:flex-row items-center justify-center gap-6">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue
                placeholder="Filter  by category"
                className="text-sm font-medium text-zinc-900"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {CATEGORIES.map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                    onChange={() => setCategory(item.value)}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue
                placeholder="Filter  by price"
                className="text-sm font-medium text-zinc-900"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="asc">Low to High</SelectItem>
                <SelectItem value="desc">High to Low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ProductsFlitering;
