function FilterToggle({ showAvailableOnly, setShowAvailableOnly }) {
  return (
    <div className="flex bg-gray-200 rounded-full p-1">
      
      {/* All Meals */}
      <button
        onClick={() => setShowAvailableOnly(false)}
        className={`px-4 py-2 rounded-full transition-all ${
          !showAvailableOnly
            ? "bg-white shadow text-purple-600 font-semibold"
            : "text-gray-600"
        }`}
      >
        All Meals
      </button>

      {/* Available Meals */}
      <button
        onClick={() => setShowAvailableOnly(true)}
        className={`px-4 py-2 rounded-full transition-all ${
          showAvailableOnly
            ? "bg-white shadow text-purple-600 font-semibold"
            : "text-gray-600"
        }`}
      >
        Available Meals
      </button>

    </div>
  );
}

export default FilterToggle;