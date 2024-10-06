import { motion } from "framer-motion";
import Link from "next/link";

interface SearchResultProps {
  results: Array<{ _id: string; title: string; images: string[] }>;
}

export const SearchResults = ({ results }: SearchResultProps) => {
  return (
    <motion.div
      className="w-1/2 mt-4 p-4 absolute left-80 top-11 bg-default-50 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="font-bold text-lg mb-2">Search Results</h3>
      <ul className="flex flex-col gap-4">
        {results.map((post) => (
          <Link key={post._id} href={`/post/${post?._id}`}>
            <motion.li
              className="flex gap-4 p-2 pb-8 hover:bg-default-100 cursor-pointer border-b border-default-200"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Image */}
              <img
                src={post.images?.[0] || "default-image-url"}
                alt={post.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              {/* Title */}
              <p className="font-medium">{post.title}</p>
            </motion.li>
          </Link>
        ))}
      </ul>
    </motion.div>
  );
};
