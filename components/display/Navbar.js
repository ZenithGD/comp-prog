import React, { useState } from 'react'
import Link from 'next/link'
import ProfileDropdown from './ProfileDropdown'

function Navbar() {

    const [loggedIn, setLoggedIn] = useState(false)

    console.log(loggedIn)

    return (
        <nav className="bg-gray-800 z-10 fixed w-full h-14 m-0 top-0 flex justify-between items-center filter drop-shadow-md">
            <div className='flex justify-center'> 
                <div className='flex justify-center'>
                    <Link
                        href='/'>
                        <a className="h-full flex justify-center w-28 items-center rounded:lg" >
                            <p className="font-bold text-orange-400 my-auto fromCenter">
                                Inicio
                            </p>
                        </a>
                    </Link>
                </div>
                <div className='flex justify-center'>
                    <Link
                        href='/problems'>
                        <a className="h-full flex justify-center w-28 items-center rounded:lg" >
                            <p className="font-bold text-orange-400 my-auto fromCenter">
                                Problemas
                            </p>
                        </a>
                    </Link>
                </div>
                <div className='flex justify-center'>
                    <Link
                        href='/rankings'>
                        <a className="h-full flex justify-center w-28 items-center rounded:lg" >
                            <p className="font-bold text-orange-400 my-auto fromCenter">
                                Rankings
                            </p>
                        </a>
                    </Link>
                </div>
                <div className='flex justify-center'>
                    <Link
                        href='/events'>
                        <a className="h-full flex justify-center w-28 items-center rounded:lg" >
                            <p className="font-bold text-orange-400 my-auto fromCenter">
                                Eventos
                            </p>
                        </a>
                    </Link>
                </div>
            </div>  
            {loggedIn ? <ProfileDropdown /> : (
                <div className='flex justify-center'>
                    <div className='flex justify-center'>
                        <Link
                            href='/login'>
                            <a className="h-full flex justify-center w-28 items-center rounded:lg" >
                                <p className="font-bold text-orange-400 my-auto fromCenter">
                                    Iniciar sesión
                                </p>
                            </a>
                        </Link>
                    </div>
                    <div className='flex justify-center'>
                        <Link
                            href='/register'>
                            <a className="h-full flex justify-center w-28 items-center rounded:lg" >
                                <p className="font-bold text-orange-400 my-auto fromCenter">
                                    Registrar
                                </p>
                            </a>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
