import React from 'react';
import ListOfEventCards from '../components/display/ListOfEventCards'

const cards = [
    {
        title: "Kitty I",
        desc: "A problem about kittens",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Cute_grey_kitten.jpg/1280px-Cute_grey_kitten.jpg",
        tags: [
            "cute", "easy"
        ],
        to: "/problems/1"
    },
    {
        title: "Kitty II",
        desc: "Another problem about kittens",
        photo: "https://ichef.bbci.co.uk/news/640/cpsprodpb/150EA/production/_107005268_gettyimages-611696954.jpg",
        tags: [
            "cute", "not so easy"
        ],
        to: "/problems/2"
    }
]

function events() {
    return (
        <>
            <div className="h-full p-20 flex justify-center items-start flex-col">
                <h1 className="text-5xl text-orange-400">Destacados</h1>
                <ListOfEventCards cards={cards} />
            </div>
        </>
    );
}

export default events;
