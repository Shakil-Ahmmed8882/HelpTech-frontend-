"use client";

import { RefreshIcon } from "@/src/assets/icons";
import { useGetCategories } from "@/src/hooks/categories.hook";
import { ICategory } from "@/src/types";
import { Button } from "@nextui-org/button";
import { useRouter, useSearchParams } from "next/navigation";

const FilterItem = () => {
  const router = useRouter();
  const { data } = useGetCategories();
  const { data: categories } = data || [];
  const searchParams = useSearchParams();

  // Convert all query parameters into an object
  // const queryParams = Object.fromEntries(searchParams.entries());
  // console.log(queryParams);

  const handleCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString()); // "key=value"
    const [key, value] = category.split("="); //category=value (array destructuring)
    params.set(key, value);

    router.push(`/found-items?${params}`);
  };

  const clearQueries = () => {
    const newUrl = `${window.location.pathname}`; // Removes the query string
    window.history.replaceState({}, "", newUrl); // Update the URL without reloading
    router.push(newUrl)
  };
  return (
    <section className="flex gap-3 items-center my-6">
      {categories?.map((category: ICategory) => (
        <Button onClick={() => handleCategory(`category=${category.name}`)}>
          {category.name}
        </Button>
      ))}

      <Button onClick={() => clearQueries()}>
        <RefreshIcon />
      </Button>
    </section>
  );
};

export default FilterItem;
