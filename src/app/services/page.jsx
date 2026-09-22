import Services from "@/components/services/Services";

export const metadata = {
  title: 'Services | Advanced Battery Management Design Services',
  description:
    'Automotive BMS, from prototype to production – Advanced battery management design services built for efficiency, safety, and seamless integration—optimizing performance and reliability.',
  keywords: [
    'BMS Controls',
    'Infineon’s AURIX™-MCUs',
    'BMS Interface Testing',
    'BMS',
    'Infineon Preferred Design House',
    'ISO 26262 Functional Safety',
  ],
  openGraph: {
    title: 'Services | Advanced Battery Management Design Services',
    description:
      'Automotive BMS, from prototype to production – Advanced battery management design services built for efficiency, safety, and seamless integration—optimizing performance and reliability.',
    url: 'https://www.neutroncontrols.com/services',
    images: [
      {
        url: 'https://www.neutroncontrols.com/meta/general.jpg',
        alt: 'Neutron Controls Battery Management System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Advanced Battery Management Design Services',
    description:
      'Automotive BMS, from prototype to production – Advanced battery management design services built for efficiency, safety, and seamless integration—optimizing performance and reliability.',
    images: ['https://www.neutroncontrols.com/meta/general.jpg'],
  },
  alternates: {
    canonical: 'https://www.neutroncontrols.com/services',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Home() {

  return (
    <main>
      <Services />
    </main>
  )
}