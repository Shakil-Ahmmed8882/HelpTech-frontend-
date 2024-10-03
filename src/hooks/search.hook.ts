import { useMutation } from "@tanstack/react-query";
// import { search } from "../services/search";

export const useSearchItems = () => {
  return useMutation({
    mutationKey: ["SEARCH_ITEM"],
    // mutationFn: async (searchTerm: string) => await search(searchTerm),
  });
};
