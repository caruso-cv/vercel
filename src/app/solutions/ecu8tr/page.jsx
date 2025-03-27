import ECU8TR from "@/components/solutions/Ecu8tr";

export const metadata = {
  title: 'ECU8TR™ Battery Factory Point Tester',
  description: 'ECU8TR™ supports advanced BMS interfaces including Analog Devices ISO SPI, Infineon ISO UART, and Texas Instruments BMS devices — ensuring high-performance battery production testing.',
};

export default function Home() {

  return (
    <div className='bg-white relative'>
      <main>
        <ECU8TR />
      </main>
    </div>
  )
}