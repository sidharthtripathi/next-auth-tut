import React from 'react'
import { getServerSession } from 'next-auth'
 import { options } from './api/auth/[...nextauth]/options'
async function Home() {
    const session = await getServerSession(options)
    
    return (
        <div className='flex flex-col justify-around items-center h-96'>
        <h1 className='text-6xl font-bold text-center'>Welcome to <span className='text-blue-500'>NextJS !</span> example</h1>
        {session && <h2 className='text-3xl font-bold text-blue-500'>{session.user!.name}</h2>}
    </div>

    )
}

export default Home