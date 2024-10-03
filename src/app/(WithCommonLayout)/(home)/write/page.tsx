"use client";
import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

import Container from "@/src/components/UI/Container";

import PostForm from "./_component/PostForm";
import Image from "next/image";
import pen from "@/src/assets/images/write/pen.png";

const WritePage = () => {
  return (
    <Container>
      <div className="flex gap-3 items-center justify-between">
        <h1 className="hidden sm:block text-3xl md:text-6xl font-bold text-center text-default-200">Write your sotry.. </h1>
        <PostForm></PostForm>
      </div>
      <div>
        <Image
          alt=""
          src={pen}
          className="w-1/3  opacity-40  mx-auto object-cover"
        />
      </div>
    </Container>
  );
};

export default WritePage;
