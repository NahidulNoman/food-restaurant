import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AddFood from '../../addmeal/AddFood';
import Meal from '../../Meal/Meal';
import './MealDb.css';

const MealDb = ({search}) => {
    const [meals , setMeals] = useState([])
    const [meal , setMeal] = useState([])


    useEffect( () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(rest => rest.json())
        .then(data => setMeals(data.meals))
    },[search]);

    let handler = (meals) => {
        let newFood = [];
        const exists = meal.find(exist => exist.idMeal === meals.idMeal);
        if(!exists){
            newFood = [...meal, meals]
        }
        else{
            const rest = meal.filter(restFood => restFood.idMeal !== meals.idMeal);
            newFood = [...rest, exists]
        }
       setMeal(newFood)
    }
    const removeFood = (food) => {
        const remove = meal.filter(mealFood => mealFood.idMeal !== food.idMeal);
        setMeal(remove);
    }

    return (
        <div className='row container-fluid'>

            <div className='meal col-9'>
                {
                    meals.map(meal => <Meal
                    meal={meal}
                    handler = {handler}
                    key={meal.idMeal}
                    ></Meal>)
                }
            </div>
            <div className='col-3  '>
                <div className='header'>
                <h2 className='text-center text-primary'>\\Selected Your Foods//</h2>
                <AddFood meal={meal} removeFood={removeFood}></AddFood>
                </div>
            </div>
        </div>
    );
};

export default MealDb;