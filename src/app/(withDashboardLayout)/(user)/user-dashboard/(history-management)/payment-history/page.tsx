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
import {
  SearchIcon,
  TimeIcon,
  UserIcon,
} from "@/src/components/icons";
import { Input } from "@nextui-org/input";
import debounce from "lodash/debounce";
import { useGetAllPaymentHistories, useGetAllPaymentHistoriesOfSingleUser } from "@/src/hooks/payment.hook";

export default function PaymentHistoryTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data,refetch } = useGetAllPaymentHistoriesOfSingleUser(searchTerm);

  const paymentHistoryData = data?.data || []
  
  
  // Function to format the createdAt date
  const formatDate = (dateString: string) => {
    const date = parseISO(dateString); // Parse ISO date string
    return format(date, "EEEE 'at' hh:mm a"); // Format to "Friday at 10:00 AM"
  };

  // Debounced function to handle search
  const handleSearchChange = debounce((term: string) => {
    refetch()
  }, 300); // 300ms delay

  // Effect to handle search term change
  useEffect(() => {
    handleSearchChange(searchTerm);
  }, [searchTerm]);

  return (
    <div className="!min-h-screen px-4 py-8 pt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Payment History</h1>
      <Input
        startContent={<SearchIcon />}
        placeholder="search.."
        className="w-2/3 mx-auto pt-3 pb-6"
        onChange={(e: any) => setSearchTerm(e.target.value)} // Update search term
      />
      <Table aria-label="Payment History Table">
        <TableHeader>
          <TableColumn>Transaction ID</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Name</TableColumn>
          <TableColumn>Amount (BDT)</TableColumn>
          <TableColumn>Date</TableColumn>
        </TableHeader>
        <TableBody>
          {paymentHistoryData.map((entry:any, index:number) => (
            <TableRow key={entry._id}>
              <TableCell
                style={{ color: index % 2 === 0 ? "#ff0080" : "#21dd21" }}
              >
                {entry.transactionID}
              </TableCell>
              <TableCell>
                <span className="flex text-default-500 items-center gap-2">
                  <UserIcon />
                  {entry.user.email}
                </span>
              </TableCell>
              <TableCell>{entry.user.username}</TableCell>
              <TableCell>{entry.amount} BDT</TableCell>
              <TableCell>
                <span className="flex items-center gap-2">
                  <TimeIcon />
                  {formatDate(entry.createdAt)}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
