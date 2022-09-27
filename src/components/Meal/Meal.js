import React from 'react';

const Meal = (props) => {
    let {meal,handler} = props;
    // console.log(props.meal)
    const {strMeal,strInstructions,strMealThumb,strArea,strCategory} = meal;
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src={strMealThumb} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <p className="card-text">
                        <small className='fw-bold'>Area : {strArea}</small>
                        <small className='fw-bold'>Category : {strCategory}</small> <br />
                        {strInstructions?strInstructions.slice(0,50):'NO strInstructions Here.'}</p>
                    <span  onClick={() =>handler(meal)} className="btn btn-primary">Go somewhere</span>
                </div>
                </div>
        </div>
    );
};

export default Meal;