// HomePage.jsx
import ModalTrigger from '@/components/careers/ModalTrigger';
import Faq from '@/components/careers/Faq';
import AnimatedImagesSection from '@/components/services/AnimatedImagesSection';

export default function HomePage() {
  return (
    <div>
      <div className="bg-[#090A0B] h-[10vh]" />
      <div className="bg-[#090A0B]">
        <div>
          <div className="overflow-hidden pt-12 sm:pt-32 relative z-30 mx-auto">
            <div className="mx-auto max-w-7xl 3xl:max-w-8xl px-6 lg:flex lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8 3xl:max-w-xl">
                  <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl 3xl:text-6xl">
                    Become a Neutron
                  </h2>
                  <p className="mt-6 text-xl 3xl:text-2xl text-white">
                    Join Neutron Controls and help shape extraordinary solutions.
                  </p>
                  <p className="mt-6 text-base 3xl:text-xl text-white">
                    Collaborate in a supportive environment using cutting-edge technologies.
                  </p>
                  <div className="mt-10 flex">
                    <ModalTrigger />
                  </div>
                </div>

                {/* Insert the client component for images */}
                <AnimatedImagesSection />
              </div>
            </div>
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
}