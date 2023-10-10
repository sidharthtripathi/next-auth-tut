import Link from 'next/link'

function SignOut() {
	return (
		<Link href = '/api/auth/signout' className='bg-red-600 hover:bg-red-500 duration-500 rounded-md p-2 text-white font-bold '>Logout</Link >
        
	)
}

export default SignOut