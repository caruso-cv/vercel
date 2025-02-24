// Layout.jsx
import '@/styles/tailwind.css'
import '@/styles/tailwind.css'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import Nav from '@/components/nav/Nav'
import BackgroundHero from '@/components/BackgroundHero'
import Footer from '@/components/Footer'


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  style: ['normal','italic'],
  variable: '--font-montserrat',
  display: 'swap',
})

const geistMono = localFont({
  src: [
    { path: '../fonts/GeistMono-VariableFont_wght.ttf', weight: '400', style: 'normal' },
  ],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata = {
  title: {
    template: 'Neutron Controls',
    default: 'Neutron Controls',
  },
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className={`${montserrat.variable} ${geistMono.variable}`}>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
          <div className="bg-[#090A0B]">
            <Nav className='mt-4'/>
            <BackgroundHero/>
          </div>
          {children}
          <Footer/>
      </body>
    </html>
  )
}