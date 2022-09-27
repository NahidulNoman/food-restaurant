import React from 'react';

const Food = (props) => {
    // console.log(props)
    const {food} = props
    const {strMeal,strMealThumb,strCategory} = food;
    const {removeFood} = props
    // console.log(food)
    return (
        <div>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={strMealThumb} className="img-fluid rounded-start w-100 me-5" alt="..."/>
                    </div>
                    <div className="col-md-8 d-flex ">
                    <div className="card-body">
                        <h5 className="card-title">{strMeal}</h5>
                        <p className="card-text">{strCategory}</p>
                    </div>
                        <button onClick={()=>removeFood(food)} className='btn btn-primary'>Remove</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Food;