import React from 'react'
import Link from 'next/link'

function NavbarButton({href, text}) {
    return (
        <Link 
            href={href}>
            <a className="h-full flex justify-center w-28 items-center rounded:lg" >
                <p className="font-bold text-orange-400 my-auto fromCenter">
                    <div className='h-1'/>
                    {text}
                    <div className='h-1'/>
                </p>
            </a>
        </Link>
    )
}

export default NavbarButton
