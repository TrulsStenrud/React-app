import React from "react"

type Image = {
    heigh:number,
    width:number,
    url:string
}
type Album = {
    artist:string,
    id:string,
    images: [Image]
}
type Track = {
    id:string,
    album:Album,
    artist:any,
    duration:number,
    name:string,
    uri:string

}
type SongBtnProps = {
    track:Track
    queueSong: any
}

const SongBtn = (props:SongBtnProps) =>{
 const {track, queueSong} = props

    const playSong = () =>{
        queueSong(track.uri)
    }
    return <div onClick={playSong}>{track.name}</div>
}

export default SongBtn