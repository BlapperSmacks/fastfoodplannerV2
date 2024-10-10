'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { restaurants } from '@/data/restaurants'

export default function SelectRestaurants() {
  const [selectedRestaurants, setSelectedRestaurants] = useState<string[]>([])

  const toggleRestaurant = (name: string) => {
    setSelectedRestaurants(prev => 
      prev.includes(name) 
        ? prev.filter(r => r !== name)
        : prev.length < 5 ? [...prev, name] : prev
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-8 text-emerald-400">Select 5 Fast Food Restaurants</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.name}
            className={`p-4 border-2 rounded-lg cursor-pointer ${
              selectedRestaurants.includes(restaurant.name)
                ? 'border-emerald-500'
                : 'border-gray-600'
            }`}
            onClick={() => toggleRestaurant(restaurant.name)}
          >
            <Image
              src={restaurant.logo}
              alt={restaurant.name}
              width={100}
              height={100}
              className="mx-auto mb-2"
            />
            <p className="text-center">{restaurant.name}</p>
          </div>
        ))}
      </div>
      <Link href={selectedRestaurants.length === 5 ? "/select-nutrition" : "#"}>
        <Button
          className="bg-emerald-500 hover:bg-emerald-600 text-white"
          disabled={selectedRestaurants.length !== 5}
        >
          Next
        </Button>
      </Link>
    </main>
  )
}
