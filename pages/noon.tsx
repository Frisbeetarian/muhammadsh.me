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
              Noon's internals
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              The Noon backend is built using Node.js and Express for the
              server-side runtime environment and routing. It is mostly (mostly
              because I took the opportunity to learn Typescript in this project
              and incrementally refactoring js modules into ts) written in
              TypeScript for added type safety and maintainability. It utilizes
              Apollo Client for handling GraphQL queries and mutations, allowing
              for efficient and flexible data retrieval and manipulation.
              Real-time functionality is implemented using Socket.io for
              bi-directional communication between the client and server. Redis
              is used as a caching layer to improve performance, while
              PostgreSQL is used as the primary relational database for storing
              user data. Neo4j is utilized for handling profile relationships,
              allowing for easy querying and traversal of complex social graphs.
              Elasticsearch is integrated for fast and powerful search
              capabilities. All of these technologies work together to provide a
              robust and scalable backend for handling a variety of features
              such as user management, social networking, and search
              functionality.
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              The Noon backend is designed as a set of microservices, rather
              than a monolithic application. The microservices communicate with
              each other using RabbitMQ as a message broker, utilizing the AMQP
              protocol for efficient and reliable message passing. Each
              microservice is responsible for a specific set of functionality,
              allowing for increased scalability and maintainability. The
              microservices include:
            </p>
            <ul className="mb-4 text-gray-600 dark:text-gray-400 ml-4">
              <li className="mb-4">
                <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
                  The Media microservice
                </h4>

                <p className="ml-4">
                  This service is written in Javascript and is responsible for
                  handling all media-related functionality such as image and
                  audio uploads and processing.
                </p>
              </li>

              <li className="mb-4">
                <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
                  The Search microservice
                </h4>
                <p className="ml-4">
                  This service is built using Elasticsearch and is responsible
                  for providing powerful search functionality for the
                  application.
                </p>
              </li>

              <li className="mb-4">
                <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
                  The Relay microservice
                </h4>

                <p className="ml-4">
                  This service is built using Javascript and is responsible for
                  relaying emails and notifications to the users of Noon.
                </p>
              </li>
              <li></li>
            </ul>
            <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
              Noon's client
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              The client platform serving this backend is written in TypeScript
              using React and Next.js as the framework. It utilizes Redux
              Toolkit for state management, allowing for a predictable and
              centralized state management. Real-time functionality is
              implemented using Socket.io for bi-directional communication
              between the client and server. The client platform uses GraphQL
              and Apollo Client to handle queries and mutations, providing
              efficient and flexible data retrieval and manipulation. GraphQL
              Codegen is used to automatically generate the GraphQL syntax,
              reducing the need for manual type definitions and improving
              developer productivity. The design of the platform is built with
              Chakra UI, a popular library for building accessible, modular, and
              customizable UI components. For styling, it uses TailwindCSS, a
              utility-first CSS framework for rapidly building custom designs
              with a consistent look and feel. All these technologies are used
              together to create a high-performance and user-friendly client
              platform that seamlessly communicates with the backend
              microservices, providing a smooth and responsive user experience.
            </p>
            {/*<BlogPost*/}
            {/*  title="Rust Is The Future of JavaScript Infrastructure"*/}
            {/*  excerpt="Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?"*/}
            {/*  slug="rust"*/}
            {/*/>*/}
            {/*<BlogPost*/}
            {/*  title="Everything I Know About Style Guides, Design Systems, and Component Libraries"*/}
            {/*  excerpt="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."*/}
            {/*  slug="style-guides-component-libraries-design-systems"*/}
            {/*/>*/}
            {/*<BlogPost*/}
            {/*  title="Building a Design System Monorepo with Turborepo"*/}
            {/*  excerpt="Manage multiple packages with a shared build, test, and release process using Turborepo, Changesets, Storybook, and more."*/}
            {/*  slug="turborepo-design-system-monorepo"*/}
            {/*/>*/}
          </>
        )}
        {/*<Suspense fallback={null}>*/}
        {/*  <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">*/}
        {/*    All Posts*/}
        {/*  </h3>*/}
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
        {/*</Suspense>*/}
      </div>
    </Container>
  );
}

// export async function getStaticProps({ preview = false }) {
//   const posts: Post[] = await getClient(preview).fetch(indexQuery);
//
//   return { props: { posts } };
// }
