import MealItem from "./MealItem";

function MealList({ meals, onAdd}) {
  if (meals.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No meals available
      </p>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
      {meals.map(meal => (
        <MealItem key={meal.id} meal={meal} onAdd={onAdd} />
      ))}
    </div>
  );
}

export default MealList;