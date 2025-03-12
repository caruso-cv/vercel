// Layout.jsx
import '@/styles/tailwind.css'
import '@/styles/tailwind.css'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import Nav from '@/components/nav/Nav'
import BackgroundHero from '@/components/BackgroundHero'
import Footer from '@/components/Footer'
import CookieBanner from '../components/CookieBanner';
import Head from 'next/head';
import GTM from '@/components/GTM'

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

      <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5C24BMW');`,
          }}
        />

      </Head>
      <body>
          <div className="bg-[#090A0B]">
            <Nav/>
            <BackgroundHero/>
            <CookieBanner />
          </div>
            {children}
          <Footer/>
          <GTM />
      </body>
    </html>
  )
}