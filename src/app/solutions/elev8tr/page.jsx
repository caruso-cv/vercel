import Elev8tr from "@/components/solutions/Elev8tr";

export const metadata = {
  title: 'ELEV8TR™ Battery Algorithm Simulator for OEM BMS Development',
  description: 'ELEV8TR™ accelerates OEM Battery Management System development with real-time simulation, hardware interaction, and MATLAB/Simulink integration — ideal for testing advanced BMS algorithms.',
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