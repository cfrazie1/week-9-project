import React, { Component } from 'react';
import PlayListItem from './PlayListItem';

export default class PlayList extends Component {
  render() {
    return (
      <div className="PlayList col-md-4" id="playlist">

      </div>
    );
  }
  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {

          this.setState({songs: data});
          console.log("state", this.state.songs);

          <PlayListItem userName="fleming" songTitle="mySong" songArtist="fleming" songNotes="my notes">
          </PlayListItem>

        });
  }
  componentDidUpdate() {

  }
  onClick() {
    let fetchData;
    fetchData = (e) => {
        e.preventDefault();
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
        })
      }
  }
};
