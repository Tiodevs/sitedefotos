import { useParams } from 'react-router-dom'

import {DBfotos} from '../../DBfotos'

export function Album(){
const {id} = useParams()
const item = id - 1

const album = DBfotos[item].album

    return(
        <>
        <h1>Album {id}</h1>

        {album.map(item => (
            <img src={item} alt="" kay={id}/>
        ))}
        </>
    )
}