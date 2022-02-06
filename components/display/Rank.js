import React from 'react';

function Rank({rank, name, solved, total, points}) {
    return <div className='w-full flex justify-between border-2 border-orange-400 bg-gray-800 p-5'>
        <div className='text-orange-400 text-xl'>{rank}</div>
        <div className='text-orange-400 '>{name}</div>
        <div className='text-orange-400 '>{solved} / {total}</div>
        <div className='text-orange-400 '>{points} pts</div>
    </div>;
}

export default Rank;
