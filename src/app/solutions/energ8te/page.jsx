
import InfineonSection from '@/components/solutions/Energ8teBullet';
import Elev8tr from "@/components/solutions/Energ8te";

export default function Home() {

  return (
    <div className='bg-white relative'>
      <main>
        <Elev8tr />
      </main>
      <div className="overflow-x-hidden relative bg-[#090A0B]">
        <InfineonSection />
      </div>
    </div>
  )
}