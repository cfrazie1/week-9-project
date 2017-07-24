import React, { Component } from 'react';

export default class PlayListItem extends Component {

  constructor(props){
    super(props)
    this.state = props;
  }
  render(props) {
    return (
      <div className="PlayListItem col-md-4">
        <div class="PlayListItem col-md-4">
          <div>User: {props.userName}</div>
          <div>Artist: {props.songArtist}</div>
          <div>Title: {props.songTitle}</div>
          <div>Notes: {props.songNotes}</div>
        </div>
      </div>

    );
  }
};
