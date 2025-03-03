
import InfineonSection from '@/components/services/InfineonSection';
import Elev8tr from "@/components/solutions/Elev8tr";

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