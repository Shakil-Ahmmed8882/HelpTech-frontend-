"use client"

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  { id: 1, name: "Technology", tag: "technology" },
  { id: 2, name: "Software", tag: "software" },
  { id: 3, name: "Health", tag: "health" },
  { id: 4, name: "Mindfulness", tag: "mindfulness" },
  { id: 5, name: "Startups", tag: "startups" },
  { id: 6, name: "Productivity", tag: "productivity" },
  { id: 7, name: "Entrepreneurship", tag: "entrepreneurship" },
];

const Category = () => {
  const [activeTag, setActiveTag] = useState(categories[0].tag);
  const router = useRouter();
  const searchParams  = useSearchParams() || ""


  const handleCategory = (category: string) => {
    
    const params = new URLSearchParams(searchParams.toString());
    const [key, value] = category.split("=");
    params.set(key, value);

    router.push(`/?${params.toString()}`);
  };


  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
    handleCategory(`category=${tag}`);
  };


  return (
    <div className="flex flex-wrap space-y-2 space-x-4 border-b border-gray-200 pt-5 pb-14">
      {categories.map((tag) => (
        <button
          key={tag.id}
          className={`pb-2 px-4 text-sm font-medium ${
            activeTag === tag.tag
              ? "text-primaryColor border-b-2 border-primaryColor"
              : "text-gray-500 hover:primaryColor"
          }`}
          onClick={() => handleTagClick(tag.tag)}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
};

export default Category;
