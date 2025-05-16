"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { Button } from "@/shared/ui/components";
import { Input } from "@/shared/ui/components/input";

interface SearchBarProps {
  placeholder?: string;
  value?: string,
  onSearch?: (query: string) => void;
  className?: string;
}

export default function SearchBar({
  placeholder = "Искать...",
  value = "",
  onSearch,
  className,
}: SearchBarProps) {
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    setQuery(value)
  }, [value])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex w-full max-w-[340px] items-center space-x-2 ${className}`}
    >
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4"
        />
      </div>
      <Button type="submit" size="sm">
        Искать
      </Button>
    </form>
  );
}
