import React from 'react';
import Rank from './Rank';

function ListOfRanks({ranks}) {
    return <div className="w-full flex flex-col gap-4 mt-10">
        {ranks.map((item, key) => (
            <Rank key={key} rank={item.rank} name={item.name} solved={item.solved} total={item.total} points={item.points}/>
        ))}
    </div>;
}

export default ListOfRanks;
