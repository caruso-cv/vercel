import {
  LightBulbIcon,
  UserGroupIcon,
  GlobeAmericasIcon,
} from '@heroicons/react/20/solid'

const cards = [
  {
    name: 'PIONEERING EXPERTISE',
    description: 'Drawing on our capabilities in energy control, battery management systems, integrated safety-critical design, and advanced design solutions, we forged a path of excellence.',
    icon: LightBulbIcon,
  },
  {
    name: 'OUR TEAM',
    description: 'At Neutron Controls, we bring together experienced minds and emerging superstars. This blend of expertise and fresh perspectives fosters a culture of collaboration—one that pushes the boundaries of what’s possible.',
    icon: UserGroupIcon,
  },
  {
    name: 'DESIGNED IN CANADA, BUILT IN THE USA',
    description: 'Through strong ties with the global semiconductor industry, Neutron Controls pairs Canadian ingenuity with US production to deliver uncompromising quality and reliability.',
    icon: GlobeAmericasIcon,
  },
]

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-[#090A0B] py-48 lg:pt-64 z-30">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      {/* Gradient overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none z-0" />

      {/* Existing gradient shapes */}
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#4662ff] to-[#776fff] opacity-20"
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#4652ff] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-8xl px-6 2xl:px-0">
        <div className="mx-auto max-w-3xl 2xl:max-w-3xl lg:mx-0">
          <h1 className="font-bold text-white text-5xl sm:text-6xl uppercase">Our Story</h1>
          <p className="mt-8 text-pretty text-2xl font-medium text-gray-300 ">
            Neutron Controls traces its roots back to our proud Canadian heritage and a deep understanding of the semiconductor industry.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <card.icon aria-hidden="true" className="h-7 w-5 flex-none text-indigo-400" />
              <div className="text-[1.10rem] leading-[1.65rem]">
                <p className="font-semibold text-white">{card.name}</p>
                <p className="mt-2 text-gray-300 ">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}