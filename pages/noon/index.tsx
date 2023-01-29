import { Suspense, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Container from 'components/Container';
import CodeBlock from '../../components/CodeBlock';
import NoonMobileNavigation from '../../components/NoonMobileNavigation';
import NoonNavigation from '../../components/NoonNavigation';
export default function Noon() {
  const [isMobile, setIsMobile] = useState(true);

  // const [searchValue, setSearchValue] = useState('');
  const internalsRef = useRef(null);
  const mediaRef = useRef(null);
  const searchRef = useRef(null);
  const relayRef = useRef(null);
  const RPCRef = useRef(null);
  const neo4jRef = useRef(null);
  const videoRef = useRef(null);
  const clientRef = useRef(null);
  const RTKRef = useRef(null);
  const videoBridgeRef = useRef(null);
  const dependenciesRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      if (window.innerWidth <= 1000) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });

    return () => {
      window.removeEventListener('resize', (e) => {
        if (window.innerWidth <= 1000) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      });
    };
  });

  return (
    <Container
      title="Noon – Open Source Communication Platform"
      description="Noon is a free, open source, secure communication platform. For anyone interested in having their own secure communication platform that internalizes all data and communication and does not rely on any third party service or package."
    >
      {isMobile && (
        <NoonMobileNavigation
          internalsRef={internalsRef}
          mediaRef={mediaRef}
          searchRef={searchRef}
          relayRef={relayRef}
          RPCRef={RPCRef}
          neo4jRef={neo4jRef}
          videoRef={videoRef}
          clientRef={clientRef}
          RTKRef={RTKRef}
          videoBridgeRef={videoBridgeRef}
          dependenciesRef={dependenciesRef}
        />
      )}

      <div className={isMobile ? 'flex flex-col' : 'flex flex-row'}>
        {!isMobile && (
          <NoonNavigation
            internalsRef={internalsRef}
            mediaRef={mediaRef}
            searchRef={searchRef}
            relayRef={relayRef}
            RPCRef={RPCRef}
            neo4jRef={neo4jRef}
            videoRef={videoRef}
            clientRef={clientRef}
            RTKRef={RTKRef}
            videoBridgeRef={videoBridgeRef}
            dependenciesRef={dependenciesRef}
          />
        )}

        <div className="flex flex-col items-start justify-start max-w-4xl 2xl:max-w-4xl mx-auto mb-16 w-5/6 md:pr-12">
          <div className=" flex flex-col items-start rajdhani-light text-th-primary-medium ">
            <h1 className="mb-4 text-3xl tracking-tight md:text-6xl">
              <a
                className="underline flex items-center justify-center transform hover:scale-[1.01] hover:ml-1 transition-all text-th-primary-dark"
                href="https://noon.tube"
                target="_blank"
                rel="noopener noreferrer"
              >
                Noon
                <Image
                  className="text-white bg-white rounded ml-3"
                  width="20"
                  height="20"
                  src="/external-link.svg"
                  alt="external link icon"
                />
              </a>
            </h1>

            <p className="mb-4">
              Noon is a free, open source, secure communication platform. For
              any one party or organization interested in having their own
              secure communication platform that internalizes all data and
              communication and does not rely on any closed/non-open-source
              third party service or package for any of its functionality. The
              primary development objective that I had in mind when building the
              platform was to see whether I could build all the systems required
              by hand, while learning Typescript/Graphql/React in the process.
              As for the systems that I'm too dumb to build or would require an
              inordinate amount of time to develop (like properly functioning
              video conferencing) I would solely rely on open source packages
              and libraries. From authentication, to the real time
              communication, to the presence system, etc... all would be built
              by me or would be provided by established open source
              packages/libraries. The only closed third parties that I would
              have to rely on of course would be the infrastructure providers.
              For this I went with Digital Ocean for the backend and its
              microservices and Vercel for the client.
            </p>

            <p className="mb-4">
              I started building the first version of Noon in 2018-2019 using
              Laravel and Vuejs. I stopped working on it due obligations with
              work, freelance projects and the country (I'm from Lebanon)
              absolutely going up in flames in late 2019. A severe economic
              crisis brought on by a ruling mafia that stole the Lebanese's
              savings. All my, and my parents savings were locked in the banks,
              unable to be retrieved. Running out of cash on hand and with my
              freelance projects all brought to a screeching halt due to that
              same liquidity crisis, I urgently had to find employment and a
              steady source of income and was lucky to be picked up by Myki in
              early 2020.
            </p>

            <p className="mb-4">
              I picked up work on it again early in 2022, this time deciding
              that since I was very much interested in learning
              <code>React/Graphql/Typescript</code>
              it would be a great opportunity to rebuild the platform using that
              stack. And since I, at that point had 2 years of experience
              maintaining and refactoring Myki's Nodejs backend which served
              hundreds of thousands of active users, I would be able to take the
              plunge and write the entire platform both backend and frontend
              with JS/TS and use all the accompanying ecosystem of open source
              packages.
            </p>

            <p className="mb-4">Why you no use manage services?</p>

            <p className="mb-4">
              Aside from the security considerations of offloading communication
              data to external providers whose servers are liable to get hacked,
              for the fun of it I guess? For the longest time as a developer I
              relied on abstraction on top of abstraction on top of helper
              modules on top of libraries. Sure, this made it possible for me to
              develop what was required of me to develop on time, but a feeling
              persisted that I wasnt really aware of what was going on.
            </p>

            <p className="mb-4">
              Noon provides the features that people have come to expect from
              traditional communication and messaging platforms. From
              private/group chat, to media sharing in conversations, to video
              conferencing, etc... It is very much still in a very early stage
              of development, about 60% to 65% done. All the vital components
              are now functional; from the communication, authentication,
              presence systems to the video conferencing. But still require a
              shitload of refactoring, enhancements, optimizations and
              debugging. The platform is live on
              <a
                className="underline text-white transform hover:scale-[1.01] hover:ml-1 transition-all text-th-primary-dark"
                href="https://noon.tube"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://noon.tube
              </a>
              .
            </p>

            <p className="mb-4">
              {`In the following sections, I will attempt to explain the various parts
          that make up the platform.`}
            </p>
          </div>

          {/*<div className="relative w-full mb-4">*/}
          {/*  <svg*/}
          {/*    className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-200"*/}
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
          {/*{!searchValue && (*/}
          {/*<>*/}
          <div
            ref={internalsRef}
            className="flex flex-col items-start rajdhani-light text-th-primary-medium "
          >
            <h3 className="mt-8 mb-4 text-2xl  tracking-tight text-black md:text-4xl dark:text-white">
              <a
                className="underline  flex items-center justify-center transform hover:scale-[1.01] hover:ml-1 transition-all text-th-primary-dark"
                href="https://github.com/Frisbeetarian/noon-backend"
                target="_blank"
                rel="noopener noreferrer"
              >
                Noon's internals
                <Image
                  className="text-white bg-white  rounded ml-3 "
                  width="20"
                  height="20"
                  src="/external-link.svg"
                  alt="external link icon"
                />
              </a>
            </h3>

            <p className="mb-4 ">
              The Noon backend is built using Node.js and Express for the
              server-side runtime environment and routing. It is mostly -
              refactor into TS ongoing - written in
              <a className="code">
                <code className="code">TypeScript</code>
              </a>
              . It utilizes Apollo Client for handling GraphQL queries and
              mutations, allowing for efficient and flexible data retrieval and
              manipulation. Real-time functionality is implemented using
              Socket.io for bi-directional communication between the client and
              server. Redis, as well as being as a caching layer, is also being
              used to store user sessions when users authenticate as well as
              Socket.io sessions and messages. PostgreSQL is used as the primary
              relational database for storing user and conferencing data. Neo4j
              is utilized for handling profile relationships, allowing for easy
              querying and traversal of complex social graphs. Elasticsearch is
              integrated for fast and powerful search capabilities. All of these
              technologies work together to provide a robust and scalable
              backend for handling a variety of features such as user
              management, social networking/conferencing, and search
              functionality.
            </p>

            <p className="mb-4 ">
              The Noon backend is designed as a set of microservices, rather
              than a monolithic application. The microservices communicate with
              each other using RabbitMQ as a message broker, utilizing the AMQP
              protocol. Each microservice is responsible for a specific set of
              functionality, allowing for increased scalability and
              maintainability. The microservices include:
            </p>

            <ul className="mb-4 ml-2 md:ml-4">
              <li ref={mediaRef} className="mb-4">
                <h4 className="w-full mb-2 text-lg md:text-xl">
                  <a
                    className="underline flex items-center transform hover:scale-[1.01] hover:ml-2 transition-all text-th-primary-dark"
                    href="https://github.com/Frisbeetarian/noon-media-microservice"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Media microservice
                    <Image
                      className="text-white bg-white rounded ml-3"
                      width="16"
                      height="16"
                      src="/external-link.svg"
                      alt="external link icon"
                    />
                  </a>
                </h4>

                <p className="ml-2 md:ml-4 mb-4">
                  This service is implemented using JavaScript, with Nodejs as
                  the runtime environment and Express to serve the static media
                  content. The media microservice is responsible for handling
                  all media-related functionality such as image and audio
                  uploads and processing. It utilizes the sharp package to
                  handle all image related data.
                </p>

                <p className="ml-2 md:ml-4 mb-4">
                  All media is written to the file system of the virtual private
                  server (VPS) where the microservice exists.
                </p>

                <p className="ml-2 md:ml-4 mb-4">
                  I have defined routes that correspond to the URLs where the
                  media files are stored. When a user requests a media file by
                  accessing the corresponding URL, Express intercepts the
                  request and retrieves the corresponding media file from the
                  file system. Once the file is retrieved, Express sends it to
                  the user's browser, allowing them to view or download the
                  media.
                </p>

                {/*<p className="ml-2 md:ml-4 mb-4">*/}
                {/*  By using Express to handle the serving of static media files, I*/}
                {/*  can easily control access to the files by adding authentication*/}
                {/*  and access control middlewares. This ensures that only authorized*/}
                {/*  users can access the media files and helps to protect against*/}
                {/*  unauthorized access and data breaches. Additionally, Express*/}
                {/*  provides a simple way to configure the cache headers for the media*/}
                {/*  files, which allows for better performance and reduces the load on*/}
                {/*  the server.*/}
                {/*</p>*/}

                <p className="ml-2 md:ml-4 mb-4">
                  In order to more easily adjust the size of the VPS to handle
                  increases in load, I am planning to containerize the media
                  microservice using Docker.
                </p>

                <p className="ml-2 md:ml-4 mb-4">
                  Once the media microservice is containerized, I plan on using
                  Kubernetes to manage the deployment and scaling of the
                  service. This will allow me to easily adjust the size of the
                  VPS to handle increases in load by scaling the number of
                  replicas of the container.
                </p>

                <p className="ml-2 md:ml-4 mb-4">
                  To protect media access, I have used nginx as a reverse proxy.
                  By using nginx as a reverse proxy, I can control access to the
                  media by setting up authentication and access control. This
                  ensures that only authorized users can access the media, and
                  helps to protect against unauthorized access and data
                  breaches.
                </p>

                <p className="ml-2 md:ml-4 mb-4">
                  Overall, by using Express in conjunction with other
                  technologies such as Sharp and Nginx, I have created a
                  powerful and scalable media microservice that can handle a
                  large number of media files, providing a smooth and responsive
                  user experience while ensuring the security and protection of
                  the media.
                </p>
              </li>

              <li ref={searchRef} className="mb-4">
                <h4 className="w-full mb-2 text-lg  md:text-xl">
                  <a
                    className="underline flex items-center transform hover:scale-[1.01] hover:ml-2 transition-all text-th-primary-dark"
                    href="https://github.com/Frisbeetarian/noon-search-microservice"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Search microservice
                    <Image
                      className="text-white bg-white  rounded ml-3 "
                      width="16"
                      height="16"
                      src="/external-link.svg"
                      alt="external link icon"
                    />
                  </a>
                </h4>

                <p className="ml-2 md:ml-4 mb-4">
                  This service is built using Elasticsearch and is responsible
                  for providing powerful search functionality for the
                  application. Like other design decisions pertaining to the
                  development of Noon, I opted for ES instead of managed
                  services like Algolia. A lot of these design decisions aren't
                  just about an ideological commitment to open source, but there
                  are also fairly practical and technical considerations
                  underpinning them, especially when it comes to scaling and how
                  it is associated to cost. My experience building similar
                  systems has show me that while these managed services make it
                  easy to experiment and prototype, they actually hold a
                  platform's growth back because their cost is significant.
                  Eventually necessitating re-engineering and refactoring; by
                  deploying a home grown solution.
                </p>
              </li>

              <li ref={relayRef} className="mb-4">
                <h4 className="w-full mb-2 text-lg  md:text-xl">
                  <a
                    className="underline flex items-center transform hover:scale-[1.01] hover:ml-2 transition-all text-th-primary-dark"
                    href="https://github.com/Frisbeetarian/noon-relay-microservice"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Relay microservice
                    <Image
                      className="text-white bg-white rounded ml-3"
                      width="16"
                      height="16"
                      src="/external-link.svg"
                      alt="external link icon"
                    />
                  </a>
                </h4>

                <p className="ml-2 md:ml-4 mb-4">
                  This service is built using Javascript and is responsible for
                  relaying emails and notifications to the users of Noon.
                </p>
              </li>

              <li ref={RPCRef} className="mb-4">
                <h4 className="w-full mb-2 text-lg  md:text-xl">
                  <a
                    className="underline flex items-center transform hover:scale-[1.01] hover:ml-2 transition-all text-th-primary-dark"
                    href="https://github.com/Frisbeetarian/noon-rabbit-mq-rpc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Noon remote procedure call package
                    <Image
                      className="text-white bg-white rounded ml-3 "
                      width="16"
                      height="16"
                      src="/external-link.svg"
                      alt="external link icon"
                    />
                  </a>
                </h4>

                <p className="ml-2 md:ml-4 mb-4">
                  The remote procedure call (RPC) package is a custom-built
                  package written in Typescript that handles all communication
                  between the microservices. It has two main modules: the client
                  module and the server module.
                </p>

                <p className="ml-2 md:ml-4 mb-4">
                  <span className="text-black dark:text-white">
                    The client module:
                  </span>
                  This module is responsible for sending messages to queues. It
                  allows the microservices to make requests to other
                  microservices by sending a message to a specific queue. The
                  message contains the information needed for the other service
                  to process the request, such as the method to be called and
                  any necessary parameters.
                </p>

                <p className="ml-2 md:ml-4 mb-4">
                  <span className="text-black dark:text-white">
                    The server module:
                  </span>
                  This module listens to the queues and responds to the messages
                  by sending ACKs (acknowledgements) to the corresponding
                  queues. The ACKs contain the results of the requested
                  operation or any errors that may have occurred.
                </p>

                <p className="ml-2 md:ml-4 mb-4">
                  Both the client and server modules use RabbitMQ as the message
                  broker and AMQP protocol to communicate. The package is
                  designed to be lightweight and easy to use, making it simple
                  to add new microservices and to communicate between them.
                </p>

                <p className="ml-2 md:ml-4 mb-4">
                  Additionally, the package utilizes the amqp-connection-manager
                  package which enables retries and timeouts. If the broker is
                  not able to respond within the specified time, the package
                  will retry the request after a certain interval of time. This
                  feature makes the Noon RPC package more robust and
                  fault-tolerant.
                </p>

                <p className="ml-2 md:ml-4 mb-4">
                  Overall, the Noon RPC package allows for decoupled and
                  efficient communication between the microservices, enabling
                  them to work together seamlessly and providing a smooth and
                  responsive user experience.
                </p>
              </li>

              <li ref={neo4jRef} className="mb-4">
                <h4 className="w-full mb-2 text-lg md:text-xl">
                  <a
                    className="underline flex items-center transform hover:scale-[1.01] hover:ml-2 transition-all text-th-primary-dark"
                    href="https://github.com/Frisbeetarian/noon-rabbit-mq-rpc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Neo4j Service
                    <Image
                      className="text-white bg-white rounded ml-3"
                      width="16"
                      height="16"
                      src="/external-link.svg"
                      alt="external link icon"
                    />
                  </a>
                </h4>
              </li>

              <p className="ml-4 mb-4">
                Lets take an example where one user is attempting to add another
                user as a friend. After searching for that specific user and
                getting the ES results, a friend request is sent:
              </p>

              <CodeBlock
                code={`await sendFriendRequest({
                variables: {
                  profileUuid: profile.uuid,
                },
              })`}
              ></CodeBlock>
              <p>
                where `profileUuid` is the uuid of the profile who is going to
                receive the friend request. The resolver receives the request
                and calls the graph API with sender and receiver details. The
                method then initiates the following Cypher query:
              </p>

              <CodeBlock
                code={`tx.run(
                MATCH (p1:Profile {uuid: $sUuid}) 
                MATCH (p2:Profile {uuid: $rUuid}) 
                MERGE (p1)-[friendRequest:FRIEND_REQUEST 
                {uuid: $recipientProfileUuid, username: $recipientProfileUsername }]->(p2) 
                RETURN p1, friendRequest, p2,
                {
                  sUuid: senderProfileUuid,
                  rUuid: recipientProfileUuid,
                  recipientProfileUuid,
                  recipientProfileUsername,
                }
              )`}
              />
              <p>
                A FRIEND_REQUEST relationship is created, going from profile1 to
                profile2, between the two profiles and the details of the
                receiving profile added to the relationship in order to easily
                identify who that relationship is targeting. The receiving
                profile then receives the request and can either deny or accept
                the friend request. If accepted, an acceptFriendRequest request
                is sent:
              </p>
              <CodeBlock
                code={`await acceptFriendRequest({
                variables: {
                  profileUuid: from,
                },
              })`}
              />
              <p>
                Where `from` is the uuid of the profile who originally sent the
                friend request. We get that uuid from the Socketio payload. The
                resolver receives the request and then calls the graph api to
                create that relationship:
              </p>
              <CodeBlock
                code={`
              tx.run(
                Match (p1:Profile {uuid: $sUuid})  
                Match (p2:Profile {uuid: $rUuid}) 
                Merge (p1)-[friends:FRIENDS 
                {uuid: $recipientProfileUuid, username: $recipientProfileUsername }]->(p2) 
                Merge (p2)-[:FRIENDS {uuid: $senderProfileUuid, username: $senderProfileUsername }]->(p1) 
                WITH p1, friends, p2 
                Match (p1)-[fr:FRIEND_REQUEST]->(p2) 
                DELETE fr 
                RETURN p1, friends, p2,
                {
                  sUuid: senderProfileUuid,
                  rUuid: recipientProfileUuid,
                  recipientProfileUuid,
                  recipientProfileUsername,
                  senderProfileUsername,
                  senderProfileUuid,
                }
              )
              `}
              />
              <p>
                The cypher query creates a bi-directional relationship of
                FRIENDS between the two profiles and then deletes the existing
                FRIEND_REQUEST relationship that they have between them. The
                method responsible for calling the graph method then receives a
                response, creates a conversation object and responds with the
                conversation object. The user accepting the friend request then
                receives the response, updates the store and emits an event to
                the user who requested the friendship that the request has been
                accepted. The user who initiated the friendship then receives
                the socket event and also updates the store with the
                conversation. A new conversation is created for both users and
                they are now able to converse.
              </p>

              <li ref={videoRef} className="mb-4">
                <h4 className="w-full mb-2 text-lg  md:text-xl">
                  <a
                    className="underline flex items-center transform hover:scale-[1.01] hover:ml-2 transition-all text-th-primary-dark"
                    href="https://github.com/Frisbeetarian/noon-search-microservice"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Video service
                    <Image
                      className="text-white bg-white rounded ml-3"
                      width="16"
                      height="16"
                      src="/external-link.svg"
                      alt="external link icon"
                    />
                  </a>
                </h4>

                <p className="ml-2 md:ml-4 mb-4">
                  Jitsi is an open-source video conferencing platform that was
                  chosen for its versatility and ease of deployment. The
                  platform is built on top of WebRTC, a technology that allows
                  for real-time communication through web browsers. This
                  eliminates the need for users to install any additional
                  software, making it easily accessible for anyone with a web
                  browser.
                </p>

                <p className="ml-2 md:ml-4 mb-4">
                  To deploy Jitsi, a DigitalOcean droplet was provisioned and
                  configured. This droplet, or virtual private server, was set
                  up to run Ubuntu, the operating system recommended by Jitsi.
                  The Jitsi package was then installed on the droplet, along
                  with any necessary dependencies, such as Prosody, an XMPP
                  server used for signaling in the Jitsi platform.
                </p>

                <p className="ml-2 md:ml-4 mb-4">
                  To secure the Jitsi platform, several measures were taken. A
                  valid SSL certificate was obtained and configured for the
                  Jitsi domain. Firewall rules were also set up to restrict
                  access to the Jitsi server and to only allow necessary
                  traffic. Although, for now, access is unrestricted for
                  development and testing purposes. You can access the Jitsi
                  instance running on the VPS by following the dedicated Noon
                  domain on
                  <a
                    className="underline text-black dark:text-white transform hover:scale-[1.01] hover:ml-1 transition-all text-th-primary-dark"
                    href="https://noon-vid.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.noon-vid.com
                  </a>
                  .
                  {/*. Additionally, regular updates were applied to the Jitsi platform*/}
                  {/*and all dependencies to ensure that any security vulnerabilities*/}
                  {/*were promptly addressed.*/}
                </p>

                {/*<p className="ml-2 md:ml-4 mb-4">*/}
                {/*  In summary, Jitsi was chosen as the open-source video conferencing*/}
                {/*  solution for its versatility and ease of deployment. A*/}
                {/*  DigitalOcean droplet was provisioned and configured to deploy, run*/}
                {/*  and secure the Jitsi platform and the ecosystem around it like*/}
                {/*  Prosody. The security of Jitsi was ensured by using SSL*/}
                {/*  certificate, firewall rules and regular updates.*/}
                {/*</p>*/}
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start rajdhani-light text-th-primary-medium">
            <div ref={clientRef} className="flex w-full">
              <h3 className="mt-8 mb-4 text-2xl  tracking-tight text-black md:text-4xl dark:text-white justify-center items-center">
                <a
                  className="underline flex items-center justify-center transform hover:scale-[1.01] hover:ml-1 transition-all text-th-primary-dark"
                  href="https://github.com/Frisbeetarian/noon-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Noon's client
                  <Image
                    className="text-white bg-white rounded ml-3 "
                    width="20"
                    height="20"
                    src="/external-link.svg"
                    alt="external link icon"
                  />
                </a>
              </h3>
            </div>

            <p className="ml-2 md:ml-4 mb-4 ">
              The Noon web client is built as a Single Page Application (SPA),
              written in TypeScript using React and Next.js as the framework. It
              utilizes Redux Toolkit for state management. Real-time
              functionality is implemented using Socket.io for bi-directional
              communication between the client and server. GraphQL and Apollo
              Client are used to handle queries and mutations. GraphQL Codegen
              is used to automatically generate the GraphQL syntax, reducing the
              need for manual type definitions. The design of the platform is
              implemented with Chakra UI, a popular library for building
              accessible, modular, and customizable UI components. For styling,
              it uses TailwindCSS, a utility-first CSS framework for rapidly
              building custom designs with a consistent look and feel. All these
              technologies are used together to create a high-performance and
              user-friendly client platform that seamlessly communicates with
              the API, providing a smooth and responsive user experience.
            </p>

            <p className="ml-2 md:ml-4 mb-4 ">
              The functionality of the client is split up into various
              components and utility functions, each responsible for a specific
              set of tasks.
            </p>

            <p className="ml-2 md:ml-4 mb-4 ">
              All state in the application is managed using Redux/Redux Toolkit.
              RTK allows for a centralized and predictable state management.
              Sure, adding complexity (vuex/pinia {'>>'} redux, I will fight
              over this) but without which using react context or a dedicated
              pub/sub mechanism for events would have been necessary, and that
              is a big nono in my eyes for anything resembling more than just
              simple state management.
            </p>

            <p className="ml-2 md:ml-4 mb-4 ">
              RTK is used to store the logged-in user, to populate the
              conversations, and to update the conversations with the messages
              sent, amongst a myriad of other things. Additionally, I have also
              used it to handle various UI changes such as toggling the menu,
              displaying modals and toasts, and showing loading indicators. By
              using Redux, I can ensure that the state of the application is
              consistent and that all changes are handled in a predictable and
              consistent way.
            </p>

            <h4 ref={RTKRef} className="w-full mb-2 text-lg md:text-xl">
              <a
                className="underline flex items-center transform hover:scale-[1.01] hover:ml-2 transition-all text-th-primary-dark"
                href="https://github.com/Frisbeetarian/noon-client/blob/main/src/store/store.ts"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Store
                <Image
                  className="text-white bg-white  rounded ml-3 "
                  width="16"
                  height="16"
                  src="/external-link.svg"
                  alt="external link icon"
                />
              </a>
            </h4>

            <p className="ml-2 md:ml-4 mb-4 ">
              The Noon store utilizes a number of different reducers to manage
              specific aspects of the application's state. Among which:
            </p>

            <p className="ml-2 md:ml-4 mb-4 ">
              <span className="text-th-primary-dark rajdhani-light">
                Users reducer
              </span>
              : is responsible for storing and retrieving user authentication
              state. This includes information such as login credentials,
              session tokens, and other user-specific data.
            </p>

            <p className="ml-2 md:ml-4 mb-4">
              <span className="text-th-primary-dark ">Profiles reducer</span>:
              is responsible for managing the list of profiles for friends and
              tracking friend requests, blocked/unfriended, etc. It also keeps
              track of who the logged in user sent friend requests to and
              received friend requests from.
            </p>

            <p className="ml-2 md:ml-4 mb-4">
              <span className="text-th-primary-dark ">UI reducer</span>: is
              responsible for managing the state of the user interface,
              including managing the active navigation, displaying and hiding UI
              elements, and handling any UI-related errors or issues.
            </p>

            <p className="ml-2 md:ml-4 mb-4 ">
              <span className="text-th-primary-dark ">Chat reducer</span>: is
              responsible for instantiating and managing conversations, keeping
              track of active conversations, updating conversations with new
              messages, etc.
            </p>

            <p className="ml-2 md:ml-4 mb-4 ">
              <span className="text-th-primary-dark ">Search reducer</span>: is
              responsible for managing the search filters, which include setting
              and updating search queries, handling search results, and managing
              any search-related errors or issues.
            </p>

            <p className="ml-2 md:ml-4 mb-4 ">
              <span className="text-th-primary-dark ">Groups reducer</span>: is
              responsible for managing the state of groups, including creating
              new groups, updating existing groups, and handling any
              group-related errors or issues.
            </p>

            <p className="ml-2 md:ml-4 mb-4 ">
              <span className="text-th-primary-dark ">Video reducer</span>: is
              responsible for instantiating and managing video conversations,
              keeping track of their state, and handling any video-related
              errors or issues.
            </p>

            <p className="ml-2 md:ml-4 mb-4 ">
              <span className="text-th-primary-dark ">Files reducer</span>: is
              responsible for managing files, including uploading, downloading,
              and deleting files, and handling any file-related errors or
              issues.
            </p>

            {/*<p className="ml-4 mb-4 ">*/}
            {/*  <span className="text-black dark:text-white ">*/}
            {/*    Profiles reducer*/}
            {/*  </span>*/}
            {/*  The "sockets" reducer is responsible for managing the state of socket*/}
            {/*  connections, including managing open and closed connections, and*/}
            {/*  handling any errors or disconnections.*/}
            {/*</p>*/}

            <h4
              ref={videoBridgeRef}
              className="w-full mb-2 text-lg  md:text-xl"
            >
              <a
                className="underline flex items-center transform hover:scale-[1.01] hover:ml-2 transition-all text-th-primary-dark"
                href="https://github.com/Frisbeetarian/noon-client/blob/main/src/components/Video.tsx"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Videobridge2 connection
                <Image
                  className="text-white bg-white rounded ml-3 "
                  width="16"
                  height="16"
                  src="/external-link.svg"
                  alt="external link icon"
                />
              </a>
            </h4>

            <p className="ml-2 md:ml-4 mb-4">
              I integrated the Jitsi package into the client by using the Jitsi
              Meet SDK. The Noon Video component initializes the connection, via
              the React component provided by SDK, to Videobridge2 on the VPS
              instance where Jitsi is configured and running. Once the
              connection is established, the component prepares an iframe to be
              embedded into the conversation window where the video call is
              requested.
            </p>

            <p className="ml-2 md:ml-4 mb-4">
              Overall, by building Noon as an SPA, I have created a smooth and
              responsive user experience while also providing the ability to
              later on learn and adopt React Native to build the mobile
              applications (a process which I have started a few weeks ago).
            </p>

            <p className="ml-2 md:ml-4 mb-4">
              On build, a linting and verification process ensures that the code
              is free of any syntax or semantic errors before deployment. Vercel
              is used for deployment.
            </p>
          </div>

          <div className="flex flex-col md:flex-row w-full items-center md:items-start justify-around">
            <div ref={dependenciesRef} className="mb-10 md:mb-0">
              <h4 className="w-full mb-2 text-lg md:text-xl mb-5">
                Backend dependencies as of v0.0.5-alpha
              </h4>

              <table className="table-auto">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="px-4 py-2">Dependency</th>
                    <th className="px-4 py-2">Version</th>
                  </tr>
                </thead>

                <tbody className="text-black">
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">@elastic/elasticsearch</td>
                    <td className="px-4 py-2">7.17.0</td>
                  </tr>

                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">@neo4j/graphql</td>
                    <td className="px-4 py-2">2.5.9</td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">@noon/rabbit-mq-rpc</td>
                    <td className="px-4 py-2">0.0.19</td>
                  </tr>

                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">@socket.io/admin-ui</td>
                    <td className="px-4 py-2">0.5.1</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">@socket.io/sticky</td>
                    <td className="px-4 py-2">1.0.0</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">amqp-connection-manager</td>
                    <td className="px-4 py-2">4.1.6</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">amqplib</td>
                    <td className="px-4 py-2">0.10.2</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">apollo-server-core</td>
                    <td className="px-4 py-2">3.11.1</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">apollo-server-express</td>
                    <td className="px-4 py-2">3.11.1</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">argon2</td>
                    <td className="px-4 py-2">0.27.2</td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">class-validator</td>
                    <td className="px-4 py-2">0.13.1</td>
                  </tr>

                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">cluster</td>
                    <td className="px-4 py-2">0.7.7</td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">connect-redis</td>
                    <td className="px-4 py-2">6.0.0</td>
                  </tr>

                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">cors</td>
                    <td className="px-4 py-2">2.8.5</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">dataloader</td>
                    <td className="px-4 py-2">2.0.0</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">dotenv</td>
                    <td className="px-4 py-2">16.0.3</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">dotenv-safe</td>
                    <td className="px-4 py-2">8.2.0</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">express</td>
                    <td className="px-4 py-2">4.18.2</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">express-graphql</td>
                    <td className="px-4 py-2">0.12.0</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">express-session</td>
                    <td className="px-4 py-2">1.17.2</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">flatted</td>
                    <td className="px-4 py-2">3.2.6</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">graphql</td>
                    <td className="px-4 py-2">16.6.0</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">graphql-upload-minimal</td>
                    <td className="px-4 py-2">1.5.3</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">http</td>
                    <td className="px-4 py-2">0.0.1-security</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">http-proxy-middleware</td>
                    <td className="px-4 py-2">2.0.6</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">ioredis</td>
                    <td className="px-4 py-2">4.27.6</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">jimp</td>
                    <td className="px-4 py-2">0.16.2</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">json-fn</td>
                    <td className="px-4 py-2">1.1.1</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">neo4j-driver</td>
                    <td className="px-4 py-2">4.4.7</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">nodemailer</td>
                    <td className="px-4 py-2">6.7.8</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">pg</td>
                    <td className="px-4 py-2">8.6.0</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">reflect-metadata</td>
                    <td className="px-4 py-2">0.1.13</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">socket.io</td>
                    <td className="px-4 py-2">4.5.1</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">socket.io-redis</td>
                    <td className="px-4 py-2">6.0.1</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">type-graphql-dataloader</td>
                    <td className="px-4 py-2">0.5.0</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">typeorm</td>
                    <td className="px-4 py-2">0.2.34</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">uuid</td>
                    <td className="px-4 py-2">8.3.2</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">@types/connect-redis</td>
                    <td className="px-4 py-2">0.0.16</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">@types/cors</td>
                    <td className="px-4 py-2">2.8.10</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">@types/express</td>
                    <td className="px-4 py-2">4.17.11</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">@types/express-session</td>
                    <td className="px-4 py-2">1.17.3</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">@types/ioredis</td>
                    <td className="px-4 py-2">4.26.5</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">@types/node</td>
                    <td className="px-4 py-2">15.0.2</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">@types/nodemailer</td>
                    <td className="px-4 py-2">6.4.4</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">@types/redis</td>
                    <td className="px-4 py-2">2.8.29</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">@types/uuid</td>
                    <td className="px-4 py-2">8.3.1</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">gen-env-types</td>
                    <td className="px-4 py-2">1.3.4</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">nodemon</td>
                    <td className="px-4 py-2">2.0.7</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">ts-node</td>
                    <td className="px-4 py-2">10.9.1</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">type-graphql</td>
                    <td className="px-4 py-2">2.0.0-beta.1</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">typescript</td>
                    <td className="px-4 py-2">4.9.4</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">sharp</td>
                    <td className="px-4 py-2">0.31.3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="">
              <h4 className="w-full mb-2 text-lg  md:text-xl mb-5">
                Client dependencies as of v0.0.5-alpha
              </h4>

              <table className="table-auto">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="py-2">Dependency</th>
                    <th className="px-4 py-2">Version</th>
                  </tr>
                </thead>

                <tbody className="text-black">
                  <tr className="bg-gray-100 dark:bg-gray-100">
                    <td className="px-4 py-2">@apollo/client</td>
                    <td className="px-4 py-2">3.7.3</td>
                  </tr>

                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">@chakra-ui/icons</td>
                    <td className="px-4 py-2">2.0.13</td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">@chakra-ui/react</td>
                    <td className="px-4 py-2">2.4.2</td>
                  </tr>

                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">@chakra-ui/system</td>
                    <td className="px-4 py-2">2.3.6</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">@chakra-ui/theme-tools</td>
                    <td className="px-4 py-2">2.0.14</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">@emotion/react</td>
                    <td className="px-4 py-2">11.10.5</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">@emotion/styled</td>
                    <td className="px-4 py-2">11.10.5</td>
                  </tr>

                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">@graphql-codegen/add</td>
                    <td className="px-4 py-2">3.2.1</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">@jitsi/react-sdk</td>
                    <td className="px-4 py-2">1.0.2</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">@reduxjs/toolkit</td>
                    <td className="px-4 py-2">1.8.1</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">@typescript-eslint/parser</td>
                    <td className="px-4 py-2">5.47.1</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">apollo-upload-client</td>
                    <td className="px-4 py-2">17.0.0</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">axios</td>
                    <td className="px-4 py-2">1.2.2</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">daisyui</td>
                    <td className="px-4 py-2">2.17.0</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">form-data</td>
                    <td className="px-4 py-2">4.0.0</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">formik</td>
                    <td className="px-4 py-2">2.2.9</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">framer-motion</td>
                    <td className="px-4 py-2">6.5.1</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">graphql</td>
                    <td className="px-4 py-2">16.6.0</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">graphql-tag</td>
                    <td className="px-4 py-2">2.12.5</td>
                  </tr>

                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">http-proxy-middleware</td>
                    <td className="px-4 py-2">2.0.6</td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">moment</td>
                    <td className="px-4 py-2">2.29.3</td>
                  </tr>

                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">next</td>
                    <td className="px-4 py-2">13.1.1</td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">next-apollo</td>
                    <td className="px-4 py-2">5.0.8</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">next-redux-wrapper</td>
                    <td className="px-4 py-2">7.0.5</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">pubsub-js</td>
                    <td className="px-4 py-2">1.9.4</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">react</td>
                    <td className="px-4 py-2">18.2.0</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">react-audio-player</td>
                    <td className="px-4 py-2">0.17.0</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">react-datepicker</td>
                    <td className="px-4 py-2">4.8.0</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">react-dom</td>
                    <td className="px-4 py-2">18.2.0</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">react-dropzone</td>
                    <td className="px-4 py-2">14.2.2</td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">react-icons</td>
                    <td className="px-4 py-2">4.4.0</td>
                  </tr>

                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">
                      react-infinite-scroll-component
                    </td>
                    <td className="px-4 py-2">6.1.0</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">react-is</td>
                    <td className="px-4 py-2">18.2.0</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">react-redux</td>
                    <td className="px-4 py-2">8.0.2</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">react-router-dom</td>
                    <td className="px-4 py-2">6.3.0</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">redis-commander</td>
                    <td className="px-4 py-2">0.8.0</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">redux</td>
                    <td className="px-4 py-2">4.2.0</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">redux-devtools-extension</td>
                    <td className="px-4 py-2">2.13.9</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">redux-persist</td>
                    <td className="px-4 py-2">6.0.0</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">redux-thunk</td>
                    <td className="px-4 py-2">2.4.1</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">reselect</td>
                    <td className="px-4 py-2">4.1.6</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">socket.io-client</td>
                    <td className="px-4 py-2">4.5.1</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">uuid</td>
                    <td className="px-4 py-2">9.0.0</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">uuidv4</td>
                    <td className="px-4 py-2">6.2.13</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">yup</td>
                    <td className="px-4 py-2">0.32.11</td>
                  </tr>

                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">@graphql-codegen/cli</td>
                    <td className="px-4 py-2">2.16.2</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">@graphql-codegen/typescript</td>
                    <td className="px-4 py-2">2.8.6</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">
                      @graphql-codegen/typescript-operations
                    </td>
                    <td className="px-4 py-2">2.5.11</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">
                      @graphql-codegen/typescript-react-apollo
                    </td>
                    <td className="px-4 py-2">3.3.7</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">@next/font</td>
                    <td className="px-4 py-2">13.1.1</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">@tailwindcss/typography</td>
                    <td className="px-4 py-2">0.5.2</td>
                  </tr>

                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">
                      @types/dom-mediacapture-record
                    </td>
                    <td className="px-4 py-2">1.0.12</td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">@types/node</td>
                    <td className="px-4 py-2">18.11.18</td>
                  </tr>

                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">@types/react</td>
                    <td className="px-4 py-2">18.0.26</td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">@types/react-dom</td>

                    <td className="px-4 py-2">18.0.10</td>
                  </tr>

                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">
                      @typescript-eslint/eslint-plugin
                    </td>

                    <td className="px-4 py-2">5.47.0</td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">autoprefixer</td>
                    <td className="px-4 py-2">10.4.2</td>
                  </tr>

                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">eslint</td>
                    <td className="px-4 py-2">8.30.0</td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">eslint-config-next</td>
                    <td className="px-4 py-2">13.1.1</td>
                  </tr>

                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">eslint-config-prettier</td>
                    <td className="px-4 py-2">8.3.0</td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">postcss</td>
                    <td className="px-4 py-2">8.4.8</td>
                  </tr>

                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">prettier</td>
                    <td className="px-4 py-2">2.3.2</td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">tailwindcss</td>
                    <td className="px-4 py-2">3.0.23</td>
                  </tr>

                  <tr className="bg-gray-200">
                    <td className="px-4 py-2">typescript</td>
                    <td className="px-4 py-2">4.9.4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
          {/*</>*/}
          {/*)}*/}
          {/*<Suspense fallback={null}>*/}
          {/*  <h3 className="mt-8 mb-4 text-2xl  tracking-tight text-black md:text-4xl dark:text-white">*/}
          {/*    All Posts*/}
          {/*  </h3>*/}
          {/*{!filteredBlogPosts.length && (*/}
          {/*  <p className="mb-4 ">*/}
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
      </div>
    </Container>
  );
}

// export async function getStaticProps({ preview = false }) {
//   const posts: Post[] = await getClient(preview).fetch(indexQuery);
//
//   return { props: { posts } };
// }
