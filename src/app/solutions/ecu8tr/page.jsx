import InfineonSection from '@/components/solutions/Ecu8trBullet';
import Ecu8tr from "@/components/solutions/Ecu8tr"; 

export default function Home() {

  return (
    <div className='bg-white relative'>
      <main>
        <Ecu8tr />
      </main>
      <div className="overflow-x-hidden relative bg-[#090A0B]">
        <InfineonSection />
      </div>
    </div>
  )
}
