import Contact from "@/components/contact/Contact";

export const metadata = {
  title: 'Contact Us| Get in touch',
  description:
    'Our team is here to help with any questions you might have. Feel free to reach out, we look forward to connecting with you.',
  openGraph: {
    title: 'Contact Us| Get in touch',
    description:
      'Our team is here to help with any questions you might have. Feel free to reach out, we look forward to connecting with you.',
    url: 'https://www.neutroncontrols.com/contact',
    images: [
      {
        url: 'https://www.neutroncontrols.com/meta/general.jpg',
        alt: 'Neutron Controls Battery Management System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us| Get in touch',
    description:
      'Our team is here to help with any questions you might have. Feel free to reach out, we look forward to connecting with you.',
    images: ['https://www.neutroncontrols.com/meta/general.jpg'],
  },
  alternates: {
    canonical: 'https://www.neutroncontrols.com/contact',
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
      <Contact />
    </main>
  )
}