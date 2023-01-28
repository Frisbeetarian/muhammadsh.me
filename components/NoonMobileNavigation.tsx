import React, { useEffect, useRef } from 'react';

function NoonMobileNavigation({
  internalsRef,
  mediaRef,
  searchRef,
  relayRef,
  RPCRef,
  videoRef,
  clientRef,
  RTKRef,
  videoBridgeRef,
  dependenciesRef
}) {
  const internalsNavRef = useRef(null);
  const mediaNavRef = useRef(null);
  const searchNavRef = useRef(null);
  const relayNavRef = useRef(null);
  const RPCNavRef = useRef(null);
  const videoNavRef = useRef(null);
  const clientNavRef = useRef(null);
  const RTKNavRef = useRef(null);
  const videoBridgeNavRef = useRef(null);
  const dependenciesNavRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      let scrollYLet = scrollY + 20;
      if (
        scrollYLet > internalsRef.current.offsetTop &&
        scrollYLet < mediaRef.current.offsetTop
      ) {
        internalsNavRef.current.style.textDecoration = 'underline';
      } else {
        internalsNavRef.current.style.textDecoration = 'none';
      }

      if (
        scrollYLet > mediaRef.current.offsetTop &&
        scrollYLet < searchRef.current.offsetTop
      ) {
        mediaNavRef.current.style.textDecoration = 'underline';
      } else {
        mediaNavRef.current.style.textDecoration = 'none';
      }

      if (
        scrollYLet > searchRef.current.offsetTop &&
        scrollYLet < relayRef.current.offsetTop
      ) {
        searchNavRef.current.style.textDecoration = 'underline';
      } else {
        searchNavRef.current.style.textDecoration = 'none';
      }

      if (
        scrollYLet > relayRef.current.offsetTop &&
        scrollYLet < RPCRef.current.offsetTop
      ) {
        relayNavRef.current.style.textDecoration = 'underline';
      } else {
        relayNavRef.current.style.textDecoration = 'none';
      }

      if (
        scrollYLet > RPCRef.current.offsetTop &&
        scrollYLet < videoRef.current.offsetTop
      ) {
        RPCNavRef.current.style.textDecoration = 'underline';
      } else {
        RPCNavRef.current.style.textDecoration = 'none';
      }

      if (
        scrollYLet > videoRef.current.offsetTop &&
        scrollYLet < clientRef.current.offsetTop
      ) {
        videoNavRef.current.style.textDecoration = 'underline';
      } else {
        videoNavRef.current.style.textDecoration = 'none';
      }

      if (
        scrollYLet > clientRef.current.offsetTop &&
        scrollYLet < RTKRef.current.offsetTop
      ) {
        clientNavRef.current.style.textDecoration = 'underline';
      } else {
        clientNavRef.current.style.textDecoration = 'none';
      }

      if (
        scrollYLet > RTKRef.current.offsetTop &&
        scrollYLet < videoBridgeRef.current.offsetTop
      ) {
        RTKNavRef.current.style.textDecoration = 'underline';
      } else {
        RTKNavRef.current.style.textDecoration = 'none';
      }

      if (
        scrollYLet > videoBridgeRef.current.offsetTop &&
        scrollYLet < dependenciesRef.current.offsetTop
      ) {
        videoBridgeNavRef.current.style.textDecoration = 'underline';
      } else {
        videoBridgeNavRef.current.style.textDecoration = 'none';
      }

      if (scrollYLet > dependenciesRef.current.offsetTop) {
        dependenciesNavRef.current.style.textDecoration = 'underline';
      } else {
        dependenciesNavRef.current.style.textDecoration = 'none';
      }

      console.log(window.scrollY);
      console.log('internalsRef:', internalsRef.current.offsetTop);
    };
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleInternalsScroll = () => {
    internalsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMediaScroll = () => {
    mediaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearchScroll = () => {
    searchRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRelayScroll = () => {
    relayRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRPCScroll = () => {
    RPCRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVideoScroll = () => {
    videoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClientScroll = () => {
    clientRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRTKScroll = () => {
    RTKRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVideoBridgeScroll = () => {
    videoBridgeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDependenciesScroll = () => {
    dependenciesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex w-11/12 justify-center p-4 bg-gray-900 fixed bottom-0 z-50 text-sm">
      <ul className="animate transition-all mb-1   flex-1 ">
        <li
          ref={internalsNavRef}
          onClick={handleInternalsScroll}
          className="text-xl rajdhani-semi-bold hover:ml-1 cursor-pointer transition-all mb-1"
        >
          Internals
        </li>
        <li
          ref={mediaNavRef}
          onClick={handleMediaScroll}
          className="ml-2 mb-1 hover:ml-3 cursor-pointer transition-all mb-1"
        >
          Media Microservice
        </li>
        <li
          ref={searchNavRef}
          onClick={handleSearchScroll}
          className="ml-2 mb-1 hover:ml-3 cursor-pointer transition-all mb-1"
        >
          Search Microservice
        </li>
        <li
          ref={relayNavRef}
          onClick={handleRelayScroll}
          className="ml-2 mb-1 hover:ml-3 cursor-pointer transition-all mb-1"
        >
          Relay Microservice
        </li>
        <li
          ref={RPCNavRef}
          onClick={handleRPCScroll}
          className="ml-2 mb-1 hover:ml-3 cursor-pointer transition-all mb-1"
        >
          RPC Package
        </li>
        <li
          ref={videoNavRef}
          onClick={handleVideoScroll}
          className="ml-2 hover:ml-3 cursor-pointer transition-all mb-1"
        >
          Video Service
        </li>
      </ul>

      <ul className=" animate transition-all mb-1  flex-1">
        <li
          ref={clientNavRef}
          onClick={handleClientScroll}
          className="text-xl rajdhani-semi-bold hover:ml-1 cursor-pointer transition-all mb-1"
        >
          Client
        </li>
        <li
          ref={RTKNavRef}
          onClick={handleRTKScroll}
          className="ml-2 mb-1 hover:ml-3 cursor-pointer transition-all mb-1"
        >
          RTK Store
        </li>
        <li
          ref={videoBridgeNavRef}
          onClick={handleVideoBridgeScroll}
          className="ml-2 mb-1 hover:ml-3 cursor-pointer transition-all mb-1"
        >
          Videobridge2 Connection
        </li>

        <li
          ref={dependenciesNavRef}
          onClick={handleDependenciesScroll}
          className="rajdhani-semi-bold hover:ml-1 cursor-pointer transition-all mb-1"
        >
          Dependencies
        </li>
      </ul>

      {/*<ul className="my-4">*/}
      {/*  <li*/}
      {/*    ref={dependenciesNavRef}*/}
      {/*    onClick={handleDependenciesScroll}*/}
      {/*    className="rajdhani-semi-bold hover:ml-1 cursor-pointer transition-all mb-1"*/}
      {/*  >*/}
      {/*    Dependencies*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </div>
  );
}

export default NoonMobileNavigation;
