"use client";

import { RefreshIcon } from "@/src/assets/icons";
import { WarningIcon } from "@/src/components/icons";
import { Button } from "@nextui-org/button";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import Link from "next/link";

export default function PaymentFailed() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-default-100 p-6">
      <Card className="w-full max-w-md">
        <div>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 dark:bg-[#180808] rounded-full flex items-center justify-center">
              <WarningIcon className="w-8 h-8 text-red-600" />
            </div>
          </CardHeader>
          <h2 className="text-2xl text-center pb-8 font-bold text-red-600">
            Payment Failed
          </h2>
        </div>
        <div className="text-center flex px-2 md:px-8 flex-col items-center space-y-4">
          <p className="text-default-600">
            We are sorry, but your payment could not be processed at this time.
          </p>

          <div className="dark:bg-[#180808] rounded-lg p-4 w-full max-w-sm">
            <p className="text-sm text-red-800">
              Error: Your card was declined. Please check your card details and
              try again.
            </p>
          </div>

          <dl className="text-sm text-default-600 space-y-2 w-full max-w-sm pb-8">
            <div className="flex gap-3">
              <dt>Transaction ID:</dt>
              <dd className="font-medium">TXN123456789</dd>
            </div>
            <div className="flex gap-3">
              <dt>Date:</dt>
              <dd className="font-medium">{new Date().toLocaleDateString()}</dd>
            </div>
          </dl>
        </div>
        <CardFooter className="flex items-center gap-3 pb-8">
          <Button
            className="w-full"
            onClick={() => console.log("Retry payment")}
          >
            <Link href={"/pricing"} className="flex items-center">
            <RefreshIcon className="mr-2 h-4 w-4" /> Try Again
            </Link>
          </Button>
          <Button
            className="w-full"
            onClick={() => console.log("Contact support")}
          >
            mail
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
