import React from 'react';
import ListOfRanks from '../components/display/ListOfRanks';

const ranks = [
    {
        rank: "1º",
        name: "Nombre",
        solved: 100,
        total: 300,
        points: 1000000
    },
    {
        rank: "2º",
        name: "Nombre aaa",
        solved: 100,
        total: 300,
        points: 700000
    },
    {
        rank: "3º",
        name: "Nombre bbb",
        solved: 100,
        total: 300,
        points: 400000
    }
]

function rankings() {
    return (
        <>
            <div className="h-full p-20 flex justify-center items-start flex-col">
                <div className='w-full flex justify-center mb-10'>
                    <h1 className="text-5xl text-orange-400">Clasificación</h1>
                    <div>
                        
                    </div>
                </div>
                <ListOfRanks ranks={ranks} />
            </div>
        </>
    );
}

export default rankings;
