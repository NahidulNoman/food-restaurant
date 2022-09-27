import React from 'react';
import Food from '../Food/Food';

const AddFood = (props) => {
    // console.log(props.remove)
    const {removeFood} = props
    const {meal} = props
    return (
        <div>
            
           <div>
           {
                meal.map(food => <Food 
                key={food.idMeal}
                food={food}
                removeFood={removeFood}
                ></Food> )
            }
           </div>

        </div>
    );
};

export default AddFood;