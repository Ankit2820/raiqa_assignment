function SelectedMeals({ selectedMeals, onReset }) {
  const total = selectedMeals.reduce(
    (sum, meal) => sum + meal.price,
    0
  );

  // ✅ Find min & max price
  const prices = selectedMeals.map(m => m.price);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);

  return (
    <div className="mt-10 bg-white p-5 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Selected Meals</h2>

        {/* ✅ Reset Button */}
        {selectedMeals.length > 0 && (
          <button
            onClick={onReset}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Reset
          </button>
        )}
      </div>

      {selectedMeals.length === 0 ? (
        <p>No meals selected</p>
      ) : (
        <>
          {selectedMeals.map(meal => {
            let highlight = "";

            if (meal.price === maxPrice) {
              highlight = "bg-green-100 border border-green-400";
            } else if (meal.price === minPrice) {
              highlight = "bg-yellow-100 border border-yellow-400";
            }

            return (
              <div
                key={meal.id}
                className={`flex justify-between p-2 rounded mb-2 ${highlight}`}
              >
                <span>{meal.name}</span>
                <span>₹{meal.price}</span>
              </div>
            );
          })}

          <hr className="my-3" />
          <h3 className="font-bold">Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}

export default SelectedMeals;