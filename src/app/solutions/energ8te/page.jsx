import Energ8te from "@/components/solutions/energ8te/Energ8te";
import JsonLdProduct from '@/components/solutions/energ8te/JsonLdProduct';

export const metadata = {
  title: 'ENERG8TE™ BMS Controller for BESS/ESS Installations',
  description:
    'ENERG8TE™ is an advanced BMS controller designed to optimize performance, reliability, and energy efficiency in Battery Energy Storage System (BESS) and ESS installations.',
  openGraph: {
    title: 'ENERG8TE™ BMS Controller for BESS/ESS Installations',
    description:
      'ENERG8TE™ is an advanced BMS controller designed to optimize performance, reliability, and energy efficiency in Battery Energy Storage System (BESS) and ESS installations.',
    url: 'https://www.neutroncontrols.com/solutions/energ8te',
    images: [
      {
        url: 'https://www.neutroncontrols.com/meta/energ8te.jpg', 
        alt: 'ELEV8TR™ product photo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENERG8TE™ BMS Controller for BESS/ESS Installations',
    description:
      'ENERG8TE™ is an advanced BMS controller designed to optimize performance, reliability, and energy efficiency in Battery Energy Storage System (BESS) and ESS installations.',
    images: ['https://www.neutroncontrols.com/meta/energ8te.jpg'], 
  },
};

export default function Home() {

  return (

    <>
      <JsonLdProduct />
      <div className='bg-white relative'>
        <main>
          <Energ8te />
        </main>
      </div>
    </>
  )
}