import React, { useState } from 'react'
import Navbar from './components/Navbar'
import FoodItems from './components/FoodItems'
import Card from './components/Card';

function App() {
  const [food, setFood] = useState("");
  const [searchValue, setSearchValue] = useState("")
  const handlerOnSetValue = (e) => {
    setSearchValue(e.target.value)
  }
  const fetchingFoodRecipeData = async () => {
    try {
      const response = await fetch(`  https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
      const data = await response.json();
      setFood(data.meals)

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div>
        <Navbar />
        <FoodItems SearchValue={fetchingFoodRecipeData} handlerOnSetValue={handlerOnSetValue} search={searchValue} />
        <Card foodDataValue={food} />

      </div>

    </>
  )
}

export default App