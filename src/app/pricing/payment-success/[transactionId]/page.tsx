'use client'; // Indicating that this is a client component

import { useEffect } from 'react';
import { CheckCircle } from "@/src/components/icons";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Cookies from 'js-cookie'; // Use js-cookie library for client-side cookie handling
import Image from 'next/image';
import premiumBadge from '@/src/assets/images/icons/premium-badge.png';


export default function PaymentSuccess({ params, searchParams }: { params: { transactionId: string }, searchParams: { token: string } }) {
  
  // Extract token from searchParams
  const token = searchParams?.token;

  // Using useEffect to handle client-side logic after component mounts
  useEffect(() => {
    if (token) {
      // Set token in cookies (client-side using js-cookie)
      Cookies.set('accessToken', token, {
        path: '/',
        secure: process.env.NODE_ENV === 'production', // Secure in production
      });
    }
  }, [token]); // Trigger only when `token` changes

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className=" sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <Image width={500} height={500} className='w-32 mx-auto' alt='premium-badge' src={premiumBadge}/>
            <h2 className="mt-6 text-2xl md:text-3xl font-extrabold text-gray-900">Congratulations!</h2>
            <p className="mt-2 text-sm text-gray-600">
            You are now a premium user can access any premium contents. 
            </p>
          </div>

          <div className="mt-8">
            <div className="text-sm font-medium text-gray-700">Order Details:</div>
            <div className="mt-2 bg-gray-50 p-4 rounded-md text-black">
              <div className="flex justify-between text-black">
                <span>Order Number:</span>
                <span className="font-semibold text-black">#12345</span>
              </div>
              <div className="flex justify-between mt-2 text-black">
                <span>Total Amount:</span>
                <span className="font-semibold">$99.99</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-sm font-medium text-gray-700 mb-2">
            Thank you for your purchase. Keep in touch with us.
            </div>
            <Button className="bg-primaryColor ml-auto block w-full text-white mt-6">
              <Link href="/">Continue learning</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
