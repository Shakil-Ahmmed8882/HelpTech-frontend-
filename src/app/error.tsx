"use client";
// error.tsx

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { RefreshIcon } from "../assets/icons";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-200 dark:from-red-700 dark:to-red-900 transition-colors duration-500">
      <div className="w-full max-w-lg p-8 mx-auto text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <svg
            className="w-40 h-40 mx-auto text-red-500 dark:text-red-400"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20ZM100 160C66.8629 160 40 133.137 40 100C40 66.8629 66.8629 40 100 40C133.137 40 160 66.8629 160 100C160 133.137 133.137 160 100 160Z"
              fill="currentColor"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M100 120C111.046 120 120 111.046 120 100C120 88.9543 111.046 80 100 80C88.9543 80 80 88.9543 80 100C80 111.046 88.9543 120 100 120Z"
              fill="currentColor"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            />
            <motion.path
              d="M100 140C122.091 140 140 122.091 140 100C140 77.9086 122.091 60 100 60C77.9086 60 60 77.9086 60 100C60 122.091 77.9086 140 100 140Z"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100"
        >
          Oops! Error Encountered
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl mb-8 text-gray-600 dark:text-gray-300"
        >
          We've hit an unexpected bump in the road. Our team has been notified
          and is working on it.
        </motion.p>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
        >
          <Button
            className=" transition-colors duration-300"
          >
            <RefreshIcon/>
            Retry
          </Button>
          <Link href="/">
            <Button className="bg-gradient-to-tr from-[#00fb0054] to-[#00f9009b] transition-colors duration-300">
              
              Go Home
            </Button>
          </Link>
        </motion.div>
        
      </div>
    </div>
  );
}
