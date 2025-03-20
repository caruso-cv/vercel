import Partners from '@/components/Partners'
import Slider from '@/components/Slider'
import Hero from '@/components/HeroNew'
import VerticalSlider from '@/components/VerticalSlider'
import DigitalBackground from '@/components/DigitalBackground'
import NoiseOverlay from '@/components/NoiseOverlay'
import MobileHero from '@/components/MobileHero'

export default function Home() {
  return (
    <div>
      <main className='pb-24'>
        <div className="lg:h-full relative overflow-x-hidden bg-[#090A0B]">
            <Hero />
            <MobileHero />
        </div>
        <div className="pt-24 lg:py-24 overflow-x-hidden relative bg-white">
          <div className='relative z-30'>
            <Partners/>
            <Slider/>
          </div>
          <DigitalBackground />
          <NoiseOverlay />
        </div>
        <div>
          <VerticalSlider/>
        </div>
      </main>
    </div>
  );
}
