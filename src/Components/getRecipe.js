import React, { useEffect,useState } from 'react';
import "./App.css";
import Recipe from './Recipe';

const getRecipe = () => {

  const App_Id='53f1607c';
  const App_Key='03594c23ad8e0c4eeb47e1de09576971';

  const [recipes,setRecipes]= useState([]);
  const [search,setSearch]=useState(" ");
  const [query,setQuery]=useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch= e =>{
    setSearch(e.target.value);
  }

  const getSearch= e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const getRecipes = async () => {
    const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_Key}`);
    const data=await response.json();
    console.log(data)
    setRecipes(data.hits);
  };
  return(
    <div className="App">
      <form onSubmit={getSearch} className="form">
        <input type="text" className="serach-bar" onChange={updateSearch} value={search}/>
        <button type="submit" className="search-button">Search</button>
      </form>


      {recipes.map(recipe =>(
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}             
        />
        ))}
    </div>
  );
}


export default getRecipe
