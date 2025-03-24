import React, { useEffect, useState } from 'react';

const Content = ({ recipename, recipedata,selectedMeal }) => {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  console.log("selectedmeal",selectedMeal)

  useEffect(() => {
  
    let filtered = recipedata;

    // Filter by recipe name if entered
    if (recipename.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(recipename.toLowerCase())
      );
    }
  
    // Filter by selected meal if selected
    if (selectedMeal.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.mealType.map(m => m.toLowerCase()).includes(selectedMeal.toLowerCase())
      );
    }
  
    setFilteredRecipes(filtered);

  }, [recipename, recipedata,selectedMeal]);

  return (
    <div className="foodcards_container">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((ele, ind) => (
          <div key={ind} className="foodcards">
            <img src={ele.image} alt={ele.name} />
            <p><b>Name:</b> {ele.name}</p>
            <p><b>Cuisine:</b> {ele.cuisine}</p>
            <p><b>Meal Type:</b> {ele.mealType.join(', ')}</p>
            <p><b>Ingredients:</b> {ele.ingredients.join(', ')}</p>
            <p><b>Instructions:</b> {ele.instructions}</p>
            <p><b>Prep Time:</b> {ele.prepTimeMinutes} min</p>
            <p><b>Rating:</b> {ele.rating}</p>
          </div>
        ))
      ) : (
        <p style={{ textAlign: 'center', width: '100%' }}>No Recipes Found</p>
      )}
    </div>
  );
};

export default Content;
