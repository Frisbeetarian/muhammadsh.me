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
    <footer className="flex flex-col justify-center items-start max-w-4xl 2xl:max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />

      <NowPlaying />
      {/*<Tracks />*/}

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
          {/*<Link*/}
          {/*  href="/newsletter"*/}
          {/*  className="text-gray-500 hover:text-gray-600 transition"*/}
          {/*>*/}
          {/*  Newsletter*/}
          {/*</Link>*/}
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/Frisbeetarian">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCBQifVrmfoQS3RqBx70tw7A">
            YouTube
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          {/*<Link*/}
          {/*  href="/uses"*/}
          {/*  className="text-gray-500 hover:text-gray-600 transition"*/}
          {/*>*/}
          {/*  Uses*/}
          {/*</Link>*/}
          {/*<Link*/}
          {/*  href="/guestbook"*/}
          {/*  className="text-gray-500 hover:text-gray-600 transition"*/}
          {/*>*/}
          {/*  Guestbook*/}
          {/*</Link>*/}
          {/*<Link*/}
          {/*  href="/snippets"*/}
          {/*  className="text-gray-500 hover:text-gray-600 transition"*/}
          {/*>*/}
          {/*  Snippets*/}
          {/*</Link>*/}
          {/*<Link*/}
          {/*  href="/tweets"*/}
          {/*  className="text-gray-500 hover:text-gray-600 transition"*/}
          {/*>*/}
          {/*  Tweets*/}
          {/*</Link>*/}
        </div>
      </div>
    </footer>
  );
}
