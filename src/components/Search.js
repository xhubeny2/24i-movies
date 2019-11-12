import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

// component - search bar in header
const Search = () => {

    // state hook and variables
    const [search, setSearch] = useState("");
    const history = useHistory();

    // set value from input to state 
    const handleChange = event => {
        setSearch(event.target.value);
    }

    // on submit method
    const handleSubmit = event => {
        event.preventDefault()
        history.push({
            pathname: '/search',
            search: `?query=${search}`,
        })
    }

    return (
        <div className="w3_search">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" value={search} onChange={handleChange} />
                <input type="submit" value="Go" disabled={search === ""}/>
            </form>
        </div>
    )
}

export default Search;