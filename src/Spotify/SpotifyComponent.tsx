import React, { useState } from "react";

import { apiSearch, apiNext, apiPrevious, apiQueueTrack } from "../api/useApi";
import { VBox, HBox } from "../LayoutStyles";
import SongBtn from "./SongBtn/SongtBtn";


export type AccessToken = {
    access_token: string,
    token_type: string,
    expires_in: string
}

type SpotifyComponentsProps = {
    token: AccessToken
}

const SpotifyComponent = (props: SpotifyComponentsProps) => {

    const { token } = props
    // const fetchData = useGet("https://api.spotify.com/v1/me/player", token.access_token)

    const [list, setList] = useState<any>({})
    const [searchText, setSearchText] = useState<string>("")
    const [status, setStatus] = useState('')

    const changeHandler = (event: any) => {
        setSearchText(event.target.value)
    }
    const search = () => {
        console.log(searchText)
        
        
        apiSearch(searchText, token.access_token, setList)
    }
    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            search()
        }
    }
    
    const useNext = () =>{
        setStatus("Loading")
        apiNext(token.access_token, () => setStatus(''))
    }
    const usePrevious = () =>{
        setStatus("Loading")
        apiPrevious(token.access_token, () => setStatus(''))
    }
    const useQueueSong = (id:string) => {
        setStatus("Loading")
        apiQueueTrack(id, token.access_token, () => setStatus(''))
    }

    
    // TOTO remove, just for looking at SongBtn
    // useEffect(() => {
    //     apiSearch("sex", token.access_token, setList)
    // },[])

    
    return <VBox>
        <>{status}</>
        <HBox>
            <button onClick={usePrevious}>Previous</button>
            <button onClick={useNext}>Next</button>
        </HBox>
        <HBox>
            <input value={searchText} onChange={changeHandler} onKeyDown={handleKeyDown} />
            <button onClick={search}>Search</button>
        </HBox>
        {list.tracks && list.tracks.items.map((item:any, index:any) => <SongBtn key={index} track={item} queueSong={useQueueSong}></SongBtn>)}
    </VBox>

}



export default SpotifyComponent