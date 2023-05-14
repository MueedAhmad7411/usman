
import { Inter } from 'next/font/google';
import './global.css';

const inter = Inter ({ subsets: ['latin'] })

export const metadata = {
  title: 'usman portfolio',
  description: 'This is the personal website of usman',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
