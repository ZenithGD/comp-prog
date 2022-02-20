import React from 'react'

function Button({onClick, children}) {
    return (
        <button
            onClick={onClick}>
            <a className="h-full flex justify-center p-2 items-center rounded:lg border-2 border-orange-400 rounded-md" >
                {children}
            </a>
        </button>
    )
}

export default Button