// Layout.jsx
import '@/styles/tailwind.css'
import '@/styles/tailwind.css'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import Nav from '@/components/nav/Nav'
import BackgroundHero from '@/components/BackgroundHero'
import Footer from '@/components/Footer'
import CookieBanner from '../components/CookieBanner'
import Head from 'next/head'
import Script from 'next/script'

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
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <body>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-ZZQ44F7P76"
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZZQ44F7P76');
            `}
          </Script>
          <div className="bg-[#090A0B]">
            <Nav/>
            <BackgroundHero/>
            <CookieBanner />
          </div>
            {children}
          <Footer/>
      </body>
    </html>
  )
}