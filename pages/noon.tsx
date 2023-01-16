import { Suspense, useState } from 'react';

import Container from 'components/Container';
import BlogPost from 'components/BlogPost';
// import { indexQuery } from 'lib/queries';
// import { getClient } from 'lib/sanity-server';
// import { Post } from 'lib/types';

export default function Noon() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Container
      title="Noon – Open Source Communication Platform"
      description="Noon is a free, open source, secure communication platform. For anyone interested in having their own secure communication platform that internalizes all data and communication and does not rely on any third party service or package."
    >
      <div className="flex flex-col items-start justify-center max-w-4xl 2xl:max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Noon
        </h1>

        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`Noon is a free, open source, secure communication platform. For anyone interested in having their own secure communication platform that internalizes all data and communication and does not rely on any third party service or package.`}
        </p>

        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`In the following sections, I will attempt to explain the various parts
          that make up the platform.`}
        </p>

        {/*<div className="relative w-full mb-4">*/}
        {/*  <svg*/}
        {/*    className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*    fill="none"*/}
        {/*    viewBox="0 0 24 24"*/}
        {/*    stroke="currentColor"*/}
        {/*  >*/}
        {/*    <path*/}
        {/*      strokeLinecap="round"*/}
        {/*      strokeLinejoin="round"*/}
        {/*      strokeWidth={2}*/}
        {/*      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"*/}
        {/*    />*/}
        {/*  </svg>*/}
        {/*</div>*/}

        {!searchValue && (
          <>
            <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
              Back-end
            </h3>

            <BlogPost
              title="Rust Is The Future of JavaScript Infrastructure"
              excerpt="Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?"
              slug="rust"
            />

            <BlogPost
              title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
              excerpt="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
              slug="style-guides-component-libraries-design-systems"
            />

            <BlogPost
              title="Building a Design System Monorepo with Turborepo"
              excerpt="Manage multiple packages with a shared build, test, and release process using Turborepo, Changesets, Storybook, and more."
              slug="turborepo-design-system-monorepo"
            />
          </>
        )}
        <Suspense fallback={null}>
          <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            All Posts
          </h3>
          {/*{!filteredBlogPosts.length && (*/}
          {/*  <p className="mb-4 text-gray-600 dark:text-gray-400">*/}
          {/*    No posts found.*/}
          {/*  </p>*/}
          {/*)}*/}
          {/*{filteredBlogPosts.map((post) => (*/}
          {/*  <BlogPost*/}
          {/*    key={post.title}*/}
          {/*    slug={post.slug}*/}
          {/*    title={post.title}*/}
          {/*    excerpt={post.excerpt}*/}
          {/*  />*/}
          {/*))}*/}
        </Suspense>
      </div>
    </Container>
  );
}

// export async function getStaticProps({ preview = false }) {
//   const posts: Post[] = await getClient(preview).fetch(indexQuery);
//
//   return { props: { posts } };
// }
