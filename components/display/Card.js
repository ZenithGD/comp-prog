import React from 'react'
import Link from 'next/link'

const Card = ({ title, desc, photo, tags, to }) => {
    return (
        <Link href={to}>
            <a className='filter drop-shadow-md bg-gray-800 rounded-lg w-full flex flex-col justify-center items-start transition transform duration-200 hover:scale-105'>
                <div className="w-full h-1/3">
                    <img src={photo} alt="" className='w-full my-auto h-full object-cover rounded-t-md' />
                </div>
                <div className="p-6 h-2/3">
                    <div className="w-full h-2/3">
                        <div className="font-bold text-orange-400 text-xl mb-4">{title}</div>
                        <p className="text-orange-300 text-base">
                            {desc}
                        </p>
                    </div>
                    <div className="w-full h-1/3">
                        {tags.map(
                            (tag) => (
                                <span className="inline-block border-2 border-orange-400 bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-orange-400 m-1  self-end">
                                    #{tag}
                                </span>
                            )
                        )}
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Card