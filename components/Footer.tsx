import Link from 'next/link';

import NowPlaying from 'components/NowPlaying';
import Tracks from 'components/TopTracks';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-4xl 2xl:max-w-4xl mx-auto w-full mb-8 w-full px-8 md:px-0">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />

      <NowPlaying />

      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Home
          </Link>
          <Link
            href="/noon"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Noon
          </Link>

          <Link
            href="/visuals"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Visuals
          </Link>

          <Link
            href="/audio"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Audio
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/Frisbeetarian">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCBQifVrmfoQS3RqBx70tw7A">
            YouTube
          </ExternalLink>

          <ExternalLink href="https://soundcloud.com/mohamad-hoho">
            Soundcloud
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4"></div>
      </div>
    </footer>
  );
}
