import React from "react";

import "./SearchBar.css";

class SearchBar extends React.Component{
    constructor (props) {
        super (props);
        
        this.handleTermchange=this.handleTermchange.bind(this);
        this.search=this.search.bind(this);
        this.handleEnter=this.handleEnter.bind(this);
    }

    handleTermChange(event){
        this.setState({term:event.target.value});
    }

    Search(){
        this.props.onSearch(this.state.term);
    }

    handleEnter(event){
        if (event.keyCode === 13){
            this.serach();
        }
    }

    render(){
        return (
            <div className="SearchBar">
                <input   placeholder="Enter song, album or artist"       onChange={this.handleTermchange}    onKeyUp={this.handleEnter} />
                <button className="SearchButton" onClick={this.search}>
                    SEARCH
                </button>
            </div>
        );
    }
       
}

export default SearchBar;
