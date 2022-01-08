import React from 'react'

function Dropdown({ className, defaultTheme, onChange, data }) {
    return (
        <select className={className} defaultValue={defaultTheme} onChange={onChange}>
            {data.sort().map(({name}, index) => {
                return (
                    <option key={index} value={index}>
                        {name}
                    </option>
                );
                })}
        </select>
    )
}

export default Dropdown