import React from 'react';


// onChange={(e) => setSearch(e.target.value)}
const Nav = ({search,setSearch}) => {
    const doSearch = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className='mb-3'>
            <nav className="navbar bg-light p-3 shadow-md">
                <div className="container">
                    <span className="navbar-brand fw-bold">Meal-DB</span>
                    <form className="d-flex" role="search">
                    <input onChange={doSearch} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </nav>
        </div>
    );
};

export default Nav;