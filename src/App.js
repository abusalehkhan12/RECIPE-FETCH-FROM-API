import React, { useEffect,useState } from 'react';
import "./Components/App.css";
import Recipe from './Components/Recipe';
import Nav from './Components/nav';
import Footer from './Components/footer';

const App =() => {

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
    const recipes = data.hits.map(obj => {
      let recipe = obj.recipe;
      return recipe;
    });
    setRecipes(recipes);
  };

  return(
    <div className="App">
      <Nav />
      <form onSubmit={getSearch} className="form">
        <input type="text" className="search-bar" onChange={updateSearch} value={search}/>
        <button type="submit" className="search-button">Search</button>
      </form>

     <div className="recipe-list">
      {recipes.map(recipe =>(
        
        <Recipe 
          key={recipe.label}
          title={recipe.label}
          image={recipe.image}
          ingredients={recipe.ingredients}
          calories={recipe.calories}   
        />
        ))}
        </div>
        <Footer />
    </div>
  );
}

export default App;