import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DropDown from "../nav/DropDown";
import { RootState } from "../../store";

const Search = () => {
  const products = useSelector((state: RootState) => state.products.items);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      const filtered = products.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase()),
      );
      setResults(filtered);
      setOpen(filtered.length > 0);
    } else {
      setResults([]);
      setOpen(false);
    }
  };

  const handleSelect = (id: number) => {
    setQuery("");
    setResults([]);
    setOpen(false);
    navigate(`/product/${id}`);
  };

  return (
    <DropDown
      value={query}
      onChange={handleChange}
      results={results}
      onSelect={handleSelect}
      visible={open}
    />
  );
};

export default Search;
