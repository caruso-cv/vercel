import Partners from '@/components/Partners'
import Slider from '@/components/Slider'
import Hero from '@/components/HeroNew'
import VerticalSlider from '@/components/VerticalSlider'
import DigitalBackground from '@/components/DigitalBackground'
import NoiseOverlay from '@/components/NoiseOverlay'
import InfineonSection from '@/components/services/InfineonSection';
import MobileHero from '@/components/MobileHero';



export default function Home() {
  return (
    <div>
      <main>
        <div className="lg:h-full relative overflow-x-hidden bg-[#090A0B] 2xl:pb-24">
            <Hero />
            <MobileHero />
            {/* <SideScroll/> */}
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
      <div className="overflow-x-hidden relative">
        <InfineonSection/>
      </div>
    </div>
  );
}
