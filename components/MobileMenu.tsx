import cn from 'classnames';
import Link from 'next/link';
import useDelayedRender from 'use-delayed-render';
import { useState, useEffect } from 'react';
import styles from 'styles/mobile-menu.module.css';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            'flex flex-col  bg-th-background',
            isMenuRendered && styles.menuRendered
          )}
        >
          <li
            className="border-b border-gray-300 dark:border-gray-700  text-sm font-semibold"
            style={{ transitionDelay: '150ms' }}
          >
            <Link href="/" className="flex justify-between w-auto pb-4">
              <p>Home</p>
              <p>we were</p>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700  text-sm font-semibold"
            style={{ transitionDelay: '175ms' }}
          >
            <Link href="/noon" className="flex justify-between w-auto pb-4">
              <p>Noon</p>
              <p>never meant</p>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700  text-sm font-semibold"
            style={{ transitionDelay: '200ms' }}
          >
            <Link href="/visuals" className="flex justify-between w-auto pb-4">
              <p>Visuals</p>
              <p>to crawl in</p>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700  text-sm font-semibold"
            style={{ transitionDelay: '250ms' }}
          >
            <Link href="/audio" className="flex justify-between w-auto pb-4">
              <p>Audio</p>
              <p>for the bait</p>
            </Link>
          </li>

          <li
            className="  text-sm font-semibold"
            style={{ transitionDelay: '250ms' }}
          >
            <a
              className="flex justify-end w-auto pb-4"
              href="https://www.youtube.com/watch?v=A_UFawnJwOc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>we never will</p>
            </a>
          </li>

          {/*<li*/}
          {/*  className="  text-sm font-semibold"*/}
          {/*  style={{ transitionDelay: '250ms' }}*/}
          {/*>*/}
          {/*  <Link href="/audio" className="flex justify-end w-auto pb-4">*/}
          {/*    <p>for the bait</p>*/}
          {/*  </Link>*/}
          {/*</li>*/}
          <li
            className="  text-sm font-semibold"
            style={{ transitionDelay: '250ms' }}
          >
            {/*<Link href="/audio" className="flex justify-end w-auto pb-4">*/}
            {/*  <p>hey</p>*/}
            {/*</Link>*/}

            <a
              className="flex justify-end w-auto pb-4"
              href="https://www.youtube.com/watch?v=YjNytMN4QL0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>hey</p>
            </a>
          </li>

          <li
            className="  text-sm font-semibold"
            style={{ transitionDelay: '250ms' }}
          >
            {/*<Link href="/audio" className="flex justify-end w-auto pb-4">*/}
            {/*  <p>im not</p>*/}
            {/*</Link>*/}

            <a
              className="flex justify-end w-auto pb-4"
              href="https://www.youtube.com/watch?v=i0gn23i-DSA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>im not</p>
            </a>
          </li>

          <li
            className="  text-sm font-semibold"
            style={{ transitionDelay: '250ms' }}
          >
            <a
              className="flex justify-end w-auto pb-4"
              href="https://www.youtube.com/watch?v=01rfm5Hs8vc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>synthetica</p>
            </a>
          </li>

          {/*<li*/}
          {/*  className="border-b border-gray-300 dark:border-gray-700  text-sm font-semibold"*/}
          {/*  style={{ transitionDelay: '350ms' }}*/}
          {/*>*/}
          {/*  <Link href="/uses" className="flex w-auto pb-4">*/}
          {/*    Uses*/}
          {/*  </Link>*/}
          {/*</li>*/}
        </ul>
      )}
    </>
  );
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="h-5 w-5 absolute "
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="h-5 w-5 absolute "
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
