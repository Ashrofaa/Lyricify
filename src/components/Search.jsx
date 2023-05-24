import React from 'react';
import FetchLyrics from './FetchLyrics';
import Recommend from './Recommend';
import img from "../mobile.jpg";

export default function Search() {
    
    const [value, setValue] = React.useState({
      artist: "",
      song: ""
    });

    const [queries, setQueries] = React.useState({
      artistWords: "",
      songWords: ""
    })

    const [visibleLyrics, setVisibleLyrics] = React.useState(false);
    const [visibleSimilar, setVisibleSimilar] = React.useState(false);
    const [count, setCount] = React.useState(0);
    
    function handleChange(event) {
      setVisibleLyrics(false);
      setVisibleSimilar(false);
      var newValue = event.target.value;
      var newName = event.target.name;
      setValue(prevValues => {return {
        ...prevValues,
        [newName]: newValue
      }});
    }
    
    function handleClickLyrics() {
      createQueris();
      setVisibleLyrics(true);
      setVisibleSimilar(false);
    }

    function handleClickSimilar() {
      createQueris();
      setCount( count + 1);
      setVisibleLyrics(false);
      setVisibleSimilar(true);
    }

    function createQueris() {
      let artistName = (value.artist).trim();
      let songName = (value.song).trim();
  
      artistName = artistName.split(" ");
      songName = songName.split(" ");
  
      for (let i = 0; i < artistName.length; i++) {
        artistName[i] = artistName[i].charAt(0).toUpperCase() + artistName[i].substring(1).toLowerCase();
      }
  
      for (let i = 0; i < songName.length; i++) {
        songName[i] = songName[i].charAt(0).toUpperCase() + songName[i].substring(1).toLowerCase();
      }

      setQueries({
        artistWords: artistName.join("%20"),
        songWords: songName.join("%20")
      });
    }

    return (
    <div className='lyricsSearch'>
      <label htmlFor='artist'>Artist:</label>
      <input id='artist' name='artist' type='text' className='btn btn-outline-dark searchInput' onChange={handleChange}></input>
      <label htmlFor='song'>Song:</label>
      <input id='song' name='song' type='text' className='btn btn-outline-dark searchInput' onChange={handleChange}></input>
      <br />
      <button type='button' className='btn btn-outline-dark searchBtn' onClick={handleClickLyrics}>Get Lyrics</button>
      <button type='button' className='btn btn-outline-dark searchBtn' onClick={handleClickSimilar}>Want to hear a similar song?</button>
      <div className='searchImg-container'><img src={img} className='search-img'></img></div>
      {visibleLyrics && <FetchLyrics queries={queries} />}
      {visibleSimilar && <Recommend queries={queries} count={count} />}
    </div>
  )
}
