import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

import { useRouter } from 'next/router';

function register() {

    const [ username , setUsername ] = useState('')
    const [ email    , setEmail    ] = useState('')
    const [ password , setPassword ] = useState('')
    const [ passConf , setPassConf ] = useState('')

    const router = useRouter()

    const handleSubmit = async (e) => {

        e.preventDefault()

        let valid = 'a-zA-Z0-9_'

        let user = new RegExp('[' + valid + ']{8,}')
        let user1 = new RegExp('[' + valid + ']{0,7}')
        let user2 = new RegExp('[^' + valid + ']{8,}')

        // Al menos 8 letras
        const weakRegex = /^.{8,}$/
        const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?¿&_-])[A-Za-z\d@$!%*?¿&_-]{8,}$/;

        let mailRegex = new RegExp(valid + '{+}' + "@" + valid + '{+}' + '.' + valid + '{+}')

        if ( username.match(user) && password === passConf && password !== '' ) {
            await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            })
            .then(response => {
                if ( response.ok ) 
                    return response.json()
                throw new Error();
            })
            .then(js => {
                console.log(js)
                const { ok } = js;
                if ( ok ) {
                    router.push('/')
                }
            })
            .catch(error => {
                toast.error("Ya existe un usuario con ese nombre en el sistema.")
            })
        } else {
            // check fail 
            if ( username.match(user1) ) {
                toast.error("El nombre de usuario debe tener 8 caracteres mínimos")
            }

            if ( username.match(user2) ) {
                toast.error("El nombre de usuario sólo puede contener caracteres alfanuméricos y '_'")
            }
        }
    }

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div><Toaster/></div>
            <form 
                className='flex justify-center flex-col bg-gray-700 m-28 text-orange-400 rounded-xl'
                onSubmit={handleSubmit}>
                <div className='p-8'>
                    <h1 className='font-bold text-xl text-center mb-4'>Registrarse</h1>
                    <div className='flex flex-col justify-center'>
                        <label>
                            <h1 className='my-2'>Nombre de usuario</h1>
                            <input 
                                type="text" 
                                placeholder="Usuario"
                                className='bg-gray-600 p-2 rounded-md w-full' 
                                onChange={(e) => {setUsername(e.target.value)}} 
                            />
                        </label>
                        <label>
                            <h1 className='my-2'>E-mail</h1>
                            <input 
                                type="text"
                                placeholder="foo@bar.com" 
                                className='bg-gray-600 p-2 rounded-md w-full' 
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