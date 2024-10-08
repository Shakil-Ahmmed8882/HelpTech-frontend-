"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { format, parseISO } from "date-fns";
import { DeviceIcon, InIcon, LocationIcon, MailIcon, OutIcon, SearchIcon, TimeIcon, UserIcon } from "@/src/components/icons";
import { Input } from "@nextui-org/input";
import { useGetAllLoginAndOutHistories } from "@/src/hooks/login.logout.hitory..hook";
import { ILoginHistory } from "@/src/types/history.type";
import debounce from "lodash/debounce"; 

export default function LoginHistoryTable() {
  const [searchTerm, setSearchTerm] = useState(""); 
  const { data, refetch } = useGetAllLoginAndOutHistories(searchTerm); 

  const loginLogoutHistoryData: ILoginHistory[] = data?.data || [];

  // Function to format the createdAt date
  const formatDate = (dateString: string) => {
    const date = parseISO(dateString); // Parse ISO date string
    return format(date, "EEEE 'at' hh:mm a"); // Format to "Friday at 10:00 AM"
  };

  // Debounced function to handle search
  const handleSearchChange = debounce((term: string) => {
    refetch(); // Trigger refetching the data with the new search term
  }, 300); // 300ms delay

  // Effect to handle search term change
  useEffect(() => {
    handleSearchChange(searchTerm);
  }, [searchTerm]);

  return (
    <div className="!min-h-screen px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Login History</h1>
      <Input 
        startContent={<SearchIcon />} 
        placeholder="search.." 
        className="w-2/3 mx-auto pt-3 pb-6" 
        onChange={(e:any) => setSearchTerm(e.target.value)} // Update search term
      />
      <Table  aria-label="Login History Table">
        <TableHeader>
          <TableColumn>Action Type</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Name</TableColumn>
          <TableColumn>IP Address</TableColumn>
          <TableColumn>Device</TableColumn>
          <TableColumn>Date</TableColumn>
        </TableHeader>
        <TableBody>
          {loginLogoutHistoryData?.map((entry) => (
            <TableRow key={entry._id}>
              <TableCell>
                <p
                  className={`flex items-center gap-2 ${entry.actionType === "login" ? "dark:text-[#21dd21] text-[#42ca42]" : "text-[#ff0080]"}`}
                >
                  <span>
                    {entry.actionType === "login" ? <InIcon /> : <OutIcon />}
                  </span>
                  {entry.actionType}
                </p>
              </TableCell>
              <TableCell>
                <span className="flex text-default-500 items-center gap-2">
                  <UserIcon />{entry.email}
                </span>
              </TableCell>
              <TableCell>{entry.name}</TableCell>
              <TableCell>
                <span className="flex text-default-500 items-center gap-2">
                  <LocationIcon />{entry.ip}
                </span>
              </TableCell>
              <TableCell>
                <span className="flex text-default-500 items-center gap-2">
                  <DeviceIcon />{entry.device}
                </span>
              </TableCell>
              <TableCell>
                <span className="flex items-center gap-2">
                  <TimeIcon />{formatDate(entry.createdAt)}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
