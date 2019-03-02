import React, { Component } from "react";
//import Card from "../../components/Card/Card";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchResults from "../../components/SearchResults/SearchResults";

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

                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit} />
                <SearchResults
                    results={this.state.results}
                />
            </div>
        );
    };


}

export default Home;