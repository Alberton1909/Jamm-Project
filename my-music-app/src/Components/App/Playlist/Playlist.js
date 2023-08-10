import React from 'react';
import './Playlist.css';

import Track  from '../Track/Track';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
   constructor(props){
      super(props);
      this.handleNameChange  = this.handleNameChange.bind(this);
   }
   handleNameChange(event) {
      this.props.onNameChange(event.target.value);

   }

 render() {
    return ( 
        <div className='Playlist'>
         <input defaultValue={this.props.PlaylistName} onChange={this.handleNameChange}/>
         <TrackList tracks= {this.props.PlaylistTracks}  onRemove={this.props.onRemove} isRemoval={true}/>  
          <button className='Playlist-save' onClick={this.props.onSave}>Save to spotify</button>
       </div>
    )
 }
}

export default Playlist;