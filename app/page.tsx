import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8 text-emerald-400">Fast Food Nutrition Planner</h1>
      <p className="text-xl mb-8 text-center">
        Plan healthy fast food choices for gym goers and dieters
      </p>
      <Link href="/select-restaurants">
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
          Get Started
        </Button>
      </Link>
    </main>
  )
}
