import { useState } from 'react';
import './App.css';
import MealDb from './components/nav/MealDb/MealDb';
import Nav from './components/nav/Nav';

function App() {
  const [search , setSearch] = useState('')
  return (
    <div>
      <Nav search={search} setSearch={setSearch}></Nav>
      <MealDb search={search}></MealDb>
    </div>
  );
}

export default App;
