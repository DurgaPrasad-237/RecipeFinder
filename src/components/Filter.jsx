import React, { useEffect, useState } from 'react'

const Filter = ({ recipedata,mealtype,setMealtype,setSelectedMeal}) => {


   

        // const mealtype = recipedata.map(itm => itm.mealType).flat(); //another way
    useEffect(() => {
        let types = [];
        recipedata.forEach(itm => {
            types.push(...itm.mealType);
        });
        types = [...new Set(types)];  
        setMealtype(types);           
    }, [recipedata]);

   
    

  return (
    <div>

        <select onChange={(e) => setSelectedMeal(e.target.value)}>
            <option value="" key="">Select the meal type</option>
        {
            mealtype.map((mt, ind) => (
            <option key={ind} value={mt}>{mt}</option>
            ))
        }
        </select>
      
    </div>
  )
}

export default Filter
