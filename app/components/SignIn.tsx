import React from 'react'
import Link from 'next/link'
function SignIn() {
	return (
		<Link href = '/api/auth/signin' className='bg-blue-600 hover:bg-blue-500 duration-500 rounded-md p-2 text-white font-bold '>Sign In</Link >
        
	)
}

export default SignIn