import { CheckCircle } from "@/src/components/icons"
import { Button } from "@nextui-org/button"
import Link from "next/link"

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Payment Successful!</h2>
            <p className="mt-2 text-sm text-gray-600">
              Thank you for your purchase. Your order has been processed successfully.
            </p>
          </div>

          <div className="mt-8">
            <div className="text-sm font-medium text-gray-700">
              Order Details:
            </div>
            <div className="mt-2 bg-gray-50 p-4 rounded-md">
              <div className="flex justify-between">
                <span>Order Number:</span>
                <span className="font-semibold">#12345</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Total Amount:</span>
                <span className="font-semibold">$99.99</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-sm font-medium text-gray-700 mb-2">
              A confirmation email has been sent to your email address.
            </div>
            <Button>
              <Link href="/">
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}