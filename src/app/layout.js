import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav style={{width:"100%",
                    background:"teal",
                    fontSize:"50px",
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'}}>
        <Link style={{margin:"10px"}} href="/">Home</Link>
        <Link style={{margin:"10px"}} href="/posts">posts</Link>
        <Link style={{margin:"10px"}} href="/acticles">articles</Link>

          
      </nav>{children}</body>
      
    </html>
  )
}
