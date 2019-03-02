import React from "react";

function SearchResults(props) {
    return (

        <div>
            <ul className="list-group search-results">
                {props.results.map(result => (
                    <li key={result.id} className="list-group-item">
                        <h1>{result.recipeName}</h1>
                        <img alt={result.recipeName} className="img-fluid" src={result.imageUrlsBySize[90]} style={{ margin: "0 auto" }} />
                        <br/>
                        {result.ingredients.map(ingredient => (
                            <button>
                                {ingredient}
                            </button>
                        ))}
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default SearchResults;
