import React, { useEffect, useState } from 'react'
import SongList from './SongList';
import Setlist from './Setlist';

function SetlistBuilder() {
    const [songList, setSongList] = useState([])
    const [setList, setSetList] = useState([])

    useEffect(() => {
        fetch("http://localhost:3110/tracks")
        .then(response => response.json())
        .then(songJson => {
            setSongList(songJson)
        }) 
    }, [])

    return(
        <div className="builder">
            <SongList 
                songList={ songList } 
                setSongList={ setSongList }
                setList={ setList }
                setSetList={ setSetList }
            />
            <div className="vl"></div>
            <Setlist 
                setList={setList}
                setSetList={setSetList}
            />
        </div>
    );
}

export default SetlistBuilder;
