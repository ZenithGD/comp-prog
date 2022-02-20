import React from 'react'
import Card from './Card'

function ListOfCards({cards}) {
    return (
        <div className="my-5 w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {cards.map((item, key) => (
                <Card key={key} title={item.title} desc={item.desc} photo={item.photo} tags={item.tags} to={item.to}/>
            ))}
        </div>
    )
}

export default ListOfCards
