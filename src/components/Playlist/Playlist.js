import React from "react";

import "./Playlist.css";

import TrackList from "../TrackList/TrackList";

class PlayList extends React. Component {
    constructor (props) {
        super (props);

        this.handleNameChange =this.handleNameChange.bind(this)
           
    }

    handleNameChange(event){
        this.props.onNameChange(event.target.value);
    }
    render(){
        return (
        <div className="PlayList">
            <input onChange={this.handleNameChange} defaultValue={"New Playlist"}/>
            <TrackList track={this.props.PlayListTracks}
            isRemoval={true}
            onRemove={this.props.onRemove}/>
            <button className="Playlist-save" onCLick={this.props.onSave}>Save to Spotify</button>
        </div>
        );
    }
}

export default PlayList;