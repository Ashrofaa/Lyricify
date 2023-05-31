import React from 'react';

export default function Recommend({queries, count}) {

    const [para, setPara] = React.useState({artist:"", song:""});
    const [err, setError] = React.useState();

    // let randomNumber = Math.floor(Math.random()*100) + 1;

    // const url = "http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&api_key=3c76038a7be4415606253aef4f33c245&artist=" + queries.artistWords + "&track=" + queries.songWords + "&format=json";
    React.useEffect(() => {

        let randomNumber = Math.floor(Math.random()*100) + 1;
        const url = "https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&api_key=3c76038a7be4415606253aef4f33c245&artist=" + queries.artistWords + "&track=" + queries.songWords + "&format=json";

        fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(json => setPara({song: json.similartracks.track[randomNumber].name, artist: json.similartracks.track[randomNumber].artist.name}))
        .catch(error => {
            setError(error);
            setPara("Couldn't find similar");
        });
    }, [count]);

    return (
        <div>
            {para.song ? <h1 className='lyrics'>try:<br />{para.song} by {para.artist}</h1> : "Loading..."}
        </div>
    );
}
