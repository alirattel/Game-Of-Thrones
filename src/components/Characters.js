import React from 'react'
import CharacterItem from './CharacterItem'

const Characters = ({ items, Loading }) => {
    return Loading ? <h1>Loading ...</h1> : <section className='cards'>
        {items.map((item) => (
            <CharacterItem key={item.id} item={item}></CharacterItem>
        ))}
    </section>
}

export default Characters