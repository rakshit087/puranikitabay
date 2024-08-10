"use client";

import { search } from "@/actions/search";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SunIcon } from "@radix-ui/react-icons";

const popularSearches: string[] = [
  "Harry Potter",
  "Roald Dhal",
  "The Famous Five",
];

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center px-4 md:px-6 lg:px-8">
      <SunIcon className="absolute top-10 right-10" />
      <div className="max-w-2xl w-full">
        <h1 className="mb-1 md:mb-4 text-2xl md:text-4xl font-serif">
          <strong>Kitab</strong> Search
        </h1>
        <div className="flex gap-4 w-full">
          <Input placeholder="Search by Title, Author or ISBN" />
          <Button
            onClick={() => {
              // search("emma");
            }}
          >
            Search
          </Button>
        </div>
        <div className="mt-4">
          <p>Popular Searches</p>
          <div className="flex gap-2 mt-2 flex-wrap">
            {popularSearches.map((search: string, key) => (
              <Badge
                key={key}
                className="bg-gray-400 cursor-pointer text-xs text-nowrap"
              >
                {search}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
