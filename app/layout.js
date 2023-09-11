import './globals.css'
import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({ subsets: ['latin'], variable: '--font-josefin_sans' })

export const metadata = {
  title: 'Mooviez',
  description: 'Get your latest blockbuster movies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} mx-12 my-8`}>{children}</body>
    </html>
  )
}
