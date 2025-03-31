import AboutHero from '@/components/about/AboutHero'
import Safety from "@/components/about/Safety"

export const metadata = {
  title: 'About | Expertise in Semiconductor Industry, BMS & ESS Solutions',
  description:
    'Neutron Controls traces its roots back to our proud Canadian heritage and a deep understanding of the semiconductor industry.',
  keywords: [
    'ISO9001 certification',
    'ISO14001 certification',
    'BUILT IN THE USA',
    'DESIGNED IN CANADA',
    'Semiconductor',
    'BESS',
    'BMS and ESS solutions',
  ],
  openGraph: {
    title: 'About | Expertise in Semiconductor Industry, BMS & ESS Solutions',
    description:
      'Neutron Controls traces its roots back to our proud Canadian heritage and a deep understanding of the semiconductor industry.',
    url: 'https://www.neutroncontrols.com/about',
    images: [
      {
        url: 'https://www.neutroncontrols.com/meta/general.jpg',
        alt: 'Neutron Controls Battery Management System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Expertise in Semiconductor Industry, BMS & ESS Solutions',
    description:
      'Neutron Controls traces its roots back to our proud Canadian heritage and a deep understanding of the semiconductor industry.',
    images: ['https://www.neutroncontrols.com/meta/general.jpg'],
  },
  alternates: {
    canonical: 'https://www.neutroncontrols.com/about',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Example() {
  return (
    <main className=" relative h-full ">
        <AboutHero />
        <Safety />
    </main>
  )
}