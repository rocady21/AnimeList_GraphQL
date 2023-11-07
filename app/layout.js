"use client"
import { Inter } from 'next/font/google'
import './globals.css'

import { ApolloProvider } from '@apollo/client'
import client from '@/config/apollo'
import NavBar from './components/NavBar'
import AnimeState from './context/animes/AnimeState'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={inter.className}>{
        <AnimeState>

          <ApolloProvider client={client}>
            <div className='w-full max-h-screen flex flex-col'>
              <NavBar/>
              {children}
            </div>
          </ApolloProvider>

        </AnimeState>
      }</body>
    </html>
  )
}
