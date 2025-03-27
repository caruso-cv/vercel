import AboutHero from '@/components/about/AboutHero'
import Safety from "@/components/about/Safety"

export const metadata = {
  title: 'About Us',
  description: 'Neutron Controls traces its roots back to our proud Canadian heritage and a deep understanding of the semiconductor industry.',
};

export default function Example() {
  return (
    <main className=" relative h-full ">
        <AboutHero />
        <Safety />
    </main>
  )
}