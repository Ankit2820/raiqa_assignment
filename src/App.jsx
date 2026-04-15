import { useState, useEffect } from 'react'
import './App.css'
import MealList from "./components/MealList";
import SelectedMeals from "./components/SelectedMeals"
import FilterToggle from "./components/FilterToggle";
import mealsData from "./data/mealData";
function App() {
  const [showAvailableOnly, setShowAvailableOnly] = useState(true);
  const [selectedMeals, setSelectedMeals] = useState(() => {
  const saved = localStorage.getItem("selectedMeals");
  return saved ? JSON.parse(saved) : [];
});
  const [sortOrder, setSortOrder] = useState("asc");
   let filteredMeals = showAvailableOnly
    ? mealsData.filter(meal => meal.isAvailable)
    : mealsData;
useEffect(() => {
  localStorage.setItem("selectedMeals", JSON.stringify(selectedMeals));
}, [selectedMeals]);
  filteredMeals = [...filteredMeals].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );
  const handleAddMeal = (meal) => {
    const exists = selectedMeals.find(m => m.id === meal.id);
    if (exists) return;

    setSelectedMeals([...selectedMeals, meal]);
  };
const handleReset = () => {
  setSelectedMeals([]);
};
  const toggleSort = () => {
    setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
  };
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          🍽️ Home Chef Meals
        </h1>

        <div className="flex justify-center mb-6">
          <FilterToggle
            showAvailableOnly={showAvailableOnly}
            setShowAvailableOnly={setShowAvailableOnly}
          />
          <div className="flex bg-gray-200 rounded-full p-1">
  
  <button
    onClick={() => setSortOrder("asc")}
    className={`px-4 py-2 rounded-full transition-all ${
      sortOrder === "asc"
        ? "bg-white shadow text-purple-600 font-semibold"
        : "text-gray-600"
    }`}
  >
    Low → High
  </button>

  <button
    onClick={() => setSortOrder("desc")}
    className={`px-4 py-2 rounded-full transition-all ${
      sortOrder === "desc"
        ? "bg-white shadow text-purple-600 font-semibold"
        : "text-gray-600"
    }`}
  >
    High → Low
  </button>

         </div>
        </div>

        <MealList meals={filteredMeals} onAdd={handleAddMeal}/>
        <SelectedMeals selectedMeals={selectedMeals} onReset={handleReset} />
      </div>
    </div>
    </>
  )
}

export default App
