import React, { useState } from 'react'

function Dropdown(props) {

    const [ click, setClick ] = useState(true)

    return (
        <div className="flex flex-col relative h-full">
            <button
                type="button"
                className={props.buttonStyle}
                onClick={() => setClick(!click)}>
                {props.btnComponent}
            </button>
            { click && <div className={props.listStyle}>
                {props.children}
            </div>}
        </div>
    )
}

export default Dropdown
