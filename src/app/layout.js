import './globals.css'
import { Zilla_Slab } from 'next/font/google'

const zilla_slab = Zilla_Slab({ 
  subsets: ['latin'],
  weight: ['300','700']
})

export const metadata = {
  title: 'IEEE - Robotics and Automation Society',
  description: 'Official IEEE-RAS Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className={zilla_slab.className}>
        {children}
      </body>
    </html>
  )
}
