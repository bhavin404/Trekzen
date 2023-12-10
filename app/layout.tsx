import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Trekzen',
  description: 'A travel website where you can book your treks and places you want to visit.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        <Navbar/>
        <main className='relative overflow-hidden'>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
