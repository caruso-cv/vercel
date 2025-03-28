import Partners from '@/components/partners/Partners'
import Slider from '@/components/slider/SliderWrapper'
import Hero from '@/components/hero/Hero'
import VerticalSlider from '@/components/VerticalSlider'
import DigitalBackground from '@/components/backgrounds/DigitalBackground'
import NoiseOverlay from '@/components/backgrounds/NoiseOverlay'
import HeroMobile from '@/components/hero/HeroMobile'
import JsonLdProduct from '@/components/hero/JsonLdProduct'

export const metadata = {
  title: 'Neutron Controls | Advanced BMS & Energy Control Solutions',
  description:
    'Neutron Controls delivers advanced BMS controllers and energy management solutions for ESS/BESS installations, prioritizing efficiency, safety, and sustainability in industrial automation.',
  keywords: [
    'Neutron Controls',
    'Battery Management Systems',
    'ESS',
    'BMS Testing',
    'Energy Storage',
    'Industrial Automation',
    'Battery Factory Testing',
    'BESS controls for energy storage',
    'Battery point tester',
    'Battery algorithm simulator',
    'BESS controller',
    'ESS controller',
    'BMS controller',
    'Energy storage controller',
    'Battery management system',
    'BMS',
    'ESS',
    'BESS',
  ],
  openGraph: {
    title: 'Neutron Controls – Energy Storage Systems & Battery Testing',
    description:
      'Explore cutting-edge solutions for energy storage, battery production, and embedded control systems.',
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
    title: 'Neutron Controls – Contain Your Energy, Test Your Limits',
    description:
      'Advanced BMS and battery testing solutions for high-performance industrial applications.',
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
          <div className="hidden lg:block">
            <Hero />
          </div>
          <div className="lg:hidden">
            <HeroMobile />
          </div>
        </div>
        <div className="lg:pt-24 lg:py-24 pt-4 overflow-x-hidden relative bg-white">
          <div className='relative z-30 '>
            <div className='hidden lg:block'>
              <Partners />
            </div>
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