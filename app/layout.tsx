
import { ReactNode } from "react";
import AuthProvider from "./provider/AuthProvider";
import './globals.css'
import Navbar from "./components/Navbar";
export const metadata = {
  title : "next app"
}
export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html>
      <body >
      <AuthProvider>
        <Navbar/>
        {children}
        </AuthProvider>
      </body>
    </html>
    )
}