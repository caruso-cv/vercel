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
    <div className="relative isolate overflow-hidden bg-[#090A0B] py-40 sm:py-72 z-30">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
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
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2 className="text-5xl font-bold text-white sm:text-6xl uppercase">Our Story</h2>
          <p className="mt-8 text-pretty text-xl font-medium text-gray-300 sm:text-2xl/8">
          Neutron Controls traces its roots back to our proud Canadian heritage and a deep understanding of the semiconductor industry.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <card.icon aria-hidden="true" className="h-7 w-5 flex-none text-indigo-400" />
              <div className="text-xl ">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-6 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
