import Elev8tr from "@/components/solutions/Energ8te";

export const metadata = {
  title: 'ENERG8TE™ BMS Controller for BESS/ESS Installations',
  description: 'ENERG8TE™ is an advanced BMS controller designed to optimize performance, reliability, and energy efficiency in Battery Energy Storage System (BESS) and ESS installations.',
};

export default function Home() {

  return (
    <div className='bg-white relative'>
      <main>
        <Elev8tr />
      </main>
    </div>
  )
}