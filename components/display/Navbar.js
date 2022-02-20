import React, { useState } from 'react'
import ProfileDropdown from './ProfileDropdown'
import NavbarButton from '../ui/NavbarButton'

function Navbar() {

    const [ loggedIn, setLoggedIn ] = useState(false)

    console.log(loggedIn)

    return (
        <nav className="border-b-2 border-orange-400 bg-gray-800 z-10 fixed w-full h-14 m-0 top-0 flex justify-between items-center filter shadow-md">
            <div className='flex justify-center'>
                <NavbarButton href="/" text="Inicio" />
                <NavbarButton href="/problems" text="Problemas" />
                <NavbarButton href="/rankings" text="Rankings" />
                <NavbarButton href="/events" text="Eventos" />
            </div>
            { loggedIn ? <ProfileDropdown /> : (
                <div className='flex justify-center'>
                    <NavbarButton href="/login" text="Iniciar sesión" />
                    <NavbarButton href="/register" text="Registrarse" />
                </div>
            ) }
        </nav>
    )
}

export default Navbar
 