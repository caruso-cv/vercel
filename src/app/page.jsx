import Partners from '@/components/partners/Partners'
import Slider from '@/components/slider/SliderWrapper'
import Hero from '@/components/hero/Hero'
import VerticalSlider from '@/components/VerticalSlider'
import DigitalBackground from '@/components/backgrounds/DigitalBackground'
import NoiseOverlay from '@/components/backgrounds/NoiseOverlay'
import HeroMobile from '@/components/hero/HeroMobile'

export const metadata = {
  title: 'Neutron Controls | Advanced BMS & Energy Control Solutions',
  description: 'Neutron Controls delivers advanced BMS controllers and energy management solutions for ESS/BESS installations, prioritizing efficiency, safety, and sustainability in industrial automation.',
};

export default function Home() {
  return (
    <div>
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
              <Partners/>
            </div>
            <Slider/>
          </div>
          <div className='hidden lg:block'>
            <DigitalBackground />
            <NoiseOverlay />
          </div>

        </div>
        <div>
          <VerticalSlider/>
        </div>
      </main>
    </div>
  );
}
