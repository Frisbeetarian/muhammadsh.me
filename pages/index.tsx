import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import VideoCard from '../components/VideoCard';

export default function Home() {
  return (
    // <Suspense fallback={null}>
    <Container>
      <div className="flex flex-col items-start justify-start max-w-4xl 2xl:max-w-4xl mx-auto mb-16 w-full px-8 md:px-0 ">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col md:pr-8 ">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-th-primary-dark">
              Muhammad Sulayman Haydar
            </h1>

            <h2 className="text-th-primary-dark mb-4">
              Full stack developer, visual/audio creator.
            </h2>

            <p className="text-th-primary-dark mb-8 md:mb-16">
              Full stack developer with over 12 years of experience building
              websites, services and platforms. Constantly tinkering and
              prototyping with new methodologies, technologies, languages and
              libraries. Able to architect and engineer the whole development
              stack from the front facing clients, to the APIs, the back-end
              services to the provisioning and configuring of the network
              infrastructure. I rely almost entirely on open source and modern
              resources and libraries. The experience I gained handling active
              back-end services used by hundreds of thousands of active users
              enables me to architect and build back-end services which are
              wholly extensible and can scale. My freelance work over the years
              has enabled me to tinker with a vast array of different tools and
              libraries which I used to build everything from simple front
              facing portfolio sites to complex, real-time and entirely reactive
              and state driven client platforms.
            </p>
          </div>
        </div>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-2 md:mb-4 mt-16 text-th-primary-dark">
          Visualizations in Unreal Engine
        </h3>

        <p className="text-th-primary-dark mb-4">
          Visuals I work on in my spare time.
        </p>

        <VideoCard
          index="01"
          href="https://www.youtube.com/watch?v=aohVNLJSZMs&feature=youtu.be"
          length="02:01"
          title=" The Mysterious Vanishing of Electra (Fan made music video)"
        />

        <VideoCard
          index="02"
          href="https://www.youtube.com/watch?v=Ayr78UM0TIs"
          length="01:13"
          title="تعغ"
        />

        <VideoCard
          index="03"
          href="https://youtu.be/xcB8BbcAbhA"
          length="03:00"
          title="Say the Name (Fan made music video)"
        />

        <VideoCard
          index="04"
          href="https://www.youtube.com/watch?v=LT3i2f6IaCc"
          length="04:45"
          title="Toni Geitani - Laysa Kul Shay' Yashrab Al Ma' [Official Video]"
        />

        <div className="w-full flex justify-end">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/playlist?list=PLxVxxL4yicyb41Ug_wFyrzr7lWgazshj4"
            className="flex items-center mt-8 text-th-primary-dark leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            Watch all visualizations
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </div>
        <span className="h-8" />
      </div>
    </Container>
    // </Suspense>
  );
}
