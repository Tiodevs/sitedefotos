import { useState } from 'react'

// CSS
import style from './home.module.css'

// Capas
import HoverCard from '../../components/Card/HoverCard'


import {DBfotos} from '../../DBfotos'

export function Home() {
    return (
        <>
            <div className={style.capas}>

                {DBfotos.map(item => (
                    <HoverCard
                        key='a'
                        image={item.foto}
                        title={item.title}
                        subTitle={item.subTitle}
                        id={item.id}
                    />
                ))}

            </div>
        </>
    )
}