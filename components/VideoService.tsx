import React from 'react';
import Image from 'next/image';

function VideoService(props) {
  return (
    <div>
      <li className="mb-4">
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
          Jitsi is an open-source video conferencing platform that was chosen
          for its versatility and ease of deployment. The platform is built on
          top of WebRTC, a technology that allows for real-time communication
          through web browsers. This eliminates the need for users to install
          any additional software, making it easily accessible for anyone with a
          web browser.
        </p>

        <p className="ml-2 md:ml-4 mb-4">
          To deploy Jitsi, a DigitalOcean droplet was provisioned and
          configured. This droplet, or virtual private server, was set up to run
          Ubuntu, the operating system recommended by Jitsi. The Jitsi package
          was then installed on the droplet, along with any necessary
          dependencies, such as Prosody, an XMPP server used for signaling in
          the Jitsi platform.
        </p>

        <p className="ml-2 md:ml-4 mb-4">
          To secure the Jitsi platform, several measures were taken. A valid SSL
          certificate was obtained and configured for the Jitsi domain. Firewall
          rules were also set up to restrict access to the Jitsi server and to
          only allow necessary traffic. Although, for now, access is
          unrestricted for development and testing purposes. You can access the
          Jitsi instance running on the VPS by following the dedicated Noon
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
    </div>
  );
}

export default VideoService;
