// Define the structure of the login history data
export interface ILoginHistory {
    _id: string;
    user: string;
    name: string;
    email: string;
    actionType: "login" | "logout";
    ip: string;
    device: string;
    createdAt: string; 
  }