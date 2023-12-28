
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import './globals.css'
import { BootstrapClient, Modal, Navbar, Sidebar } from '@/components'
import { Providers } from '@/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manage X',
  description: 'Management App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-dark"}>
        <Providers>
        <div className='container-fluid'>
          <div className="row">
            <Navbar />
          </div>
          <div className='row'>
            
            {children}
          </div>
        </div>
        </Providers>
      <BootstrapClient />
      </body>
    </html>
  )
}
