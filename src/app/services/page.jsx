import Services from "@/components/services/Services";

export const metadata = {
  title: 'Services | Advanced BMS and ESS solutions',
  description:
    'Smarter Energy Solutions – Advanced BMS and ESS solutions designed for efficiency, safety, and seamless integration—optimizing performance and reliability.',
  keywords: [
    'BMS Controls',
    'Infineon’s AURIX™-MCUs',
    'BMS Interface Testing',
    'BESS',
    'ESS',
    'BMS',
    'Infineon Premier Design House',
    'BMS and ESS solutions',
  ],
  openGraph: {
    title: 'Services | Advanced BMS and ESS solutions',
    description:
      'Smarter Energy Solutions – Advanced BMS and ESS solutions designed for efficiency, safety, and seamless integration—optimizing performance and reliability.',
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
    title: 'Services | Advanced BMS and ESS solutions',
    description:
      'Smarter Energy Solutions – Advanced BMS and ESS solutions designed for efficiency, safety, and seamless integration—optimizing performance and reliability.',
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