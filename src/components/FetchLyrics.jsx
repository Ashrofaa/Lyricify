import React from 'react';

export default function FetchLyrics({queries}) {
    const [para, setPara] = React.useState("");
    const [err, setError] = React.useState();

    const url = "https://api.vagalume.com.br/search.php?art=" + queries.artistWords + "&mus=" + queries.songWords + "&apikey=c96054b7261e459233b51394ac8526bd";
    React.useEffect(() => {
        fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(json => setPara(json.mus[0].text))
        .catch(error => {
            setError(error);
            setPara("Couldn't find any data. It's either not in the database or the artist/song name is wrong");
        });
    }, []);

    return (
        <div>
            {para ? <pre className='lyrics'>{para}</pre> : "Loading..."}
        </div>
    );
}
