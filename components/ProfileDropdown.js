import React from 'react'
import Link from 'next/link'
import Dropdown from './ui/Dropdown'

function ProfileDropdown() {
    return (
        <Dropdown btnComponent={<div >Perfil</div>}
                  buttonStyle="h-full flex justify-center w-28 items-center rounded:lg hover:bg-gray-300" 
                  listStyle="absolute flex flex-col mt-14 p-1 bg-white w-48 divide-y">
            <Link href="/problems">

                <a className="flex p-2 w-full rounded:lg hover:bg-gray-300" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Mi perfil
                </a>

            </Link>
            <Link href="/rankings">
                <a className="flex p-2 w-full rounded:lg hover:bg-gray-300" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Mis equipos
                </a>
            </Link>
            <Link className="flex p-2 w-full rounded:lg hover:bg-gray-300" href="/events">
                <a className="flex p-2 w-full rounded:lg hover:bg-gray-300" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                    </svg> 
                    Mis problemas
                </a>
            </Link>
            <Link className="flex p-2 w-full rounded:lg hover:bg-gray-300" href="/problems">
                <a className="flex p-2 w-full rounded:lg hover:bg-gray-300" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Estadísticas
                </a>
            </Link>
            <Link className="flex p-2 w-full rounded:lg hover:bg-gray-300" href="/problems">
                <a className="flex p-2 w-full rounded:lg hover:bg-gray-300" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Preferencias
                </a>
            </Link>
            <Link className="flex p-2 w-full rounded:lg hover:bg-gray-300" href="/problems">
                <a className="flex p-2 w-full rounded:lg hover:bg-gray-300" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Cerrar Sesión
                </a>
            </Link>
        </Dropdown>
    )
}

export default ProfileDropdown
