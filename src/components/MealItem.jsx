function MealItem({ meal, onAdd }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{meal.name}</h3>
      <p>₹{meal.price}</p>
       <p className={meal.isAvailable ? "text-green-600" : "text-red-500"}>
        {meal.isAvailable ? "Available" : "Not Available"}
      </p>
        {meal.isAvailable && (
        <button
          onClick={() => onAdd(meal)}
          className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      )}
    </div>
  );
}

export default MealItem;