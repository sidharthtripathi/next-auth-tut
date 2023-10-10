
"use client"
import Link from "next/link"
import { useSession } from "next-auth/react"
import SignIn from "./SignIn"
import SignOut from "./SignOut"
function Navbar() {
	const {data,status} = useSession()

	return (
		<nav className="bg-blue-900 text-white font-bold text-xl space-x-3 p-2 flex items-center">
			<Link href='/'>Home</Link>
			<Link href='/user'>user</Link>
			
			{
				status === 'loading' ? <span>loading... </span> : status==='authenticated' ? <div className="space-x-1">{data.user!.name} <SignOut/></div> : <SignIn/>
			}

			
		</nav>
	)
}

export default Navbar