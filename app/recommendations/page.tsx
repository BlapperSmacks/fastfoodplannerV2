'use client'

import Image from 'next/image'
import { restaurants } from '@/data/restaurants'
import { getMealRecommendations } from '@/utils/mealRecommendations'
import DonationButton from '@/components/DonationButton'

export default function Recommendations() {
  const recommendations = getMealRecommendations(restaurants.slice(0, 5))

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-8 text-emerald-400">Meal Recommendations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {recommendations.map((rec) => (
          <div key={rec.restaurant} className="bg-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{rec.restaurant}</h2>
            <Image
              src={rec.mealImage}
              alt={rec.mealName}
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-md"
            />
            <h3 className="text-lg font-medium mb-2">{rec.mealName}</h3>
            <ul className="list-disc list-inside">
              <li>Calories: {rec.nutrition.calories}</li>
              <li>Protein: {rec.nutrition.protein}g</li>
              <li>Carbs: {rec.nutrition.carbs}g</li>
              <li>Fat: {rec.nutrition.fat}g</li>
            </ul>
          </div>
        ))}
      </div>
      <p className="text-center mb-4">
        This app is free, but feel free to donate and show support here!
      </p>
      <DonationButton />
    </main>
  )
}
