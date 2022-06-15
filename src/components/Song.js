import React from 'react'

function Song({ id, artist, song, image, setList, setSetList, handleDelete }) {
   
    return(
        <div className="song" onClick={()=> {
            const movedSong = {
                id: id,
                artist: artist,
                song: song,
                image: image
            }
            const foundResult = setList.find((setListSong) => {
                return setListSong.id == id
            })

            if (!foundResult) {
                setSetList([...setList, movedSong])
            }
        }}>
            <img src={ image } alt={ song }/>
            <div className="song-info">
                <h3>{ song }</h3>
                <h4>{ artist }</h4>
            </div>
            <button onClick={() => handleDelete(id)}>X</button>
        </div>
    );
}

export default Song;
