"use client"
import './globals.css'
import ReduxProvider from '@/redux/provider'
import type { Metadata } from 'next'
import Header from './components/header/header'



export const metadata: Metadata = {
  title: 'Simple',
  description: 'Simple',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html  lang="en">
      <body  >
        <Header/>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
