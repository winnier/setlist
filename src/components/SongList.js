import React from 'react'
import Song from './Song';

function SongList({ songList, setSongList, setList, setSetList }) {
    function handleDelete(id) {
        const newSetList = setList.filter((setListSong) => {
            return setListSong.id != id
        })

        setSetList(newSetList)

        const newSongList = songList.filter((songListSong) => {
            return songListSong.id != id
        })

        setSongList(newSongList)

        fetch(`http://localhost:3110/tracks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    const songItems = songList.map((song) => {
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
        <h2>Song List</h2>
        <div className="song-list">
            {songItems}
        </div>
        </>
    );
}

export default SongList;
