import React, { useState } from 'react'

function register() {

    const [ username , setUsername ] = useState('')
    const [ email    , setEmail    ] = useState('')
    const [ password , setPassword ] = useState('')
    const [ passConf , setPassConf ] = useState('')

    const handleSubmit = async (e) => {
        if (password === passConf) {
            const result = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            }).then(data => data.json())
        }
    }

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <form 
                className='flex justify-center flex-col gap-4 bg-gray-700 m-28 text-orange-400 rounded-xl'
                onSubmit={handleSubmit}>
                <div className='p-8'>
                    <h1 className='font-bold text-xl text-center mb-6'>Registrarse</h1>
                    <div className='flex justify-center gap-8'>
                        <label>
                            <h1 className='my-2'>Nombre de usuario</h1>
                            <input 
                                type="text" 
                                placeholder="Usuario"
                                className='bg-gray-600 p-2 rounded-md' 
                                onChange={(e) => {setUsername(e.target.value)}} 
                            />
                        </label>
                        <label>
                            <h1 className='my-2'>E-mail</h1>
                            <input 
                                type="text"
                                placeholder="foo@bar.com" 
                                className='bg-gray-600 p-2 rounded-md' 
                                onChange={(e) => {setEmail(e.target.value)}} 
                            />
                        </label>
                    </div>
                    <div className='flex justify-center gap-8'>
                        <label>
                            <h1 className='my-2'>Contraseña</h1>
                            <input 
                                type="password"    
                                placeholder="Contraseña" 
                                className='bg-gray-600 p-2 rounded-md' 
                                onChange={(e) => {setPassword(e.target.value)}} 
                            />
                        </label>
                        <label>
                            <h1 className='my-2'>Confirmar contraseña</h1>
                            <input 
                                type="password"    
                                placeholder="Contraseña" 
                                className='bg-gray-600 p-2 rounded-md' 
                                onChange={(e) => {setPassConf(e.target.value)}} 
                            />
                        </label>
                    </div>
                </div>
                <button 
                    className="w-full self-center transition duration-200 bg-orange-400 hover:bg-orange-300 font-bold text-center text-gray-700 p-2 rounded-b-md" 
                    type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default register