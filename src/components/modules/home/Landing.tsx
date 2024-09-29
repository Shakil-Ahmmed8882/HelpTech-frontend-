"use client";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";

import {  useState } from "react";
import { ISearchResults } from "@/src/types";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function Landing() {
  const { register, handleSubmit, watch } = useForm();
  const searchTerm = watch("search");
  
  const [searchResults, setSearchResults] = useState<ISearchResults[] | []>([]);
  const router = useRouter();
  const onSubmit = () => {
  }


  

  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/glass.jpg')] bg-cover bg-center">
      <div className="pt-32 max-w-xl flex-1 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
          <Input
            {...register("search")}
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            placeholder="Search..."
            size="lg"
            type="text"
          />
        </form>

        {searchResults?.length > 0 && (
          <div className="bg-default-50 p-3 pb-8">
            {searchResults.map((item) => (
              <div
                key={item.id}
                className=" bg-default-100 mt-4 p-3 rounded-lg w-full"
              >
                <div className="flex gap-5 ">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="size-16 rounded-lg"
                  />
                  <article>
                    <h1> {item.title}</h1>
                    <p> {item.description}</p>
                  </article>
                </div>
              </div>
            ))}

            <div className="text-center mt-5">
              {/* <Button onClick={() => handleSeeAll(searchTerm)}>see all</Button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
