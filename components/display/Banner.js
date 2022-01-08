import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import banner from '/public/content/banner.png'

function Banner() {

    const [time, setTime] = useState(Date.now())

    setInterval(() => { 
        setTime(Date.now())
    }, 1000)

    return (
        <div className='relative border-b-2 border-orange-400'>
            <Image className="absolute opacity-30" layout='responsive' src={banner}/>
            <div className='absolute top-0 right-0 flex justify-center items-center w-full h-full'>
                <div className='flex justify-between w-2/3 text-orange-400'>
                    <div className='text-4xl'>
                        Título evento
                    </div>
                    <div className='flex flex-col items-end'>
                        <p>
                            {new Date(time).toUTCString()}
                        </p>
                        <Link href="#">
                            <a className="transition duration-150 hover:bg-gray-700 inline-block border-2 border-orange-400 bg-gray-900 rounded-full px-3 py-1 font-semibold text-orange-400 m-1 self-end">
                                Empezar
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
