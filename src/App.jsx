import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Filter from './components/Filter';
import Footer from './components/Footer';


const App = () => {
  const [recipe, setRecipe] = useState([]); 
  const [recipename,setRecipename] = useState("");
  const [mealtype, setMealtype] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState("");

const fetchrecipe = () =>{
  fetch('https://dummyjson.com/recipes')
  .then(res => res.json())
  .then(data => setRecipe(data.recipes))
  .catch(err => console.error(err));
}

useEffect(() => {
  fetchrecipe();
}, []);





return (
  <div className="app-container">
    <Navbar recipedata={recipe} setRecipename={setRecipename} />
    <Filter recipedata={recipe} mealtype={mealtype} setMealtype={setMealtype} recipename={recipename} setSelectedMeal={setSelectedMeal}/>
    <div className="content-container">
      <Content recipename={recipename} recipedata={recipe} selectedMeal={selectedMeal} />
    </div>
    <Footer />
  </div>
)

}

export default App
