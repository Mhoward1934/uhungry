import React, { Component } from "react";
//import Card from "../../components/Card/Card";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchResults from "../../components/SearchResults/SearchResults";
import logo from "../Home/salad_table_logo.jpg";
import "./Home.css"

class Home extends Component {
    state = {
        results: [],
        search: ""
    };

    componentDidMount() {
        this.searchRecipes("");
    }

    searchRecipes = query => {
        API.search(query)
            //.then(res => console.log({ results: res.data.matches}))
            .then(res => this.setState({ results: res.data.matches }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        this.searchRecipes(this.state.search);
    };

    render() {
        return (
            <div>
                <div className="container-fluid">
                    {/* <images backgroundImage="./"> */}
                    {/* <h1>UHungry</h1> */}
                    {/* </images> */}
                    <img src={logo} alt="Logo" />;
                <br />

                    <div className="row">
                        <div className="col-md-4">
                            <h1><strong>Welcome to UHungry</strong></h1>
                            <br />
                            <h3>We here at UHungry have had that dilemma many times where we're at home, have a few items in the
                                fridge, and have no idea what to do with them.  Let us help you out with some ideas for getting creative.
                    </h3>
                            <br />
                            <h2><strong>Why We're Here</strong></h2>
                            <br />
                            <p>
                                Ever needed to figure out what to do with those few items in your fridge?
                                Just enter ingredients in the search bar below.  Use the drop down to select
                                the style, or type, of cuisine for which you would like to see a variety of
                                recipes.
                        </p>
                            <div className="input-group">
                                <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                                <div className="input-group-append">

                                    <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div role="separator" className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                    <button type="button" className="btn btn-outline-secondary">Search</button>
                                </div>
                            </div>
                        </div>
                        {/* //Second component */}
                        {/* Create map react loop */}
                        <div className="col-md-4">
                            <br />
                            <h2><strong>Recipes</strong></h2>
                            <br />
                            {/* {
                                this.state.recipeResults.map((element, index) => (
                                    <div key={index}>
                                        <h3>{element.recipeName}</h3>
                                        <p>{element.imageLink}</p>
                                    </div>
                                ))
                            } */}
                        </div>
                        {/* Third component */}
                        <div className="col-md-4">
                            <h2><strong>Got My Recipe</strong></h2>
                            <br />
                            <p>
                                <h3>
                                    Once you've picked your recipe and know what ingredients you need,
                                    just click on the Grocery List link to save all of your grocery items
                                    before you head to the store, or use your grocery list to shop online.
                        </h3>
                            </p>
                            <br />
                            <h2><strong>Grocery List</strong></h2>
                            <br />
                            <form className="form-inline">
                                <div className="form-group mb-2">
                                    <label for="staticEmail2" className="sr-only">Email</label>
                                    <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="Add Item" />
                                </div>
                                <div className="form-group mx-sm-3 mb-2">
                                    <label for="inputPassword2" className="sr-only">Grocery List Item</label>
                                    <input type="password" className="form-control" id="inputPassword2" placeholder="Grocery List Item" />
                                </div>
                                <button type="submit" className="btn btn-primary mb-2">Submit</button>
                            </form>
                            <ul>
                                <li>Pasta</li>
                                <li>Tomatoes</li>
                                <li>Scallops</li>
                                <li>French Bread</li>
                                <li>Feta Cheese</li>
                                <li>Couscous</li>

                            </ul>
                        </div>
                    </div>
                    <SearchForm
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit} />
                    <SearchResults
                        results={this.state.results}
                    />
                </div>
            </div>
        );
    };


}

export default Home;



// class Home extends Component {
//                     state = {
//                         recipeResults: []
//                     }
//     componentDidMount() {
//         //call the api to get results
//         const recipeResults = [
//             {
//                     recipeName: 'Minestrone',
//                 imageLink: 'allrecipes.com'
//             },
//             {
//                     recipeName: 'Peking Duck',
//                 imageLink: 'good2eat.com'
//             },
//             {
//                     recipeName: 'Trout Almondine',
//                 imageLink: 'nodoubttrout.com'
//             },
//             {
//                     recipeName: 'Steak Tartar',
//                 imageLink: 'rawmeat.com'
//             }
//         ]

//         this.setState({recipeResults: recipeResults })
//             }
//     render() {
//         return (
//             <div className="container-fluid">
//                     {/* <images backgroundImage="./"> */}
//                     {/* <h1>UHungry</h1> */}
//                     {/* </images> */}
//                     <img src={logo} alt="Logo" />;
//                 <br />

//                     <div className="row">
//                         <div className="col-md-4">
//                             <h1><strong>Welcome to UHungry</strong></h1>
//                             <br />
//                             <h3>We here at UHungry have had that dilemma many times where we're at home, have a few items in the
//                                 fridge, and have no idea what to do with them.  Let us help you out with some ideas for getting creative.
//                     </h3>
//                             <br />
//                             <h2><strong>Why We're Here</strong></h2>
//                             <br />
//                             <p>
//                                 Ever needed to figure out what to do with those few items in your fridge?
//                                 Just enter ingredients in the search bar below.  Use the drop down to select
//                                 the style, or type, of cuisine for which you would like to see a variety of
//                                 recipes.
//                         </p>
//                             <div className="input-group">
//                                 <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
//                                 <div className="input-group-append">

//                                     <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                         <span className="sr-only">Toggle Dropdown</span>
//                                     </button>
//                                     <div className="dropdown-menu">
//                                         <a className="dropdown-item" href="#">Action</a>
//                                         <a className="dropdown-item" href="#">Another action</a>
//                                         <a className="dropdown-item" href="#">Something else here</a>
//                                         <div role="separator" className="dropdown-divider"></div>
//                                         <a className="dropdown-item" href="#">Separated link</a>
//                                     </div>
//                                     <button type="button" className="btn btn-outline-secondary">Search</button>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* //Second component */}
//                         {/* Create map react loop */}
//                         <div className="col-md-4">
//                             <br />
//                             <h2><strong>Recipes</strong></h2>
//                             <br />
//                             {
//                                 this.state.recipeResults.map((element, index) => (
//                                     <div key={index}>
//                                         <h3>{element.recipeName}</h3>
//                                         <p>{element.imageLink}</p>
//                                     </div>
//                                 ))
//                             }
//                         </div>
//                         {/* Third component */}
//                         <div className="col-md-4">
//                             <h2><strong>Got My Recipe</strong></h2>
//                             <br />
//                             <p>
//                                 <h3>
//                                     Once you've picked your recipe and know what ingredients you need,
//                                     just click on the Grocery List link to save all of your grocery items
//                                     before you head to the store, or use your grocery list to shop online.
//                         </h3>
//                             </p>
//                             <br />
//                             <h2><strong>Grocery List</strong></h2>
//                             <br />
//                             <form className="form-inline">
//                                 <div className="form-group mb-2">
//                                     <label for="staticEmail2" className="sr-only">Email</label>
//                                     <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="Add Item" />
//                                 </div>
//                                 <div className="form-group mx-sm-3 mb-2">
//                                     <label for="inputPassword2" className="sr-only">Grocery List Item</label>
//                                     <input type="password" className="form-control" id="inputPassword2" placeholder="Grocery List Item" />
//                                 </div>
//                                 <button type="submit" className="btn btn-primary mb-2">Submit</button>
//                             </form>
//                             <ul>
//                                 <li>Pasta</li>
//                                 <li>Tomatoes</li>
//                                 <li>Scallops</li>
//                                 <li>French Bread</li>
//                                 <li>Feta Cheese</li>
//                                 <li>Couscous</li>

//                             </ul>
//                         </div>
//                     </div>
//                 </div>


//         );
//     };
// };


