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