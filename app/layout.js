"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import { ApolloProvider } from '@apollo/client'
import client from '@/config/apollo'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{
          <ApolloProvider client={client}>
            <div className='w-full max-h-screen flex flex-col'>
              <NavBar/>
              {children}
            </div>
          </ApolloProvider>
      }</body>
    </html>
  )
}
