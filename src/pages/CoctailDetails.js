import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CoctailDetails() {
  const { coctailId } = useParams();
  const [coctail, setCoctail] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchCoctail = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${coctailId}`
        );
        const data = await response.json();
        setCoctail(data.drinks[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCoctail();
  }, [coctailId]);

  if (!coctail) {
    return <div>Loading...</div>;
  }

  const fetchCoctail = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${coctailId}`
      );
      const data = await response.json();
      setCoctail(data.drinks[0]);
      const newIngredients = [];
      for (let i = 1; i <= 15; i++) {
        const ingredientName = data.drinks[0][`strIngredient${i}`];
        const ingredientMeasure = data.drinks[0][`strMeasure${i}`];
        if (ingredientName) {
          const ingredientImage = `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Small.png`;
          newIngredients.push({
            name: ingredientName,
            measure: ingredientMeasure,
            image: ingredientImage,
          });
        }
      }
      setIngredients(newIngredients);
    } catch (error) {
      console.error(error);
    }
  };

  fetchCoctail();

  return (
    <div>
      <h2>{coctail.strDrink}</h2>
      <p>
        {coctail.strAlcoholic === "Alcoholic"
          ? "This is an alcoholic drink"
          : "This is a non-alcoholic drink"}
      </p>
      <p>Category: {coctail.strCategory}</p>
      <p>Instructions: {coctail.strInstructions}</p>
      <p>Serve in: {coctail.strGlass}</p>
      <img src={coctail.strDrinkThumb} alt={coctail.strDrink} />
      <button>Add to favorites</button>

      <p>Ingredients:</p>
      <ul>
        {[
          coctail.strIngredient1,
          coctail.strIngredient2,
          coctail.strIngredient3,
          coctail.strIngredient4,
        ].map((ingredient, index) => {
          if (ingredient) {
            return <li key={index}>{ingredient}</li>;
          }
          return null;
        })}
      </ul>
      <div>
        <h2>{coctail.strDrink}</h2>
        <p>Instructions: {coctail.strInstructions}</p>
        <p>Ingredients:</p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <img
                src={ingredient.image}
                alt={ingredient.name}
                style={{ width: "50px" }}
              />
              {ingredient.name} - {ingredient.measure}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CoctailDetails;
