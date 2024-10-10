'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function DonationButton() {
  const [amount, setAmount] = useState<number | null>(null)

  const handleDonate = () => {
    if (amount) {
      // Implement donation logic here
      alert(`Thank you for your $${amount} donation!`)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4 mb-4">
        {[2, 5, 10].map((value) => (
          <Button
            key={value}
            onClick={() => setAmount(value)}
            variant={amount === value ? 'default' : 'outline'}
            className={amount === value ? 'bg-emerald-500 hover:bg-emerald-600' : ''}
          >
            ${value}
          </Button>
        ))}
      </div>
      <Button
        onClick={handleDonate}
        disabled={!amount}
        className="bg-emerald-500 hover:bg-emerald-600 text-white"
      >
        Donate
      </Button>
    </div>
  )
}