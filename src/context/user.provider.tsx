import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { IUser } from "../types";
import { getCurrentUser } from "../services/authService";


interface IuserProviderValues {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
}
const userContext = createContext<IuserProviderValues | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleGetUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetUser();
  }, [isLoading]);

  return (
    <userContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(userContext);

  // for safety check it is called within context
  if (context === undefined) {
    throw new Error("Opps! useUser must be used within useProvider context");
  }
  return context;
};
