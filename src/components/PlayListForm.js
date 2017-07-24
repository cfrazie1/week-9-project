import React, { Component } from 'react';
import PlayListItem from './PlayListItem';

export default class PlayListForm extends Component {
  constructor(props){
    super(props)
    this.state = {
         userName: '',
         songArtist: '',
         songTitle: '',
         songNotes: ''
      }
  }
  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      // React.render(<PlayListItem></PlayListItem>, document.getElementById("playlist"));
      console.log(React);

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }
  handleUserName(event) {
    this.setState({userName: event.target.value});
  }
  handleArtist(event) {
    this.setState({songArtist: event.target.value});
  }
  handleSongTitle(event) {
    this.setState({songTitle: event.target.value});
  }
  handleSongNotes(event) {
    this.setState({songNotes: event.target.value});
  }
  render() {
    return (
      <form className="col-md-8">
        <div className="PlayListForm">
          <div className="form-group">
            <label className="label label-default">
              Name:
            </label>
            <input
              onChange={this.handleUserName}
              placeholder="Name or User Name"
              name="userName"
              type="text"
              className="form-control"
              value={this.state.userName} />
          </div>
          <div className="form-group">
          <label className="label label-default">
            Artist:
          </label>
          <input
            onChange={this.handleArtist}
            placeholder="Artist Name"
            name="songArtist"
            type="text"
            className="form-control"
            value={this.state.songArtist} />
          </div>
          <div className="form-group">
            <label className="label label-default">Title:</label>
            <input
              onChange={this.handleSongTitle}
              placeholder="Song Title"
              name="songTitle"
              type="text"
              className="form-control"
              value={this.state.songTitle} />
          </div>
          <div className="form-group">
          <label className="label label-default">
            Notes:
          </label>
          <input
            onChange={this.handleSongNotes}
            placeholder="Enter Notes"
            name="songNotes"
            type="textarea"
            className="form-control"
            value={this.state.songNotes} />
          </div>
          <button onClick={this.addToList} type="submit" className="btn-success">
            Update List
          </button>
        </div>
      </form>
    );
  }
};
