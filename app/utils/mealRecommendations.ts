interface Restaurant {
    name: string;
    logo: string;
  }
  
  interface Nutrition {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  }
  
  interface Recommendation {
    restaurant: string;
    mealName: string;
    mealImage: string;
    nutrition: Nutrition;
  }
  
  export function getMealRecommendations(selectedRestaurants: Restaurant[]): Recommendation[] {
    // This is a mock function. In a real application, you would fetch this data from an API or database.
    return selectedRestaurants.map(restaurant => ({
      restaurant: restaurant.name,
      mealName: `Healthy ${restaurant.name} Meal`,
      mealImage: `/meals/${restaurant.name.toLowerCase().replace(/[^a-z]/g, '')}.jpg`,
      nutrition: {
        calories: Math.floor(Math.random() * 300) + 300,
        protein: Math.floor(Math.random() * 20) + 20,
        carbs: Math.floor(Math.random() * 30) + 30,
        fat: Math.floor(Math.random() * 10) + 10,
      },
    }));
  }