import { Quicksand } from 'next/font/google'
// import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const quicksand = Quicksand({subsets: ["latin"]})
// const poppins = Poppins({subsets: ["latin"], weight: ['100', '200', '300', '500']})

export const metadata = {
  title: 'Animeku',
  description: 'Animeku tidak sombong dan selalu berbagi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
