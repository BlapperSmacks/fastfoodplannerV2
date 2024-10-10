'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

const nutritionOptions = [
  { id: 'lowCalorie', label: 'Low Calorie' },
  { id: 'highProtein', label: 'High Protein' },
  { id: 'balanced', label: 'Balanced' },
]

export default function SelectNutrition() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const toggleOption = (id: string) => {
    setSelectedOptions(prev =>
      prev.includes(id) ? prev.filter(o => o !== id) : [...prev, id]
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-8 text-emerald-400">Select Nutritional Preferences</h1>
      <div className="space-y-4 mb-8">
        {nutritionOptions.map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <Checkbox
              id={option.id}
              checked={selectedOptions.includes(option.id)}
              onCheckedChange={() => toggleOption(option.id)}
            />
            <label htmlFor={option.id} className="text-lg">{option.label}</label>
          </div>
        ))}
      </div>
      <Link href={selectedOptions.length > 0 ? "/recommendations" : "#"}>
        <Button
          className="bg-emerald-500 hover:bg-emerald-600 text-white"
          disabled={selectedOptions.length === 0}
        >
          Get Recommendations
        </Button>
      </Link>
    </main>
  )
}
