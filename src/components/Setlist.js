import React from 'react'
import Song from './Song';

function Setlist({ setList , setSetList }) {
    function handleDelete(id) {
        const newSetList = setList.filter((setListSong) => {
            return setListSong.id != id
        })

        setSetList(newSetList)
    }

    const songItems = setList.map((song) => {
        return (<Song 
            key={song.id}
            id={song.id}
            artist={song.artist}
            song={song.song}
            image={song.image}
            handleDelete={handleDelete}
            setList={setList}
            setSetList={setSetList}
        />)
    })
    return(
        <>
        <h2>Setlist</h2>
        <div className="setlist">
            {songItems}
        </div>
        </>
    );
}

export default Setlist;
