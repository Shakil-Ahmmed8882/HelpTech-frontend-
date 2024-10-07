"use client"

import { LeftArrowIcon } from '@/src/assets/icons'
import { usePay } from '@/src/hooks/payment.hook'
import { Button } from '@nextui-org/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function PricingPlan() {
  const [isAnnual, setIsAnnual] = useState(true)
  const {mutate:handlePayment,data:paymentResponse} = usePay()


  const handlePricing = () => {
    // Call the payment function
    handlePayment(500);
  };

  // Once the paymentResponse changes, you can check and redirect
  useEffect(() => {
    if (paymentResponse?.url) {
      // Redirect the user to the payment gateway
      window.location.href = paymentResponse.url;
    }
  }, [paymentResponse]);

  

  return (
    <div className="bg-primaryColor text-white p-8 min-h-screen">
      <Link href={'/'} className='bg-white p-3 rounded-full absolute left-5 top-5 text-black'>Back to home</Link>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Get Started Now,<br />Pick a Plan Later</h1>
        <p className="text-center mb-8">Try Premium free for 7 days and get unrestricted<br />access to all our tools, resources, and community features.</p>
        <p className="text-center text-sm mb-4">No credit card required</p>
        
        <div className="flex justify-center items-center space-x-4 mb-12">
          <span className={`${isAnnual ? 'opacity-100' : 'opacity-50'}`}>Annually</span>
          <span className={`${!isAnnual ? 'opacity-100' : 'opacity-50'}`}>Monthly</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {['Starter', 'Pro', 'Enterprise'].map((plan, index) => (
            <div key={plan} className={`bg-white rounded-lg p-6 text-black ${index === 1 ? 'md:-mt-4' : ''}`}>
              {index === 1 && (
                <div className="bg-yellow-400 text-black text-xs font-bold py-1 px-3 rounded-full mb-4 inline-block">
                  MOST POPULAR PLAN
                </div>
              )}
              <h2 className="text-2xl font-bold mb-4">{plan}</h2>
              <p className="text-sm mb-4">
                {index === 0 && 'Get started with essential tools.'}
                {index === 1 && 'Power up your productivity with advanced features.'}
                {index === 2 && 'Tailored solutions for larger teams.'}
              </p>
              <Button 
                onClick={handlePricing}
                className={`w-full mb-4 ${index === 1 ? 'bg-primaryColor hover:bg-primaryColor/90' : ''}`}
              >
                {index === 0 && 'Start Free Trial'}
                {index === 1 && 'Go Pro'}
                {index === 2 && 'Contact Us'}
              </Button>
              <p className="text-3xl font-bold mb-2">
                {index === 0 && '$19'}
                {index === 1 && '$99'}
                {index === 2 && '+1 888 555 1234'}
                <span className="text-sm font-normal">{index !== 2 && '/mo'}</span>
              </p>
              <p className="text-sm mb-4">{index !== 2 ? 'Access to all features' : 'Tailored pricing based on needs'}</p>
              <ul className="text-sm space-y-2">
                <li>• Access to exclusive tech tips & guides</li>
                <li>• Community Q&A participation</li>
                <li>• Personalized tech support</li>
                {index > 0 && <li>• Advanced code collaboration tools</li>}
                {index > 0 && <li>• Ad-free browsing</li>}
                {index === 2 && <li>• Team collaboration features</li>}
                {index === 2 && <li>• Priority support & onboarding</li>}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}