import React from 'react'
import Card from './Card'

import EventCard from './EventCard'

function ListOfEventCards({cards}) {
    return (
        <div className="my-5 w-full grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            {cards.map((item, key) => (
                <EventCard key={key} title={item.title} desc={item.desc} photo={item.photo} tags={item.tags} to={item.to}/>
            ))}
        </div>
    )
}

export default ListOfEventCards
