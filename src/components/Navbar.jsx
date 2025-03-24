import React, { useState } from 'react'
import App from '../App'

const Navbar = ({setRecipename,recipedata}) => {

    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) =>{
        setInputValue(e.target.value);
    }

    const onSubmit = (e) =>{
        setRecipename(inputValue)
        setInputValue("");
    }
    




  return (
    <div className="navbar">
        <h2>Recipe Finder</h2>
        <div>
            <input type="text" id="recipename"
            value={inputValue}
            onChange={handleChange}
            />
            <button onClick={onSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Navbar
