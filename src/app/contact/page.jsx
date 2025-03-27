import Contact from "@/components/contact/Contact";

export const metadata = {
  title: 'Contact Us',
  description: 'Our team is here to help with any questions you might have. Feel free to reach out, we look forward to connecting with you.',
};

export default function Home() {

  return (
    <main>
      <Contact />
    </main>
  )
}