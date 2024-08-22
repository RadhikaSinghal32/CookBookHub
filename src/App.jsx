import { useState, useEffect } from "react";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";  // Import Bootstrap CSS

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Pizza");
  const [recipes, setRecipes] = useState([]);
  const APP_ID = "dc34792b";
  const APP_KEY = "3eab1a651f78f58e8b394f905f3efa21";

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setRecipes(data.hits));
  }, [query]);

  const submitHandler = () => {
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Recipe Finder</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter dish name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            onClick={submitHandler}
          >
            Search
          </button>
        </div>
      </div>
      <div className="row">
        {recipes.map((item) => (
          <div className="col-md-4 mb-4" key={item.recipe.uri}>
            <Card recipe={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;