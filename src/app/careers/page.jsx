import Careers from "@/components/careers/Careers";

export const metadata = {
  title: 'Careers | Become a Neutron',
  description:
    'Join Neutron Controls and help shape extraordinary solutions. Collaborate in a supportive environment using cutting-edge technologies.',
  openGraph: {
    title: 'Careers | Become a Neutron',
    description:
      'Join Neutron Controls and help shape extraordinary solutions. Collaborate in a supportive environment using cutting-edge technologies.',
    url: 'https://www.neutroncontrols.com/careers',
    images: [
      {
        url: 'https://www.neutroncontrols.com/meta/general.jpg',
        alt: 'Neutron Controls Battery Management System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Become a Neutron',
    description:
      'Join Neutron Controls and help shape extraordinary solutions. Collaborate in a supportive environment using cutting-edge technologies.',
    images: ['https://www.neutroncontrols.com/meta/general.jpg'],
  },
  alternates: {
    canonical: 'https://www.neutroncontrols.com/careers',
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
      <Careers/>
    </main>
  )
}