import { useQuery} from "@tanstack/react-query";
import { getDBStoredUser } from "../services/authService";


export const useGetDBStoredUser = (id: string) => {
    return useQuery({
        queryKey: ["DB_USER", id],
        queryFn: async ({ queryKey }) => {
            const [, userId] = queryKey; // Extract id from queryKey
            return await getDBStoredUser(userId as string);
        }
    });
};

//   export const useUnfollow = () => {
//     return useMutation({
//         mutationKey: ["UNFOLLOW"],
//         mutationFn: async(id:string) => await unfollow(id),
//         onSuccess: () => toast.success("followed")
//     })

// }