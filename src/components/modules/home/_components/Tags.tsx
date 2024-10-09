"use client"

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  { id: 1, name: "All", tag: "all" },
  { id: 1, name: "Technology", tag: "Technology" },
  { id: 2, name: "Software", tag: "Software" },
  { id: 3, name: "Health", tag: "Health" },
  { id: 4, name: "Mindfulness", tag: "Mindfulness" },
  { id: 5, name: "Startups", tag: "Startups" },
  { id: 6, name: "Productivity", tag: "Productivity" },
  { id: 7, name: "Entrepreneurship", tag: "Entrepreneurship" },
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
    <div className="flex flex-wrap gap-y-8 mb-5 gap-x-5 border-b border-default-200 pt-5 pb-8 ">
      {categories.map((tag) => (
        <button
          key={tag.id}
          className={`pb-2 px-4 text-sm font-medium ${
            activeTag === tag.tag
              ? "bg-primaryColor text-white rounded-full"
              : "text-default-500 hover:primaryColor"
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
