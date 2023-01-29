import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import cn from 'classnames';

import Footer from 'components/Footer';
import MobileMenu from 'components/MobileMenu';
import ThemeChanger from './ThemeChanger';
// import ThemeChanger from './ThemeChanger';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink
      href={href}
      className={cn(
        isActive ? 'font-semibold ' : 'font-normal text-th-primary-medium',
        'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
      )}
    >
      <span className="capsize">{text}</span>
    </NextLink>
  );
}

const themes = [{ name: 'light' }, { name: 'dark' }, { name: 'pink' }];

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title:
      'Muhammad Sulayman Haydar – Developer, visual/audio artist, creator.',
    description: `Front-end developer, Back-end developer, Artist.`,
    image: 'https://muhammad.me/static/images/muhammad-banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-th-background text-th-primary-dark rajdhani-light">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://muhammadsh.io${router.asPath}`}
        />
        <link rel="canonical" href={`https://muhammad.me${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Muhammad Sulayman Haydar" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <div className="flex flex-col items-start justify-start max-w-4xl 2xl:max-w-4xl mx-auto mb-10 w-5/6  ">
        <nav className="flex items-center justify-between w-full relative border-gray-200 dark:border-gray-700  pt-8 pb-4 sm:pb-16 bg-opacity-60 ">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <div className="ml-[-0.60rem]">
            {/*<div className="">*/}
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/noon" text="Noon" />
            <NavItem href="/visuals" text="Visuals" />
            <NavItem href="/audio" text="Audio" />
          </div>

          <ThemeChanger />
        </nav>
      </div>

      <main
        id="skip"
        className="flex flex-col justify-center items-center md:px-8 bg-th-background"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
