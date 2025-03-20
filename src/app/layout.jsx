import '@/styles/tailwind.css'
import { Montserrat } from 'next/font/google'
import Nav from '@/components/nav/Nav'
import BackgroundHero from '@/components/BackgroundHero'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import Script from 'next/script'
import { SpeedInsights } from "@vercel/speed-insights/next"

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  style: ['normal','italic'],
  variable: '--font-montserrat',
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
    <html lang="en" className={`${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5C24BMW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* Google Tag Manager Script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5C24BMW');
          `}
        </Script>

        {/* Google Analytics Script with Consent Mode initialization */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZZQ44F7P76"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            // Initialize Consent Mode with default settings (denied)
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied'
            });
            gtag('js', new Date());
            gtag('config', 'G-ZZQ44F7P76');
          `}
        </Script>

        <div className="bg-[#090A0B]">
          <Nav />
          <BackgroundHero />
          <CookieBanner />
        </div>
        {children}
        <Footer />
        <SpeedInsights/>
      </body>
    </html>
  )
}