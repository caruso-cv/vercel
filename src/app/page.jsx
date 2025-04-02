import Partners from '@/components/partners/Partners'
import Slider from '@/components/slider/Slider'
import Hero from '@/components/hero/Hero'
import VerticalSlider from '@/components/slider/VerticalSlider'
import DigitalBackground from '@/components/backgrounds/DigitalBackground'
import NoiseOverlay from '@/components/backgrounds/NoiseOverlay'
import JsonLdProduct from '@/components/hero/JsonLdProduct'

export const metadata = {
  title: 'Neutron Controls | Advanced BMS & Energy Control Solutions',
  description:
    'Neutron Controls delivers advanced BMS controllers and energy management solutions for ESS/BESS installations, prioritizing efficiency, safety, and sustainability in industrial automation.',
    keywords: [
      'Battery Management Systems (BMS)',
      'Battery Energy Storage Systems (BESS)',
      'Battery Factory Line Testers',
      'ESS Controllers',
      'Industrial Battery Testing Solutions',
      'Automotive Battery Quality Assurance'
    ],
  openGraph: {
    title: 'Neutron Controls | Advanced BMS & Energy Control Solutions',
    description:
      'BMS controllers and energy management solutions for ESS/BESS installations, prioritizing efficiency, safety, and sustainability in industrial automation.',
    url: 'https://www.neutroncontrols.com',
    images: [
      {
        url: 'https://www.neutroncontrols.com/meta/homepage.jpg',
        alt: 'Battery container and robot arm testing batteries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neutron Controls | Advanced BMS & Energy Control Solutions',
    description:
      'BMS controllers and energy management solutions for ESS/BESS installations, prioritizing efficiency, safety, and sustainability in industrial automation.',
    images: ['https://www.neutroncontrols.com/meta/homepage.jpg'],
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