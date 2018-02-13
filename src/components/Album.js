import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';


class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
       return album.slug === this.props.match.params.slug
     });

     this.state = {
       album: album
     };
  }

  render() {
    return (<section className="album">
        <section id="album-info">
           <img id="album-cover-art" src={this.state.album.albumCover} />
           <div className="album-details">
             <h1 id="album-title">{this.state.album.title}</h1>
             <h2 className="artist">{this.state.album.artist}</h2>
             <div id="release-info">{this.state.album.releaseInfo}</div>
           </div>
         </section>
         <table id="song-list">
            <colgroup>
              <col id="song-number-column" />
              <col id="song-title-column" />
              <col id="song-duration-column" />
            </colgroup>
            <tbody>
                {
                  this.state.album.songs.map( (album, index) =>
                    <tr>
                      <td className="ion-play">Icon</td>
                      <td id="song-number"> {index + 1} </td>
                      <td id="song-title"> {this.state.album.songs[index].title}</td>
                      <td id="song-duration"> {this.state.album.songs[index].duration}</td>
                    </tr>
                  )
                }
            </tbody>
          </table>
    </section>);
  }
}

export default Album;
