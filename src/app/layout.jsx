import '@/styles/tailwind.css'
import montserrat from '@/components/tools/Font';
import Nav from '@/components/nav/Nav'
import BackgroundHero from '@/components/backgrounds/BackgroundHero'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/tools/CookieBanner'
import GoogleTagManager from '@/components/tools/GoogleTagManager';
import { SpeedInsights } from "@vercel/speed-insights/next";
import ServiceWorkerRegister from "@/components/tools/ServiceWorkerRegister";

export const metadata = {
  title: {
    default: 'Neutron Controls',
  },
  description: 'Contain Your Energy, Test Your Limits.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <header className="bg-[#090A0B]">
          <Nav />
          <BackgroundHero />
          <CookieBanner />
        </header>
          <ServiceWorkerRegister />
          {children}
        <Footer />
        <SpeedInsights/>
        <GoogleTagManager />
      </body>
    </html>
  )
}