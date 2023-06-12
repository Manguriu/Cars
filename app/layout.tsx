import './globals.css'
import {Navbar,Footer} from '@/components/Export'




export const metadata = {
  title: 'Something cool',
  description: 'Something cool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
