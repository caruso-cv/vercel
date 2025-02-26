import Partners from '@/components/Partners'
import Slider from '@/components/Slider'
import Hero from '@/components/Hero'
import SideScroll from '@/components/SideScroll'
import VerticalSlider from '@/components/VerticalSlider'
import DigitalBackground from '@/components/DigitalBackground'
import NoiseOverlay from '@/components/NoiseOverlay'
import InfineonSection from '@/components/services/InfineonSection';

export default function Home() {
  return (
    <div>
      <main>
        <div className="pb-96 relative overflow-x-hidden bg-[#090A0B]">
            <Hero/>
            <SideScroll/>
        </div>
        <div className="py-24 overflow-x-hidden relative bg-white">
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
