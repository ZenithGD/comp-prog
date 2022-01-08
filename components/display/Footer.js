import React from 'react'
import Image from 'next/image'

import facebook from '/public/rrss/facebook.png'
import instagram from '/public/rrss/instagram.png'
import twitter from '/public/rrss/twitter.png'

function Footer() {
    return (
        <div className='border-t-2 border-orange-400'>
            <div className='filter drop-shadow-md bg-gray-800 flex flex-col h-48 w-full p-8'>
                <p className='m-0 text-center text-orange-400'>Copyright &copy; Your Website 2021</p>
                <div className='flex justify-center gap-2'>
                    <a href="https://es-es.facebook.com"><Image src={facebook} width={40} height={40} /></a>
                    <a href="https://www.instagram.com"><Image src={instagram} width={40} height={40} /></a>
                    <a href="https://twitter.com/?lang=es"><Image src={twitter} width={40} height={40} /></a>
                </div>
            </div>

        </div>
    )
}

export default Footer
