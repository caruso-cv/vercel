import Partners from '@/components/partners/Partners'
import Slider from '@/components/slider/Slider'
import Hero from '@/components/hero/Hero'
import VerticalSlider from '@/components/slider/VerticalSlider'
import DigitalBackground from '@/components/backgrounds/DigitalBackground'
import NoiseOverlay from '@/components/backgrounds/NoiseOverlay'
import JsonLdProduct from '@/components/hero/JsonLdProduct'

export const metadata = {
  title: 'Neutron Controls',
  description:
    'Neutron Controls is an Infineon Preferred Design House delivering EV battery management ECU platforms on Infineon AURIX™ and battery factory line testers for production quality.',
    keywords: [
      'Battery Management Systems (BMS)',
      'EV Battery Management ECU',
      'Infineon Preferred Design House',
      'Infineon AURIX™',
      'Battery Factory Line Testers',
      'Automotive Battery Quality Assurance'
    ],
  openGraph: {
    title: 'Neutron Controls',
    description:
      'An Infineon Preferred Design House delivering EV battery management ECU platforms on Infineon AURIX™ and battery factory line testers for production quality.',
    url: 'https://www.neutroncontrols.com',
    images: [
      {
        url: 'https://www.neutroncontrols.com/meta/general.jpg',
        alt: 'Robot arm testing batteries on a production line',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neutron Controls',
    description:
      'An Infineon Preferred Design House delivering EV battery management ECU platforms on Infineon AURIX™ and battery factory line testers for production quality.',
    images: ['https://www.neutroncontrols.com/meta/general.jpg'],
  },
  alternates: {
    canonical: 'https://www.neutroncontrols.com',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Home() {
  return (
    <div>
      <JsonLdProduct />
      <main>
        <div className="lg:h-full relative overflow-x-hidden bg-[#090A0B]">
        <Hero />
        </div>
        <div className="pt-20 py-4 lg:py-24  overflow-x-hidden relative bg-white">
          <div className='relative z-30 '>
            <Partners />
            <Slider />
          </div>
          <div className='hidden lg:block'>
            <DigitalBackground />
            <NoiseOverlay />
          </div>
        </div>
        <div>
          <VerticalSlider />
        </div>
      </main>
    </div>
  );
}